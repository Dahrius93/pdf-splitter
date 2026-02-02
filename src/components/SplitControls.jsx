const SplitControls = ({ pagesPerSplit, setPagesPerSplit, totalPages }) => (
  <div className="mt-6 space-y-4">
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-600">
        Pagine per PDF
      </label>
      <input
        type="number"
        min={1}
        max={totalPages}
        value={pagesPerSplit}
        onChange={(e) => setPagesPerSplit(Number(e.target.value))}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
      />
    </div>
    <p className="text-sm text-slate-500">
      Il PDF verrà suddiviso in blocchi da {pagesPerSplit} pagine
    </p>
  </div>
)

export default SplitControls
