/**
 * Utilitário para filtragem de permissões de pastas raiz.
 * Conforme regra de negócio:
 * 1. Ocultar a pasta raiz "/" quando ela for apenas leitura técnica/travessia e o usuário tiver pastas específicas atribuídas.
 * 2. Ocultar subpastas que tenham permissão igual ou herdada da pasta pai, mantendo apenas a pasta raiz de acesso daquele ramo.
 * 3. Se uma subpasta conceder permissão adicional (ex: pai é apenas Leitura, mas subpasta é Escrita), exibir a subpasta também.
 * 4. Se o usuário tiver controle total (Leitura + Escrita) na raiz "/", exibe apenas "/" pois ela cobre todo o compartilhamento.
 */

function isSubpath(parent, child) {
  if (!parent || !child || parent === child) return false;
  if (parent === '/') {
    return child.startsWith('/') && child.length > 1;
  }
  return child.startsWith(parent + '/');
}

function filterRootPermissions(permissions) {
  if (!Array.isArray(permissions) || permissions.length === 0) return [];

  // 1. Agrupar permissões por servidor e caminho (consolidando permissões diretas e via grupos)
  const serverPathMap = new Map();
  for (const p of permissions) {
    const sId = p.serverId || 'default';
    const key = `${sId}:::${p.path}`;
    if (!serverPathMap.has(key)) {
      serverPathMap.set(key, {
        ...p,
        read: p.read ? 1 : 0,
        write: p.write ? 1 : 0
      });
    } else {
      const existing = serverPathMap.get(key);
      existing.read = (existing.read || p.read) ? 1 : 0;
      existing.write = (existing.write || p.write) ? 1 : 0;

      // Se um for direto do usuário, dá preferência ao tipo usuário
      if (existing.type !== 'user' && p.type === 'user') {
        existing.type = p.type;
        existing.targetName = p.targetName;
      } else if (existing.type === 'group' && p.type === 'group' && existing.targetName !== p.targetName) {
        const groups = Array.from(new Set([...existing.targetName.split(', '), p.targetName]));
        existing.targetName = groups.join(', ');
      }
    }
  }

  // Agrupar por servidor para garantir isolamento se houver múltiplos servidores
  const byServer = new Map();
  for (const item of serverPathMap.values()) {
    const sId = item.serverId || 'default';
    if (!byServer.has(sId)) byServer.set(sId, []);
    byServer.get(sId).push(item);
  }

  const finalResult = [];

  for (const [, list] of byServer.entries()) {
    const hasSubfolders = list.some(p => p.path !== '/');

    // Ordenar por profundidade (níveis menores primeiro) e alfabeticamente
    list.sort((a, b) => {
      const depthA = a.path === '/' ? 0 : a.path.split('/').length;
      const depthB = b.path === '/' ? 0 : b.path.split('/').length;
      if (depthA !== depthB) return depthA - depthB;
      return a.path.localeCompare(b.path);
    });

    const kept = [];

    for (const item of list) {
      // Se for a raiz "/" com apenas leitura (write = 0) e o usuário possui pastas específicas atribuídas, oculta a raiz
      if (item.path === '/' && item.write === 0 && hasSubfolders) {
        continue;
      }

      // Procura o ancestral mais próximo (mais profundo) que já foi mantido
      let closestAncestor = null;
      let closestAncestorDepth = -1;

      for (const k of kept) {
        if (isSubpath(k.path, item.path)) {
          const kDepth = k.path === '/' ? 0 : k.path.split('/').length;
          if (kDepth > closestAncestorDepth) {
            closestAncestor = k;
            closestAncestorDepth = kDepth;
          }
        }
      }

      if (!closestAncestor) {
        kept.push(item);
      } else {
        // Concede permissão adicional que o ancestral não tem?
        const grantsNewWrite = item.write === 1 && closestAncestor.write === 0;
        const grantsNewRead = item.read === 1 && closestAncestor.read === 0;

        if (grantsNewWrite || grantsNewRead) {
          kept.push(item);
        }
      }
    }

    finalResult.push(...kept);
  }

  finalResult.sort((a, b) => a.path.localeCompare(b.path));
  return finalResult;
}

module.exports = {
  isSubpath,
  filterRootPermissions
};
