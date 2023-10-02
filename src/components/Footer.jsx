import React from 'react'
import Map from './Map'
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="w-full p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Inforomu.</span>
                            <h1 className='font-extrabold leading-none tracking-tight text-3xl'>Inforomu.</h1>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col xl:flex-row justify-around w-full'>
                    <Map/>
                    <div className='sm:flex-rows sm:flex sm:justify-around'>
                        <div className='ms:me-20 flex flex-col mb-5 xl:mb-0 w-full sm:w-5/12'>
                            <p className='mb-2'>57 C Rue Henri Barbusse,<br/>77124 Crégy-lès-Meaux (siège social)</p>
                            <p className='mb-2'>5 rue Jean Pierre Plicque,<br/>77124 Villenoy (Dépôts et bureaux)</p>
                            <p className='mb-2'>Nous possédons une station de charge de<br/>150 Kw à cette adresse disponible de 9h00 à 16h00</p>
                            <Link className='mb-2 hover:text-green-600 hover:underline hover:underline-offset-2' to="mailto:contact@inforomu.com">contact@inforomu.com</Link>
                            <Link className='mb-2 hover:text-green-600 hover:underline hover:underline-offset-2' to="tel:0953710938">Tel : 09 53 71 09 38</Link>
                        </div>
                        <div className='w-full flex flex-col sm:w-5/12 mb-5 xl:mb-0'>
                            <p className='mb-2 font-bold'>HORAIRES D’OUVERTURE</p>
                            <p className='mb-2'>Lundi au vendredi : 9:00-17:00<br/>Fermé le samedi et dimanche</p>
                            <Link to="https://www.instagram.com/inforomu/" className='mb-2 hover:text-green-600 w-full hover:underline hover:underline-offset-2'>Instagram <span className='instagram'></span></Link>
                            <Link to="http://inforomu.com/mentions-legales/" className='mb-2 hover:text-green-600 hover:underline hover:underline-offset-2'>Mentions légales</Link>
                            <Link to="https://www.asefa-cert.com/" className='mb-2 hover:text-green-600 hover:underline hover:underline-offset-2'>Certifié asefa E.V.Ready qualifié Q3 ASEFA</Link>
                            <Link to="https://advenir.mobi/" className='mb-2 hover:text-green-600 hover:underline hover:underline-offset-2'>Certifié ADVENIR</Link>
                        </div>
                    </div>     
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="https://github.com/orgs/info-romu/repositories" className="hover:underline">WhoopGang <span className='heart'></span> </Link>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}
