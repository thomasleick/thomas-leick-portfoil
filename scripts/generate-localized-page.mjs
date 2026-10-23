import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const origin = 'https://thomasleick.vercel.app'
const outputFile = join(root, 'dist', 'index.html')
const portuguese = {
  title: 'Leick & S. Software — Engenharia para a complexidade',
  description: 'Leick & S. Software — engenharia de software, integração de sistemas, automação inteligente e IA aplicada. Por Thomas Leick.',
  image: origin + '/social-card.png',
  canonical: origin + '/pt/',
}

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

function replaceMeta(html, id, value) {
  const pattern = new RegExp('(<meta\\b(?=[^>]*\\bid="' + id + '"(?=[\\s>]))[^>]*\\bcontent=")[^"]*(")')
  if (!pattern.test(html)) throw new Error('LOCALIZED_META_NOT_FOUND:' + id)
  return html.replace(pattern, (_match, prefix, suffix) => prefix + escapeAttribute(value) + suffix)
}

function replaceCanonical(html, href) {
  const pattern = /<link\b(?=[^>]*\bid="canonical"(?=[\s>]))[^>]*>/
  if (!pattern.test(html)) throw new Error('LOCALIZED_CANONICAL_NOT_FOUND')
  return html.replace(pattern, (tag) => tag.replace(/\bhref="[^"]*"/, 'href="' + escapeAttribute(href) + '"'))
}

const source = await readFile(outputFile, 'utf8')
let page = source.replace('<html lang="en">', '<html lang="pt-BR">')
page = page.replace(/<title>[^<]*<\/title>/, '<title>' + portuguese.title + '</title>')
page = replaceMeta(page, 'meta-description', portuguese.description)
page = replaceMeta(page, 'og-title', portuguese.title)
page = replaceMeta(page, 'og-description', portuguese.description)
page = replaceMeta(page, 'og-url', portuguese.canonical)
page = replaceMeta(page, 'og-locale', 'pt_BR')
page = replaceMeta(page, 'og-locale-alternate', 'en_US')
page = replaceMeta(page, 'og-image', portuguese.image)
page = page.replace('content="image/svg+xml"', 'content="image/png"')
page = replaceMeta(page, 'twitter-title', portuguese.title)
page = replaceMeta(page, 'twitter-description', portuguese.description)
page = replaceMeta(page, 'twitter-image', portuguese.image)
page = replaceCanonical(page, portuguese.canonical)

const localizedOutput = join(root, 'dist', 'pt', 'index.html')
await mkdir(dirname(localizedOutput), { recursive: true })
await writeFile(localizedOutput, page)
process.stdout.write('LOCALIZED_PAGE_WRITTEN=dist/pt/index.html\n')
