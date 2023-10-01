import React, { useEffect } from "react";

const AlertAddToCart = ({ showAlert, setShowAlert }) => {
  useEffect(() => {
    if (showAlert) {
      // Masquer l'alerte après 5 secondes
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showAlert, setShowAlert]);

  return (
    showAlert && (
      <div
        className="p-4 mb-4 mt-16 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 w-1/4 fixed top-0 right-0 z-50 m-4 transition-opacity ease-in-out duration-300"
        role="alert"
      >
        <span className="font-medium">Article ajouté avec succès !</span>
      </div>
    )
  );
};

export default AlertAddToCart;
