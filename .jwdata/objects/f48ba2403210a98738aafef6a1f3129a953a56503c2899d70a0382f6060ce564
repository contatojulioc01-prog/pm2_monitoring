import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { Permission, Folder } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ExportService {

  private ignoreList = [
    'system', 'administrators', 'administradores', 'users', 'usuarios', 'guests', 'convidados',
    'creator owner', 'proprietario criador', 'creator group', 'grupo criador',
    'everyone', 'todos', 'iis_iusrs', 'network service', 'servico de rede',
    'local service', 'servico local', 'authenticated users', 'usuarios autenticados',
    'interactive', 'interativo', 'network', 'rede', 'service', 'servico',
    'anonymous logon', 'logon anonimo', 'trustedinstaller', 'defaultaccount', 'guest', 'convidado',
    'wdiadmin', 'fontdrvhost', 'dwm', 'umfd', 'nt service', 'apppool', 'desconhecido'
  ];

  private isIgnored(name: string): boolean {
    if (!name) return true;
    let n = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (n.includes('\\')) n = n.split('\\')[1];
    if (this.ignoreList.includes(n)) return true;
    if (n === 'administrador' || n === 'sistema' || n === 'wdagutilityaccount') return true;
    if (n.startsWith('nt authority') || n.startsWith('builtin') || n.startsWith('window manager') || n.startsWith('nt service')) return true;
    if (n.startsWith('s-1-')) return true;
    if (n.startsWith('sqlexpress')) return true;
    if (n.includes('teste') || n.includes('test')) return true;
    return false;
  }

  private ascii(str: string): string {
    return (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\x00-\x7F]/g, '?');
  }

  private shortName(path: string): string {
    const parts = path.replace(/\\/g, '/').split('/').filter(Boolean);
    return parts[parts.length - 1] || path;
  }

  private truncate(str: string, maxLen: number): string {
    return str.length > maxLen ? str.substring(0, maxLen - 1) + '.' : str;
  }

  private downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 150);
  }

  /**
   * Matriz: Linhas = Pastas, Colunas = Usuários
   * Cada célula: 'X' se o usuário tem acesso à pasta, '' caso contrário
   */
  private buildMatrix(permissions: Permission[]) {
    // 1. Filtrar permissões válidas
    const validPerms = permissions.filter(p => !this.isIgnored(p.targetName));

    // 2. Extrair pastas únicas (ordenadas)
    const folderPaths = Array.from(new Set(validPerms.map(p => p.path))).sort();

    // 3. Extrair usuários únicos (ordenados)
    const userNames = Array.from(new Set(validPerms.map(p => p.targetName))).sort();

    // 4. Mapa (folderPath -> Set de usuários com acesso)
    const accessMap = new Map<string, Set<string>>();
    for (const p of validPerms) {
      if (!accessMap.has(p.path)) {
        accessMap.set(p.path, new Set());
      }
      accessMap.get(p.path)!.add(p.targetName);
    }

    return { folderPaths, userNames, accessMap, validPerms };
  }

  /**
   * EXPORTAÇÃO XLSX
   */
  exportToXLSX(permissions: Permission[], serverName: string, folders?: Folder[]) {
    const { folderPaths, userNames, accessMap } = this.buildMatrix(permissions);

    const pad = (n: number) => n.toString().padStart(2, '0');
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

    // Montar Cabeçalho
    const header = ['Caminho da Pasta', 'Nome da Pasta', ...userNames];
    const rows: (string | number)[][] = [header];

    // Montar Linhas
    for (const fPath of folderPaths) {
      const usersWithAccess = accessMap.get(fPath) || new Set();
      const folderName = this.shortName(fPath);

      const row: (string | number)[] = [
        fPath,
        folderName,
        ...userNames.map(u => usersWithAccess.has(u) ? 'X' : '')
      ];
      rows.push(row);
    }

    // Criar Workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(rows);

    // Largura das Colunas
    const colWidths = [
      { wch: 45 },
      { wch: 25 },
      ...userNames.map(u => ({ wch: Math.max(u.length + 2, 6) }))
    ];
    ws['!cols'] = colWidths;

    XLSX.utils.book_append_sheet(wb, ws, 'Matriz de Acessos');

    // Salvar arquivo
    const safeServerName = (serverName || 'servidor').replace(/[^a-zA-Z0-9_-]/g, '_');
    XLSX.writeFile(wb, `matriz_permissoes_${safeServerName}_${dateStr}.xlsx`);
  }

  /**
   * EXPORTAÇÃO PDF
   */
  exportToPDF(permissions: Permission[], serverName: string) {
    const { folderPaths, userNames, accessMap } = this.buildMatrix(permissions);

    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: 'a4'
    });

    const pad = (n: number) => n.toString().padStart(2, '0');
    const now = new Date();
    const dateStr = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;

    // Cabeçalho do Relatório
    doc.setFontSize(16);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(`Relatório de Matriz de Acessos - ${serverName}`, 40, 40);

    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text(`Gerado em: ${dateStr} | Total de Pastas: ${folderPaths.length} | Usuários: ${userNames.length}`, 40, 56);

    const headers = ['Pasta', ...userNames.map(u => this.truncate(u, 12))];

    const body: string[][] = [];
    for (const fPath of folderPaths) {
      const usersWithAccess = accessMap.get(fPath) || new Set();
      const folderName = this.truncate(this.shortName(fPath), 28);

      const row = [
        folderName,
        ...userNames.map(u => usersWithAccess.has(u) ? 'X' : '')
      ];
      body.push(row);
    }

    autoTable(doc, {
      startY: 70,
      head: [headers],
      body: body,
      theme: 'grid',
      headStyles: {
        fillColor: [79, 70, 229], // Indigo
        textColor: [255, 255, 255],
        fontSize: 7.5,
        halign: 'center',
        valign: 'middle'
      },
      styles: {
        fontSize: 7,
        cellPadding: 3,
        overflow: 'ellipsize'
      },
      columnStyles: {
        0: { halign: 'left', fontStyle: 'bold', cellWidth: 120 }
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252] // slate-50
      },
      margin: { left: 30, right: 30, bottom: 30 }
    });

    const safeServerName = (serverName || 'servidor').replace(/[^a-zA-Z0-9_-]/g, '_');
    doc.save(`matriz_permissoes_${safeServerName}.pdf`);
  }
}

