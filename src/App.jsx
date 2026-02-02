import React, { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import FileUploader from './components/FileUploader'
import SplitControls from './components/SplitControls'
import ActionButton from './components/ActionButton'
import Card from './components/Card'
import { splitPdf } from './splitFunction'

export default function App() {
  const [file, setFile] = useState(null)
  const [pagesPerSplit, setPagesPerSplit] = useState(2)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleFileSelect = async (pdfFile) => {
    if (!pdfFile) return
    setFile(pdfFile)

    const buffer = await pdfFile.arrayBuffer()
    const pdf = await PDFDocument.load(buffer)
    setTotalPages(pdf.getPageCount())
  }

  const handleSplit = async () => {
    if (!file) return
    setLoading(true)

    const parts = await splitPdf(file, pagesPerSplit)

    parts.forEach(({ blob, name }) => {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = name
      link.click()
    })

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <div className="mx-auto max-w-xl">
        <Header />

        <Card>
          <FileUploader onFileSelect={handleFileSelect} />

          {file && (
            <>
              <SplitControls
                pagesPerSplit={pagesPerSplit}
                setPagesPerSplit={setPagesPerSplit}
                totalPages={totalPages}
              />
              <ActionButton onClick={handleSplit} disabled={loading} />
            </>
          )}
        </Card>

        <Footer />
      </div>
    </div>
  )
}
