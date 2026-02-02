import { PDFDocument } from 'pdf-lib'

export async function splitPdf(file, pagesPerSplit) {
  const buffer = await file.arrayBuffer()
  const sourcePdf = await PDFDocument.load(buffer)
  const totalPages = sourcePdf.getPageCount()

  const downloads = []

  for (let i = 0; i < totalPages; i += pagesPerSplit) {
    const newPdf = await PDFDocument.create()
    const pages = await newPdf.copyPages(
      sourcePdf,
      Array.from({ length: pagesPerSplit }, (_, idx) => i + idx).filter(
        (p) => p < totalPages
      )
    )

    pages.forEach((p) => newPdf.addPage(p))

    const bytes = await newPdf.save()
    const blob = new Blob([bytes], { type: 'application/pdf' })

    downloads.push({
      blob,
      name: `split_${i + 1}-${Math.min(i + pagesPerSplit, totalPages)}.pdf`,
    })
  }

  return downloads
}
