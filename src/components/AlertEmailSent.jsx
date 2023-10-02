import React, { useState, useEffect } from "react";

const AlertEmailSent = ({ showAlert, setShowAlert }) => {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    if (showAlert) {
      setIsHiding(false);
      const timeout = setTimeout(() => {
        setIsHiding(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 300);
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showAlert, setShowAlert]);

  return (
    showAlert && (
      <div
        className={`p-4 mb-4 mx-auto mt-16 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 w-1/4 z-50 m-4 transition-opacity ease-in-out duration-300 ${
          isHiding ? "opacity-0" : ""
        }`}
        role="alert"
      >
        <span className="font-medium"> Email envoyé avec succès !</span>
      </div>
    )
  );
};


export default AlertEmailSent;
