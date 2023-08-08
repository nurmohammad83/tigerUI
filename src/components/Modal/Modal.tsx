import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed px-5 inset-0 flex justify-center items-center
    transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
      onClick={onClose}
      data-testid="modal-background"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-lg shadow p-6 overflow-auto h-[400px] transition-all max-w-md ${
          open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        data-testid="modal-content"
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}
          data-testid="close-button"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;





// Modal use case 
// import {useState} from 'react'
// import Modal from './components/Modal/Modal';
// const App = () => {
//   const [open, setOpen] =  useState<boolean>(false);
//   return (
//     <div className='p-28 flex justify-center text-center h-full w-full'>
//       <button className='py-4 rounded-md px-9 border-none bg-blue-500 text-white hover:bg-blue-800' onClick={()=>setOpen(!open)}>
//         Click Me
//       </button>
//       <Modal open={open} onClose={()=>setOpen(!open)}>
//        <div  className='p-5'>
//         <h2 className='text-center text-lg text-red-500'>My Modal</h2>
//         <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla doloremque labore earum voluptatum? Qui voluptatem repudiandae libero vel voluptatibus suscipit omnis molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, commodi beatae voluptatem animi cum maiores quia porro, </p>
//         <button onClick={()=>setOpen(!open)} className='py-2 px-4 rounded-lg border-none bg-blue-500 text-white'>CLose</button>
//        </div>
//       </Modal>
//     </div>
//   )
// }
// export default App