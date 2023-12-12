import React from "react";

function PopupComponent({
  isOpen = false,
  onClose,
  children,
  isLoader = false,
}) {
  const onCardClickHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
        >
          <div
            className={`${!isLoader ? "bg-white rounded-lg shadow-md" : ""}`}
            onClick={onCardClickHandler}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default PopupComponent;
