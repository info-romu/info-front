import React from 'react'
import { Link } from 'react-router-dom'

export default function Cancel() {
  return (
    <div className='container-success'>
      <div class="smooth-top rounded-lg w-80 text-center font-bold justify-center mx-auto bg-white-500 my-5 shadow-2xl">
        <h2>Paiement annulé ⛔.</h2>
        <p class="mx-auto w-full text-black">
          Réessayer quand vous voulez !
        </p>
      </div>

      <div class="mt-5 flex justify-center space-x-4">
        <div class="flex justify-center gap-5">
          <Link to="/profile/:id" className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Mon espace.</Link>
          <Link to="/" className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Aller a l'acceuil</Link>
        </div>
      </div>
    </div>
  )
}
