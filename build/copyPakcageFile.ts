import { readFile, writeFile } from 'fs/promises'

export const copyPakcageFile = async (from: string, to: string) => {
  const raw = await readFile(from, 'utf-8')
  const data = JSON.parse(raw)
  data.type = 'commonjs'
  await writeFile(to, JSON.stringify(data))
}
