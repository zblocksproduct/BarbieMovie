import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative  max-w-[470px] w-full mx-auto my-6 p-[32px]">
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-md outline-none focus:outline-none">
            <div className="relative p-6 flex-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
