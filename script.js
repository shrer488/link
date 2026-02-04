// Modal Buttons
let imageModalButton = document.querySelector('.image-modal')
let videoModalButton = document.querySelector ('.video-modal')
let linkModalButton = document.querySelector ('.link-modal')
let gifkModalButton = document.querySelector ('.gif-modal')


// Dialog/popup boxes
let imageDialog = document.querySelector('.image-dialog')
let videoDialog = document.querySelector('.video-dialog')
let linkDialog = document.querySelector('.link-dialog')
let gifDialog = document.querySelector('.gif-dialog')


// Close buttons
let imageClose = imageDialog.querySelector('button')
let videoClose = videoDialog.querySelector('button')
let linkClose = linkDialog.querySelector('button')
let gifClose = gifDialog.querySelector('button')


// -----------------------------------------------------------------

// Image
imageModalButton.addEventListener('click',()=>{
    imageDialog.showModal()
})
imageClose.addEventListener('click', ()=>{
    imageDialog.close()
})

// Video 
videoModalButton.addEventListener('click',()=>{
    videoDialog.showModal()
})
videoClose.addEventListener('click', ()=>{
    videoDialog.close()
})

// Link
linkModalButton.addEventListener('click',()=>{
    linkDialog.showModal()
})
linkClose.addEventListener('click', ()=>{
    linkDialog.close()
})

// Gifs
gifkModalButton.addEventListener('click',()=>{
    gifDialog.showModal()
})
gifClose.addEventListener('click', ()=>{
    gifDialog.close()
})