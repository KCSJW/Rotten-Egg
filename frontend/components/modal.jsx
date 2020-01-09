import React from 'react';

const modalForm = ({ modal, component: Component, hideModal}) => {
    let modalContent = null;
    if (modal) {
        modalContent = (
            <div className="modal-backdrop" onClick={hideModal}>
                <div onClick={(e) => e.stopPropagation()}>
                    <Component />
                </div>
            </div>
        )
    }
    return modalContent;
};

export default modalForm;