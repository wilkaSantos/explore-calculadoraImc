export const Modal = {
    titleModal: document.querySelector('.title-modal'),
    containerModal: document.querySelector('.container-modal'),
    buttonClose: document.querySelector('.close'),
    open(){
        Modal.containerModal.classList.add('active-modal');
    },
    close(){
        Modal.containerModal.classList.remove('active-modal');
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close();
    window.location.reload();
}

window.addEventListener('keydown', closeTarget);

function closeTarget(event){

    if(event.key == 'Escape'){
        Modal.close();
        window.location.reload();
    }

}