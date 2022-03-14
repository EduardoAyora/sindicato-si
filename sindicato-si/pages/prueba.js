import { useState } from 'react'
import { PhoneIcon } from '@heroicons/react/outline'

export default function Prueba() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <header className='bg-green-800' x-data='{ isOpen: false }'>
        <nav className='container px-6 py-4 mx-auto md:flex md:justify-between md:items-center'>
          <div className='flex items-center justify-between'>
            <a
              className='text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400'
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
            <p className='text-xl font-medium tracking-wider text-gray-300'>
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

            <div className='flex justify-center mt-8'>
              <a
                className='px-8 mr-6 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-yellow-600 rounded hover:bg-yellow-500'
                href='https://sindicatodechoferesstaisabel.com/'
                target='_blank'
                rel='noreferrer'
              >
                Acceso a portal educativo
              </a>
              <a
                className='px-8 py-2 text-lg font-medium text-yellow-600 transition-colors duration-300 transform bg-white rounded hover:bg-gray-200'
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
                Escuela de Capacitación Para Chóferes Profesionales en el Cantón
                de Santa Isabel, donde podrás obtener tu título de conductor
                profesional, realizamos exámenes psicosensométricos y mucho más.
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
            Completa el formulario con tus datos, sube los documentos requeridos
            y presiona el botón enviar.
          </p>

          <div className='pt-6 sm:mt-0 text-left'>
            <div className='mt-5 md:mt-0 md:col-span-2'>
              <form action='#' method='POST'>
                <div className='shadow overflow-hidden sm:rounded-md'>
                  <div className='px-4 py-5 bg-white sm:p-6'>
                    <div className='grid grid-cols-6 gap-6'>
                      <div className='col-span-6 sm:col-span-3'>
                        <label className='block text-sm font-medium text-gray-700'>
                          Nombre
                        </label>
                        <input
                          type='text'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-3'>
                        <label className='block text-sm font-medium text-gray-700'>
                          Cédula
                        </label>
                        <input
                          type='text'
                          autoComplete='family-name'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-6'>
                        <label className='block text-sm font-medium text-gray-700'>
                          Email
                        </label>
                        <input
                          type='text'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                    <button className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
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
          <p className='text-gray-500'>© 2022 Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
