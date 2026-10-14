/**
 * Utilitário frontend para filtrar contas padrão, SIDs, SQLEXPRESS e testes.
 */
export function isExcludedAccount(name?: string | null): boolean {
  if (!name || typeof name !== 'string') return true;
  let clean = name.trim();
  if (clean.includes('\\')) {
    const parts = clean.split('\\');
    clean = parts[parts.length - 1].trim();
  }

  const lower = clean.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  if (/^s-\d+-\d+/i.test(lower) || lower.startsWith('s-1-')) {
    return true;
  }

  if (lower.includes('sqlexpress')) {
    return true;
  }

  if (
    lower === 'teste' ||
    lower === 'testess' ||
    lower === 'contateste' ||
    lower.startsWith('teste_') ||
    lower.startsWith('test_')
  ) {
    return true;
  }

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

