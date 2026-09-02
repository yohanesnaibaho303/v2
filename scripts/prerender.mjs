import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'

const server = await createServer({ appType: 'custom', logLevel: 'error', server: { middlewareMode: true } })

try {
  const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
  const path = new URL('../dist/index.html', import.meta.url)
  const html = await readFile(path, 'utf8')
  const marker = '<div id="root"></div>'
  if (!html.includes(marker)) throw new Error('Prerender root marker not found')
  await writeFile(path, html.replace(marker, `<div id="root">${render()}</div>`))
} finally {
  await server.close()
}
