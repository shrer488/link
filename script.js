let modalButton = document.querySelector('.modal')
let modalDialog = document.querySelector('.dialog')
let closeButton = modalDialog.querySelector('button')

modalButton.addEventListener('click',()=>{
    modalDialog.showModal()
})

closeButton.addEventListener('click', ()=>{
    modalDialog.close()
})