// Einmaliges (bei Bedarf wiederholbares) Verkleinern der Galerie-Fotos.
// Grosse Kamera-Fotos (mehrere MB) werden auf eine web-taugliche Grösse
// gebracht, damit die Galerie flüssig scrollt.
//
// Aufruf:  npm run optimize-images
//
// Die Original-Dateien werden vorher nach  _gallery-originals/  gesichert
// (ausserhalb von src/, wird also NICHT auf die Website gepackt).
import sharp from 'sharp'
import { readdir, mkdir, copyFile, stat, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const galleryDir = path.join(__dirname, '..', 'src', 'assets', 'gallery')
const backupDir  = path.join(__dirname, '..', '_gallery-originals')

const MAX_WIDTH = 1080   // reicht für die Anzeige (auch auf Retina-Bildschirmen)
const QUALITY   = 82     // gute Qualität bei kleiner Dateigrösse

const isImage = (f) => /\.(jpe?g|png|webp)$/i.test(f)
const kb = (bytes) => (bytes / 1024).toFixed(0) + ' KB'

await mkdir(backupDir, { recursive: true })

const files = (await readdir(galleryDir)).filter(isImage).sort()
let totalBefore = 0
let totalAfter = 0

for (const file of files) {
  const srcPath = path.join(galleryDir, file)
  const before = (await stat(srcPath)).size
  totalBefore += before

  // Original sichern (nur einmal – überschreibt kein bestehendes Backup)
  const backupPath = path.join(backupDir, file)
  if (!existsSync(backupPath)) {
    await copyFile(srcPath, backupPath)
  }

  const ext = path.extname(file).toLowerCase()
  const base = file.slice(0, -ext.length)
  // PNG-Fotos werden als JPG gespeichert (viel kleiner, gleiche Anzeige).
  const isPng = ext === '.png'
  const outPath = isPng ? path.join(galleryDir, base + '.jpg') : srcPath

  const buf = await sharp(backupPath)
    .rotate() // richtet nach EXIF aus
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer()

  await sharp(buf).toFile(outPath + '.tmp')
  await rm(outPath, { force: true })
  if (isPng) await rm(srcPath, { force: true })
  const { rename } = await import('node:fs/promises')
  await rename(outPath + '.tmp', outPath)

  const after = (await stat(outPath)).size
  totalAfter += after
  console.log(`${file.padEnd(28)} ${kb(before).padStart(9)}  ->  ${kb(after).padStart(9)}`)
}

console.log('-'.repeat(52))
console.log(`GESAMT${''.padEnd(22)} ${kb(totalBefore).padStart(9)}  ->  ${kb(totalAfter).padStart(9)}`)
