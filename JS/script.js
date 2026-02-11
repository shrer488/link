// Modal Buttons
let collectionModalButton = document.querySelector('.collection-modal')
let collectionDialog = document.querySelector('.collection-dialog')
let collectionClose = collectionDialog.querySelector('button')


collectionModalButton.addEventListener('click',()=>{
    collectionDialog.showModal()
})
collectionClose.addEventListener('click', ()=>{
    collectionDialog.close()
})
