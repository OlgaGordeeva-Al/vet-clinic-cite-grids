import { useRef, useState } from 'react';

interface Props {
  imageSrc?: string;
  openDialog: boolean
  closeHandler: any
}

const Dialog = (props: Props) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  return (
    <dialog ref={modalRef} className="modal" open={props.openDialog}>
      <button className="close-button" type="button" onClick={props.closeHandler}><span className="sr-only">Close</span></button>
      <img src={ props.imageSrc } className="dialog-image" alt="someImage" />
    </dialog>
  )
}

export default Dialog;