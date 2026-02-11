// Modal Buttons
let imageModalButton = document.querySelector('.image-modal')
// let videoModalButton = document.querySelector ('.video-modal')
// let linkModalButton = document.querySelector ('.link-modal')
// let gifModalButton = document.querySelector ('.gif-modal')
// let textModalButton = document.querySelector ('.text-modal')



// Dialog/popup boxes
let imageDialog = document.querySelector('.image-dialog')
// let videoDialog = document.querySelector('.video-dialog')
// let linkDialog = document.querySelector('.link-dialog')
// let gifDialog = document.querySelector('.gif-dialog')
// let textDialog = document.querySelector('.text-dialog')



// Close buttons
let imageClose = imageDialog.querySelector('button')
// let videoClose = videoDialog.querySelector('button')
// let linkClose = linkDialog.querySelector('button')
// let gifClose = gifDialog.querySelector('button')
// let textClose = textDialog.querySelector('button')



// -----------------------------------------------------------------

// Image
imageModalButton.addEventListener('click',()=>{
    imageDialog.showModal()
})
imageClose.addEventListener('click', ()=>{
    imageDialog.close()
})

// // Video 
// videoModalButton.addEventListener('click',()=>{
//     videoDialog.showModal()
// })
// videoClose.addEventListener('click', ()=>{
//     videoDialog.close()
// })

// // Link
// linkModalButton.addEventListener('click',()=>{
//     linkDialog.showModal()
// })
// linkClose.addEventListener('click', ()=>{
//     linkDialog.close()
// })

// // Gifs
// textModalButton.addEventListener('click',()=>{
//     textDialog.showModal()
// })
// textClose.addEventListener('click', ()=>{
//     textDialog.close()
// })

// // Gifs
// gifModalButton.addEventListener('click',()=>{
//     gifDialog.showModal()
// })
// gifClose.addEventListener('click', ()=>{
//     gifDialog.close()
// })

// ...existing code...
// const types = ['image', 'video', 'link', 'gif', 'text']

// types.forEach(type => {
//   const modalBtn = document.querySelector(`.${type}-modal`)
//   const dialog = document.querySelector(`.${type}-dialog`)
//   if (!modalBtn || !dialog) return
//   const close = dialog.querySelector('button')

//   modalBtn.addEventListener('click', () => dialog.showModal())
//   if (close) close.addEventListener('click', () => dialog.close())
// })
// ...existing code...


