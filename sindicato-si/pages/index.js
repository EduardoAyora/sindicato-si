import Head from 'next/head'
import { useState, useRef } from 'react'
import { PhoneIcon, CloudUploadIcon } from '@heroicons/react/outline'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  display: 'flex',
}

export default function Home() {
  const [cFiles, setCFiles] = useState([])
  const [cSendEnabled, setCSendEnabled] = useState(true)
  const [eFiles, setEFiles] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const cNameRef = useRef()
  const cCelRef = useRef()
  const eNameRef = useRef()
  const eCelRef = useRef()

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })

  return (
    <div className={styles.container}>
      <Head>
        <title>Sindicato de Choferes Sta. Isabel</title>
        <meta
          name='description'
          content='Sindicato de choferes de Santa Isabel'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <header className='bg-green-800' x-data='{ isOpen: false }'>
          <nav className='container px-6 py-4 mx-auto md:flex md:justify-between md:items-center'>
            <div className='flex items-center justify-between'>
              <a
                className='text-xl pr-6 font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400'
                href='#'
              >
                Sindicato de choferes de Santa Isabel
              </a>

              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className='flex md:hidden'
              >
                <button
                  type='button'
                  className='text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400'
                  aria-label='toggle menu'
                >
                  <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                    <path
                      fillRule='evenodd'
                      d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 ${
                isOpen ? 'flex' : 'hidden'
              }`}
            >
              <a
                className='text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400'
                href='#'
              >
                Inicio
              </a>
              <a
                className='text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400'
                href='https://sindicatodechoferesstaisabel.com/'
                target='_blank'
                rel='noreferrer'
              >
                Portal Educativo
              </a>
              <a
                className='text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400'
                href='#inscripciones'
              >
                Inscripciones
              </a>
            </div>
          </nav>

          <section
            className='flex items-center justify-center'
            style={{ height: '500px' }}
          >
            <div className='text-center'>
              <p className='text-lg sm:text-xl font-medium tracking-wider text-gray-300'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.facebook.com/SindicatoDeChoferesDeSantaIsabel/about/?ref=page_internal'
                >
                  @SindicatoDeChoferesDeSantaIsabel
                </a>
              </p>
              <h2 className='mt-6 text-3xl font-bold text-white md:text-5xl'>
                Escuela de Capacitación Para Conductores <br /> Profesionales de
                Santa Isabel
              </h2>

              <div className='p-2 sm:p-0 flex justify-center mt-8'>
                <a
                  className='px-6 sm:px-8 mr-2 sm:mr-6 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-yellow-600 rounded hover:bg-yellow-500'
                  href='https://sindicatodechoferesstaisabel.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Acceso a portal educativo
                </a>
                <a
                  className='flex items-center px-6 sm:px-8 py-2 text-lg font-medium text-yellow-600 transition-colors duration-300 transform bg-white rounded hover:bg-gray-200'
                  href='#inscripciones'
                >
                  Inscribirse
                </a>
              </div>
            </div>
          </section>
        </header>

        <section className='bg-white'>
          <div className='max-w-5xl px-6 py-16 mx-auto'>
            <div className='items-center md:flex md:space-x-6'>
              <div className='md:w-1/2'>
                <h3 className='text-2xl font-semibold text-gray-800'>
                  Información
                </h3>
                <p className='max-w-md mt-4 text-gray-600'>
                  Escuela de Capacitación Para Chóferes Profesionales en el
                  Cantón de Santa Isabel, donde podrás obtener tu título de
                  conductor profesional, realizamos exámenes psicosensométricos
                  y mucho más.
                </p>
                <a
                  href='tel:0997368340'
                  className='mt-8 text-indigo-700 underline flex'
                >
                  <PhoneIcon className='h-6 w-6 mr-2' />
                  099 736 8340
                </a>
              </div>

              <div className='mt-8 md:mt-0 md:w-1/2'>
                <div className='flex items-center justify-center'>
                  <div className='max-w-md'>
                    <img
                      className='object-cover object-center w-full rounded-md shadow'
                      style={{ height: '500px' }}
                      src='/images/sindicato-si.png'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-white' id='inscripciones'>
          <div className='max-w-5xl px-6 py-16 mx-auto text-center'>
            <h2 className='text-3xl font-semibold text-gray-800'>
              Inscripciones
            </h2>
            <p className='max-w-lg mx-auto mt-4 text-gray-600'>
              Completa el formulario con tus datos, sube los documentos
              requeridos y presiona el botón enviar.
            </p>

            <div className='pt-6 sm:mt-0 text-left'>
              <div className='mt-5 md:mt-0 md:col-span-2'>
                <form action='#' method='POST'>
                  <div className='shadow overflow-hidden sm:rounded-md'>
                    <div className='px-4 py-5 bg-white sm:p-6'>
                      <h2 className='text-2xl font-semibold text-gray-800'>
                        Inscripciones para licencia tipo C
                      </h2>
                      <div className='grid grid-cols-6 gap-6 pt-4'>
                        <div className='col-span-6 sm:col-span-3'>
                          <label className='block text-sm font-medium text-gray-700'>
                            Nombre
                          </label>
                          <input
                            ref={cNameRef}
                            type='text'
                            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                          <label className='block text-sm font-medium text-gray-700'>
                            Celular
                          </label>
                          <input
                            ref={cCelRef}
                            type='text'
                            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-6'>
                          <label className='block text-sm font-medium text-gray-700'>
                            <p className='font-bold'>
                              Subir los siguientes documentos:
                            </p>
                            <ul className='list-disc pl-4'>
                              <li>
                                Cédula de identidad, certificado de votación,
                                carnet de tipo de sangre (Cruz Roja). (En .pdf
                                .doc o .docx)
                              </li>
                              <li>
                                Certificado de estudios, aprobado el primer año
                                de bachillerato. (Sellado por el distrito de
                                educación)
                              </li>
                              <li>Certificado de salud (Emitido por MSP)</li>
                            </ul>
                          </label>
                          <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                            <div className='space-y-1 text-center'>
                              <div className='flex justify-center text-sm text-gray-600'>
                                <label>
                                  <input
                                    accept='.pdf, .doc, .docx'
                                    type='file'
                                    multiple
                                    onChange={(e) => {
                                      var files = e.target.files
                                      var filesArr =
                                        Array.prototype.slice.call(files)
                                      setCFiles((prevFiles) => {
                                        return [...prevFiles, ...filesArr]
                                      })
                                    }}
                                  />
                                  <div className='cursor-pointer w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                    <CloudUploadIcon
                                      className='h-6 w-6 mr-2'
                                      aria-hidden='true'
                                    />{' '}
                                    Cargar documentos
                                  </div>
                                </label>
                              </div>
                              <p className='text-xs text-gray-500'>
                                PDF, DOC, DOCX
                              </p>

                              <div style={styles}>
                                {cFiles.map((file, indice) => (
                                  <span
                                    onClick={() =>
                                      setCFiles(
                                        cFiles.filter((x) => x !== file)
                                      )
                                    }
                                    key={indice}
                                    className='m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
                                  >
                                    {file.name}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                      <button
                        type='button'
                        onClick={async () => {
                          if (cNameRef.current.value === '')
                            return alert('El nombre es requerido')
                          if (cCelRef.current.value === '')
                            return alert('El celular es requerido')
                          if (cFiles.length === 0)
                            return alert('Cargar los documentos es requerido')

                          const mappedPdfsToSend = []
                          for await (const file of cFiles) {
                            const name = file.name
                            const data = await toBase64(file)
                            mappedPdfsToSend.push({
                              name,
                              data,
                            })
                          }
                          setCSendEnabled(false)

                          Email.send({
                            SecureToken: '9ad5ea20-233e-400d-835d-d5df0e7a8486',
                            To: 'eduardoaayora24@gmail.com',
                            From: 'eduardoaayora24@gmail.com',
                            Subject:
                              'SOLICITUD DE INSCRIPCIÓN, Licencia tipo C',
                            Body: `Licencia tipo C, \n Nombre: ${cNameRef.current.value}, Celular: ${cCelRef.current.value}`,
                            Attachments: mappedPdfsToSend,
                          })
                            .then((message) => {
                              alert(
                                'Los datos para su inscripción se han enviado con éxito: ' +
                                  message
                              )
                              setCFiles([])
                              cNameRef.current.value = ''
                              cCelRef.current.value = ''
                            })
                            .catch((err) => {
                              alert('Ha ocurrido el error: ' + err)
                              setCSendEnabled(true)
                            })
                        }}
                        disabled={!cSendEnabled}
                        className={`${
                          cSendEnabled
                            ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                            : 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500'
                        } inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2`}
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className='pt-12 sm:mt-0 text-left'>
              <div className='mt-5 md:mt-0 md:col-span-2'>
                <form action='#' method='POST'>
                  <div className='shadow overflow-hidden sm:rounded-md'>
                    <div className='px-4 py-5 bg-white sm:p-6'>
                      <h2 className='text-2xl font-semibold text-gray-800'>
                        Inscripciones para licencia tipo E
                      </h2>
                      <div className='grid grid-cols-6 gap-6 pt-4'>
                        <div className='col-span-6 sm:col-span-3'>
                          <label className='block text-sm font-medium text-gray-700'>
                            Nombre
                          </label>
                          <input
                            ref={eNameRef}
                            type='text'
                            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                          <label className='block text-sm font-medium text-gray-700'>
                            Celular
                          </label>
                          <input
                            ref={eCelRef}
                            type='text'
                            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-6'>
                          <label className='block text-sm font-medium text-gray-700'>
                            <p className='font-bold'>
                              Subir los siguientes documentos:
                            </p>
                            <ul className='list-disc pl-4'>
                              <li>
                                Cédula de identidad, certificado de votación,
                                carnet de tipo de sangre (Cruz Roja). (En .pdf
                                .doc o .docx)
                              </li>
                              <li>
                                Certificado de estudios, aprobado el primer año
                                de bachillerato. (Sellado por el distrito de
                                educación)
                              </li>
                              <li>
                                Licencia tipo C (misma que debe estar vigente,
                                no tener multas y tener puntos)
                              </li>
                              <li>
                                Record y contenido académico de la escuela donde
                                hizo el curso tipo C
                              </li>
                              <li>
                                Certificado de conductor emitido por la ANT.
                              </li>
                              <li>
                                Original del carnet de tipo de sangre (Emitido
                                por cruz roja) -
                              </li>
                              <li>Exámenes pscicosensométricos -</li>
                              <li>Certificado de salud (Emitido por MSP)</li>
                            </ul>
                          </label>
                          <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                            <div className='space-y-1 text-center'>
                              <div className='flex justify-center text-sm text-gray-600'>
                                <label>
                                  <input
                                    accept='.pdf, .doc, .docx'
                                    type='file'
                                    multiple
                                    onChange={(e) => {
                                      var files = e.target.files
                                      var filesArr =
                                        Array.prototype.slice.call(files)
                                      setEFiles((prevFiles) => {
                                        return [...prevFiles, ...filesArr]
                                      })
                                    }}
                                  />
                                  <div className='cursor-pointer w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                    <CloudUploadIcon
                                      className='h-6 w-6 mr-2'
                                      aria-hidden='true'
                                    />{' '}
                                    Cargar documentos
                                  </div>
                                </label>
                              </div>
                              <p className='text-xs text-gray-500'>
                                PDF, DOC, DOCX
                              </p>

                              <div style={styles}>
                                {eFiles.map((file, indice) => (
                                  <span
                                    onClick={() =>
                                      setEFiles(
                                        eFiles.filter((x) => x !== file)
                                      )
                                    }
                                    key={indice}
                                    className='m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
                                  >
                                    {file.name}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                      <button
                        type='button'
                        onClick={async () => {
                          if (eNameRef.current.value === '')
                            return alert('El nombre es requerido')
                          if (eCelRef.current.value === '')
                            return alert('El celular es requerido')
                          if (eFiles.length === 0)
                            return alert('Cargar los documentos es requerido')

                          const mappedPdfsToSend = []
                          for await (const file of eFiles) {
                            const name = file.name
                            const data = await toBase64(file)
                            mappedPdfsToSend.push({
                              name,
                              data,
                            })
                          }
                          setCSendEnabled(false)

                          Email.send({
                            SecureToken: '9ad5ea20-233e-400d-835d-d5df0e7a8486',
                            To: 'eduardoaayora24@gmail.com',
                            From: 'eduardoaayora24@gmail.com',
                            Subject:
                              'SOLICITUD DE INSCRIPCIÓN, Licencia tipo E',
                            Body: `Licencia tipo E, \n Nombre: ${eNameRef.current.value}, Celular: ${eCelRef.current.value}`,
                            Attachments: mappedPdfsToSend,
                          })
                            .then((message) => {
                              alert(
                                'Los datos para su inscripción se han enviado con éxito: ' +
                                  message
                              )
                              setEFiles([])
                              eNameRef.current.value = ''
                              eCelRef.current.value = ''
                            })
                            .catch((err) => {
                              alert('Ha ocurrido el error: ' + err)
                              setCSendEnabled(true)
                            })
                        }}
                        disabled={!cSendEnabled}
                        className={`${
                          cSendEnabled
                            ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                            : 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500'
                        } inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2`}
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className='border-t'>
          <div className='container flex items-center justify-between px-6 py-8 mx-auto'>
            <p className='text-gray-500'>
              © 2022 Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
