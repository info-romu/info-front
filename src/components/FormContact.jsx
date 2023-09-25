import React from 'react';

export default function FormContact() {
  return (
    <div className='page-container'>
    <div className="container">
      <div className="text">
        Contactez-nous
      </div>
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Nom & prénom</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Nom de la société</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Email</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Numero de telephone</label>
          </div>
          <div className="input-data">
            <select className="custom-dropdown" required>
              <option value="" disabled selected></option>
              <option value="compteur-electromecanique">Compteur électromécanique</option>
              <option value="compteur-electrique">Compteur électrique</option>
              <option value="compteur-linky">Compteur Linky</option>
            </select>
            <div className="underline"></div>
            <label htmlFor="">Type de compteur</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea rows="8" cols="80" required></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="">Exprimez votre demande ici</label>
            <br />
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}
