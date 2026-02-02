const FileUploader = ({ onFileSelect }) => (
  <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 p-10 text-center transition hover:border-blue-500">
    <span className="text-lg font-medium text-slate-700">Carica PDF</span>
    <span className="mt-1 text-sm text-slate-500">
      Click o trascina qui il file
    </span>
    <input
      type="file"
      accept="application/pdf"
      className="hidden"
      onChange={(e) => onFileSelect(e.target.files?.[0])}
    />
  </label>
)

export default FileUploader
