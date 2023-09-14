import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import Logout from './Logout'
import Cookies from 'js-cookie';
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user] = useAtom(userAtom);
  const [isOpen, setIsOpen] = useState(false);
  const Navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const NavigateToLogin = () => {
    Navigate('/login')
  }


  return (
    <header>
      <nav className="mx-auto flex items-center justify-between py-4 px-4 lg:px-2" aria-label="Global">
      <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-7">
          <Link to="/services" className="text-sm font-semibold leading-6 text-gray-900">
            Nos services
          </Link>
          <Link to="/realisations" className="text-sm font-semibold leading-6 text-gray-900">
            Nos Réalisations
          </Link>
          <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Nous contacter
          </Link>
        </div>
        <div className="flex justify-center lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Inforomu.</span>
            <h1 className='text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl'>Inforomu.</h1>
          </Link>
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
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-7 items-center">

            <Link to="/market_place" className="text-sm font-semibold leading-6 text-gray-900">
              Notre boutique
            </Link>
            { user.isLogged ? (
              <>
                <Link to="/cart" className="text-sm font-semibold leading-6 text-gray-900 cart">
                </Link>
                <div className="relative inline-block text-left">
              <button
                id="dropdownInformationButton"
                onClick={toggleDropdown}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Espace Client
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 ${isOpen ? 'transform rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isOpen && (
                <div
                  id="dropdownInformation"
                  className="z-10 absolute mt-2 right-0  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{Cookies.get('username')}</div>
                    <div className="font-medium truncate">{Cookies.get('email')}</div>
                  </div>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                    <li>
                      <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Profile
                      </Link>
                    </li>
                  </ul>
                  <div className="py-2">
                    <Logout className={"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"}/>
                  </div>
                </div>
              )}
            </div>
              </>
            ) : (
                <button
                onClick={NavigateToLogin}
                id="dropdownInformationButton"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                >Espace Client</button>
            )}
          </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
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
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Accueil
                </Link>
                <Link
                  to="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nos services
                </Link>
                <Link
                  to="/realisations"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nos Réalisations
                </Link>
                <Link
                  to="/market_place"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Notre boutique
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nous contacter
                </Link>
              </div>
              <div className="py-6">
                {user.isLogged ? (
                  <>
                    <Link
                    to="/cart"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Votre Panier
                    </Link>
                    <Link
                    to="/profile"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Espace client
                    </Link>
                    <Logout className={"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"}/>
                  </>
                ) : (
                  <>
                    <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Espace client
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
