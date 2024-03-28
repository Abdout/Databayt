import React, { useEffect, useState } from 'react';
import { Squeeze as Hamburger } from 'hamburger-react';
import { useModal } from '@/provider/modal';
import Modal from '../atom/modal/modal';
import Readme from '../home/readme';

const Mobile = () => {
  const { modal, openModal, closeModal } = useModal();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      openModal(null);
    } else {
      closeModal();
    }
  }, [open, openModal, closeModal]);

  return (
    <>
      {modal.open && modal.id === null && <Modal content={<Readme />} left={true} />}
      <div className="flex flex-col items-center justify-center min-h-screen space-y-1 text-start">
        <div className="flex gap-6 items-center pt-4">
        <div className='absolute top-[-0.4rem] left-[10rem] z-100'>
          <Hamburger size={20} distance='lg' toggled={open} toggle={setOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;