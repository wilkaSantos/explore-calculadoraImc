
export const AlertError = {
    error: document.querySelector('.container-error'),
    open(){
        this.error.classList.add('active-error');
    } ,
    close(){
        this.error.classList.remove('active-error');
    }
}