import React, { useState } from 'react';

import inforomu1 from '../assets/inforomu1.jpg'
import inforomu2 from '../assets/inforomu2.jpg'
import inforomu3 from '../assets/inforomu3.jpg'
import inforomu4 from '../assets/inforomu4.jpg'
import inforomu5 from '../assets/inforomu5.jpg'
import inforomu6 from '../assets/inforomu6.jpg'
import inforomu7 from '../assets/inforomu7.jpeg'
import inforomu8 from '../assets/inforomu8.jpg'
import inforomu10 from '../assets/inforomu10.jpg'
import inforomu11 from '../assets/inforomu11.jpg'
import inforomu12 from '../assets/inforomu12.jpg'
import inforomu13 from '../assets/inforomu13.jpg'



export default function Realisation() {

    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (image) => {
        setPopupImage(image);
        document.body.style.overflow = ''; // Disable scrolling when the popup is open
    };

    const closePopup = () => {
        setPopupImage(null);
        document.body.style.overflow = 'auto'; // Enable scrolling when the popup is closed
    };

    return (
        <section>
            <div className='title-real'>
            <h2 className='mb-10 text-center font-bold md:ms-5'>Nos Réalisations</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:m-5">
                <div className="grid gap-5">
                    <div className='real_card' onClick={() => openPopup(inforomu1)}>
                        <img className="real_card_img rounded-lg" src={inforomu1} alt="" />
                    </div>
                    <div className='real_card' onClick={() => openPopup(inforomu2)}>
                        <img className="real_card_img rounded-lg" src={inforomu2} alt="" />
                    </div>
                    <div className='real_card' onClick={() => openPopup(inforomu3)}>
                        <img className="real_card_img rounded-lg" src={inforomu3} alt="" />
                    </div>
                </div>
                <div className="grid gap-5">
                    <div className='real_card' onClick={() => openPopup(inforomu6)}>
                        <img className="real_card_img rounded-lg" src={inforomu6} alt="" />
                    </div>
                    <div className='real_card' onClick={() => openPopup(inforomu5)}>
                        <img className="real_card_img rounded-lg" src={inforomu5} alt="" />
                    </div>
                    <div className='real_card' onClick={() => openPopup(inforomu4)}>
                        <img className="real_card_img rounded-lg" src={inforomu4} alt="" />
                    </div>
                </div>
                <div className="grid gap-5">
                    <div className='real_card' onClick={() => openPopup(inforomu7)}>
                        <img className="real_card_img rounded-lg" src={inforomu7} alt="" />
                    </div>
                    <div className='real_card' onClick={() => openPopup(inforomu8)}>
                        <img className="real_card_img rounded-lg" src={inforomu8} alt="" />
                    </div>
                    <div className='real_card' onClick={() => openPopup(inforomu13)}>
                        <img className="real_card_img rounded-lg" src={inforomu13} alt="" />
                    </div>
                </div>
                <div className="grid gap-5">
                    <div className='real_card' onClick={() => openPopup(inforomu10)}>
                        <img className="real_card_img rounded-lg" src={inforomu10} alt="" />
                    </div>
                    <div className='real_card' onClick={() => openPopup(inforomu12)}>
                        <img className="real_card_img rounded-lg" src={inforomu12} alt="" />
                    </div>
                    <div className='real_card' onClick={() => openPopup(inforomu11)}>
                        <img className="real_card_img rounded-lg" src={inforomu11} alt="" />
                    </div>
                </div>
                {popupImage && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-75">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img className="ms:max-w-screen-md" src={popupImage} alt="Popup Image" />
                            <button
                                className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none bg-red-500 rounded-lg"
                                onClick={closePopup}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
