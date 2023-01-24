import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { BoxSucursal } from './BoxSucursal';
import { sucursalesLocation } from '../data/sucursals';
 
export const CustomModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    Modal.setAppElement('#root');

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      const closeModal = ()=> {
        setIsOpen(false);
      }
    useEffect(() => {
      setTimeout(() => {
        setIsOpen(true);
      }, 5000);
    
      
    }, []);
    
  return (
    <>
    <Modal
    style={customStyles}
    isOpen={isOpen}
        contentLabel="Elige Sucursal segun tu ubicacion"
        onRequestClose={closeModal}
        // className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <div className="modal-container">
            <div className='btn-close' onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
            </div>
        <h2>Elige Sucursal segun tu ubicacion:</h2>

           <BoxSucursal sucursales={sucursalesLocation} isModal={true}/>
        </div>
      </Modal>    

    
    </>
  )
}
