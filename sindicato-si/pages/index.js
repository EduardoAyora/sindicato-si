import Head from 'next/head'
import { useState } from 'react'
import { CloudUploadIcon } from '@heroicons/react/outline'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  display: 'flex',
}

export default function Home() {
  const [files, setFiles] = useState([])

  function onChange(e) {
    var files = e.target.files
    var filesArr = Array.prototype.slice.call(files)
    setFiles((prevFiles) => {
      return [...prevFiles, ...filesArr]
    })
  }

  function removeFile(f) {
    setFiles(files.filter((x) => x !== f))
  }

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })

  async function sendMail() {
    const mappedPdfsToSend = []
    for await (const file of files) {
      const name = file.name
      const data = await toBase64(file)
      mappedPdfsToSend.push({
        name,
        data,
      })
    }

    Email.send({
      SecureToken: '9ad5ea20-233e-400d-835d-d5df0e7a8486',
      To: 'eduardoaayora24@gmail.com',
      From: 'eduardoaayora24@gmail.com',
      Subject: 'SOLICITUD DE INSCRIPCIÓN',
      Body: 'Con archivo',
      Attachments: mappedPdfsToSend,
    }).then((message) => alert(message))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Sindicato de choferes de Santa Isabel'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div style={styles}>
        <label>
          <input
            accept='.pdf, .doc, .docx'
            type='file'
            multiple
            onChange={onChange}
          />
          <div className='cursor-pointer w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            <CloudUploadIcon className='h-6 w-6 mr-2' aria-hidden='true' />{' '}
            Cargar documentos
          </div>
        </label>
        {files.map((file, indice) => (
          <div key={indice} className='' onClick={() => removeFile(file)}>
            {file.name}
          </div>
        ))}
      </div>

      <div className='mt-6 flex justify-center'>
        <button
          className='cursor-pointer w-36 bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          onClick={sendMail}
        >
          Enviar
        </button>
      </div>
    </div>
  )
}
