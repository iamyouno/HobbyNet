import React from 'react';
import './modal.css';



const Modal = ( props ) => {
    const { open, close, show, header} = props;

    return (
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                        <button className="open" onClick={show}> Accept </button>
                        <button className="close" onClick={close}> Close </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}
export default Modal;