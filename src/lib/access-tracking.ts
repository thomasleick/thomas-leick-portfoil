const ACCESS_LOG_ENDPOINT = 'https://conectyse.com/api/visit.php'
const ACCESS_LOG_ORIGINS = new Set([
  'https://k-libra-system-site.vercel.app',
  'https://thomasleick.vercel.app',
])

export function recordSiteAccess() {
  if (typeof window === 'undefined' || !ACCESS_LOG_ORIGINS.has(window.location.origin)) return

  let referrer = ''
  try {
    referrer = document.referrer ? new URL(document.referrer).origin : ''
  } catch {
    referrer = ''
  }

  const body = JSON.stringify({ path: window.location.pathname, referrer })
  void fetch(ACCESS_LOG_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    credentials: 'omit',
    keepalive: true,
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    body,
  }).catch(() => {})
}
