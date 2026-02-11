// Modal Buttons
let collectionModalButton = document.querySelector('.collection-modal')
// let videoModalButton = document.querySelector ('.video-modal')
// let linkModalButton = document.querySelector ('.link-modal')
// let gifModalButton = document.querySelector ('.gif-modal')
// let textModalButton = document.querySelector ('.text-modal')



// Dialog/popup boxes
let collectionDialog = document.querySelector('.collection-dialog')
// let videoDialog = document.querySelector('.video-dialog')
// let linkDialog = document.querySelector('.link-dialog')
// let gifDialog = document.querySelector('.gif-dialog')
// let textDialog = document.querySelector('.text-dialog')



// Close buttons
let collectionClose = collectionDialog.querySelector('button')
// let videoClose = videoDialog.querySelector('button')
// let linkClose = linkDialog.querySelector('button')
// let gifClose = gifDialog.querySelector('button')
// let textClose = textDialog.querySelector('button')



// -----------------------------------------------------------------

// Image
collectionModalButton.addEventListener('click',()=>{
    collectionDialog.showModal()
})
collectionClose.addEventListener('click', ()=>{
    collectionDialog.close()
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


