import React from 'react';

export default function ConfirmModal({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm mx-4">
        <h2 className="text-lg font-semibold mb-4">
          {message || 'Ben je zeker dat je deze snippet wilt verwijderen?'}
        </h2>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
          >
            Annuleren
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
          >
            Ja, verwijderen
          </button>
        </div>
      </div>
    </div>
  );
}
