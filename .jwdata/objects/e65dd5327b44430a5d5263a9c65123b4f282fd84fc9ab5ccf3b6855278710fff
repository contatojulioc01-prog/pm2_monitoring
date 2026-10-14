/**
 * Utilitário centralizado para identificar contas de sistema, SIDs
 * e usuários padrões indesejados nas telas de Pastas/Permissões e Usuários AD.
 */
function isExcludedAccount(name) {
  if (!name || typeof name !== 'string') return true;
  
  let clean = name.trim();
  // Se tiver formato DOMINIO\Usuario, pegamos tanto a parte final quanto tratamos o todo
  if (clean.includes('\\')) {
    const parts = clean.split('\\');
    clean = parts[parts.length - 1].trim();
  }

  const lower = clean.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // 1. SIDs do Windows (ex: S-1-5-21-2294969039-2234300869-77477748-1129)
  if (/^s-\d+-\d+/i.test(lower) || lower.startsWith('s-1-')) {
    return true;
  }

  // 2. Todos com SQLEXPRESS (ex: SQLEXPRESS00, MSSQL$SQLEXPRESS, etc.)
  if (lower.includes('sqlexpress')) {
    return true;
  }

  // 3. Contas de teste (teste, testess, contateste)
  if (lower === 'teste' || lower === 'testess' || lower === 'contateste' || lower.startsWith('teste_') || lower.startsWith('test_')) {
    return true;
  }

  // 4. Usuários e grupos padrões do sistema/Windows/AD
  const blacklisted = new Set([
    'administrador',
    'administrator',
    'administradores',
    'administrators',
    'sistema',
    'system',
    'wdagutilityaccount',
    'krbtgt',
    'defaultaccount',
    'guest',
    'convidado',
    'convidados',
    'guests',
    'iis_iusrs',
    'network service',
    'servico de rede',
    'local service',
    'servico local',
    'trustedinstaller',
    'authenticated users',
    'usuarios autenticados',
    'creator owner',
    'proprietario criador',
    'creator group',
    'grupo criador',
    'everyone',
    'todos',
    'interactive',
    'interativo',
    'network',
    'rede',
    'service',
    'servico',
    'anonymous logon',
    'logon anonimo',
    'wdiadmin',
    'fontdrvhost',
    'dwm',
    'umfd',
    'nt service',
    'apppool',
    'users',
    'usuarios'
  ]);

  if (blacklisted.has(lower)) {
    return true;
  }

  if (
    lower.startsWith('nt authority') ||
    lower.startsWith('builtin') ||
    lower.startsWith('window manager') ||
    lower.startsWith('nt service')
  ) {
    return true;
  }

  return false;
}

module.exports = {
  isExcludedAccount
};

