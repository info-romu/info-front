import React, { useState } from 'react';
import config from '../../config';
import AlertEmailSent from "../components/AlertEmailSent";

export default function FormContact () {

  const [nomPrenom, setNomPrenom] = useState('');
  const [nomSociete, setNomSociete] = useState('');
  const [mail, setMail] = useState('');
  const [numTelephone, setNumTelephone] = useState('');
  const [typeCompteur, setTypeCompteur] = useState('');
  const [demande, setDemande] = useState('');

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nomPrenom,
      company_name: nomSociete,
      mail: mail,
      phone_number: numTelephone,
      counter_type: typeCompteur,
      message: demande,
    };

    try {
      const response = await fetch(`${config.API_BASE_URL}/send_email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowAlert(true); 
        console.log('Mail envoyé avec succès');
        setNomPrenom('')
        setNomSociete('')
        setMail('')
        setNumTelephone('')
        setTypeCompteur('')
        setDemande('')
      } else {
        console.error('Échec de l\'envoi !');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la requête :', error);
    }
  };

  return (
    <div className='page-container'>
      <div className="container">
      <h2 className="mb-10 m-6 text-center">Contactez-nous</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input type="text" required value={nomPrenom} onChange={(e) => setNomPrenom(e.target.value)} />
              <div className="underline"></div>
              <label htmlFor="">Nom & Prénom</label>
            </div>
            <div className="input-data">
              <input type="text" required value={nomSociete} onChange={(e) => setNomSociete(e.target.value)} />
              <div className="underline"></div>
              <label htmlFor="">Nom de la société</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="text" required value={mail} onChange={(e) => setMail(e.target.value)} />
              <div className="underline"></div>
              <label htmlFor="">E-mail</label>
            </div>
            <div className="input-data">
              <input type="text" required value={numTelephone} onChange={(e) => setNumTelephone(e.target.value)} />
              <div className="underline"></div>
              <label htmlFor="">Numéro de téléphone</label>
            </div>
            <div className="input-data">
              <select className="custom-dropdown" required value={typeCompteur} onChange={(e) => setTypeCompteur(e.target.value)}>
                <option value="" disabled></option>
                <option value="compteur-electromecanique">Compteur électromécanique</option>
                <option value="compteur-electrique">Compteur électrique</option>
                <option value="compteur-linky">Compteur Linky</option>
                <option value="compteur-electromecanique">Compteur industriel</option>
              </select>
              <div className="underline"></div>
              <label htmlFor="">Type de compteur</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea rows="8" cols="80" required value={demande} onChange={(e) => setDemande(e.target.value)}></textarea>
              <br />
              <div className="underline"></div>
              <label htmlFor="">Exprimez votre demande ici</label>
              <br />
              <div className="form-row">
                <div className="input-data">
                  <button type="submit" className='submit-btn'>Envoyer</button>
                </div>
              </div>
              <AlertEmailSent showAlert={showAlert} setShowAlert={setShowAlert} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
