import React from 'react'
import ReactModal from 'react-modal'
import './modal.css'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',

      border: 0,
      padding: '0px 0px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    overlay: {
        zIndex: '9999',
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(102, 125, 153, 0.8)',
      },
};

export default class Modal extends React.Component {    
    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
    }

    render() {
        const { title, show,  onRequestClose} = this.props
        return (
            <div>
                <ReactModal
                    isOpen={show}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={onRequestClose}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    <div className="modal">
                        <div className="close">
                            <i className="icon fas fa-times Button-icon" onClick={onRequestClose}></i>
                        </div>
                        <div className="title">
                            <h2>{title}</h2>
                        </div>
                        <div className="body">
                            {this.props.children}
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}