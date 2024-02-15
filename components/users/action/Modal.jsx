// Modal as a separate component
import { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal}>
      <main className="bg-zinc-200 min-w-[300px] min-h-[100px] p-3 rounded">
        {children}
      </main>
    </dialog>
  );
}

export default Modal;
