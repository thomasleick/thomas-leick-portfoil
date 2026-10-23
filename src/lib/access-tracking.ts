const ACCESS_LOG_ENDPOINT = 'https://conectyse.com/api/visit.php'
const ACCESS_LOG_ORIGINS = new Set([
  'https://thomasleick.vercel.app',
])
const REFERRAL_SOURCES = new Set(['conectyse', 'klibra', 'vocalis', 'tchelo'])

function getReferralSource() {
  const source = new URLSearchParams(window.location.search).get('src')
  return source && REFERRAL_SOURCES.has(source) ? source : ''
}

export function recordSiteAccess() {
  if (typeof window === 'undefined' || !ACCESS_LOG_ORIGINS.has(window.location.origin)) return

  let referrer = ''
  try {
    referrer = document.referrer ? new URL(document.referrer).origin : ''
  } catch {
    referrer = ''
  }

  const body = JSON.stringify({ path: window.location.pathname, referrer, source: getReferralSource() })
  void fetch(ACCESS_LOG_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    credentials: 'omit',
    keepalive: true,
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    body,
  }).catch(() => {})
}
