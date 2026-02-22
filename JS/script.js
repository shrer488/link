// Modal Buttons
let collectionModalButton = document.querySelector('.collection-modal')
let collectionDialog = document.querySelector('.collection-dialog')
let collectionClose = collectionDialog.querySelector('button')
let heroContent = document.querySelector('.hero-content')
let butterflyImage = document.querySelector('.butterfly-image')


collectionModalButton.addEventListener('click',()=>{
    collectionDialog.showModal()
    heroContent.style.display = 'none' // Hides the hero content when the collection dialog is open
})

collectionClose.addEventListener('click', ()=>{
    collectionDialog.close()
    heroContent.style.display = 'flex' // Shows the hero content when the collection dialog is closed
})


// added event listener to the butterfly image to open the collection dialog when the butterfly image is clicked and hide the hero content when the butterfly image is clicked. This is done to ensure that the hero content does not interfere with the collection dialog when it is open and to provide a better user experience on mobile devices where the butterfly image is visible.
butterflyImage.addEventListener('click', ()=>{
    collectionDialog.showModal()
    heroContent.style.display = 'none' // Hides the hero content when the butterfly image is clicked
})
