# 📄 PDF Splitter – React + Vite

Single Page Application (SPA) sviluppata in **React** con **Vite** che consente di caricare un file PDF e suddividerlo automaticamente in più PDF, scegliendo liberamente il numero di pagine per ogni file generato.

👉 **Tutto avviene lato client**, direttamente nel browser: nessun backend, nessun upload su server esterni.

---

## ✨ Funzionalità

- 📂 Upload di file PDF
- 🔢 Scelta del numero di pagine per split (es. 2, 3, 5, ecc.)
- ✂️ Suddivisione automatica del PDF in più file
- ⬇️ Download immediato dei PDF generati
- 🎨 Interfaccia moderna con **Tailwind CSS**
- ⚡ Build veloce grazie a **Vite**

---

## 🧱 Stack Tecnologico

- **React**
- **Vite**
- **pdf-lib** (manipolazione PDF lato client)
- **Tailwind CSS**
- JavaScript (ES Modules)

---

## 📁 Struttura del Progetto

```text
src/
 ├─ components/
 │   ├─ Header.jsx
 │   ├─ Card.jsx
 │   ├─ FileUploader.jsx
 │   ├─ SplitControls.jsx
 │   └─ ActionButton.jsx
 │
 ├─ splitFunction.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css

public/
 └─ favicon.ico

index.html
```

---

## 🚀 Avvio del Progetto

### 1️⃣ Clona il repository

```bash
git clone <https://github.com/Dahrius93/pdf-splitter>
cd pdf-splitter
```

### 2️⃣ Installa le dipendenze

```bash
npm install
```

### 3️⃣ Avvia il server di sviluppo

```bash
npm run dev
```

Apri il browser su:

```
http://localhost:5173
```

---

## 📦 Dipendenze Principali

```bash
npm install pdf-lib
```

Dev dependencies (Tailwind):

```bash
npm install tailwindcss @tailwindcss/vite
```

aggiungere @tailwindcss/vite su file vite.config.js

```bash
npm install tailwindcss @tailwindcss/vite
```

importare tailwind su App.css

```CSS
@import "tailwindcss";
```

---

## 🧠 Come Funziona lo Split

- Il PDF viene caricato come `File`
- Convertito in `ArrayBuffer`
- Letto con `PDFDocument.load()`
- Suddiviso in blocchi di N pagine
- Ogni blocco viene salvato come nuovo PDF
- I file vengono scaricati automaticamente

Tutta la logica è contenuta in:

```
src/splitFunction.js
```

---

## ⚠️ Note Importanti

- File PDF molto grandi (scansioni, molte immagini) possono rallentare il browser
- Il download di molti file consecutivi può causare un breve freeze
- Per casi avanzati è consigliato esportare in **ZIP**

---

## 🔮 Miglioramenti Futuri

- 📦 Download unico in ZIP
- 👀 Preview delle pagine PDF
- ⚡ Web Worker per evitare blocchi UI
- 🌙 Dark mode
- 🧪 Test automatici
- 🧾 Versione TypeScript
- 📱 PWA installabile

---

## 📜 Licenza

Progetto open-source, utilizzabile liberamente per scopi personali o professionali.

---

## 🙌 Autore

Realizzato con ❤️ usando React.

Se vuoi evolverlo o renderlo enterprise-ready, questo progetto è una base solida su cui costruire.
