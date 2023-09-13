import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav className="mx-auto flex items-center justify-between py-4 px-4 lg:px-2" aria-label="Global">
      <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Accueil
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Nos services
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Nos Réalisations
          </a>
        </div>
        <div className="flex justify-center lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Inforomu.</span>
            <h1 className='text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl'>Inforomu.</h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-5">

            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Notre boutique
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Nous contacter
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Espace client
            </a>
          </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Inforomu.</span>
              <h1 className='text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl'>Inforomu.</h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Accueil
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nos services
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nos Réalisations
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Notre boutique
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nous contacter
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Espace client
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
