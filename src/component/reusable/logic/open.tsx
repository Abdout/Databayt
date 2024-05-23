'use client';

import Modal from "../pound/modal";
import { useModal } from "./modal";


const TryModal = () => {
  const { modal } = useModal();
  const extend = kit.find(kit => kit.id.toString() === modal.id);
  return (
    <>
    {modal.open && extend && (
     <Modal content={<Profile kit={extend} />} />
    )}
    <div className="p-4 grid grid-cols-4  gap-[90px] gap-y-28">
      model
    </div>
    </>
  );
};

export default TryModal;