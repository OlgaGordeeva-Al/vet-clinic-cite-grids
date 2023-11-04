import { useState } from 'react';
// import { createPortal } from 'react-dom';

interface Props {
  imageSrc?: string;
  openDialog: boolean
  closeHandler: any;
}

const Dialog = (props: Props) => {

  return (
    <dialog className='modal' open={props.openDialog}>
     <button type='button' onClick={ props.closeHandler }>close</button>
     <img src={ props.imageSrc } alt="someImage" />
    </dialog>
  )
}

export default Dialog;