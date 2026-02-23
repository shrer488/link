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

// -----------------------------------------------------------------------
// ADDING FILTER FUNCTIONALITY TO THE CONTENT

// Used copilot (GPT-05mini) here to add the filter functionality to the content.
// every time user clicks on the filter option button the filterBlockByClass function is called and the blockClass is passed to it as an argument. eg: images is clicked 'image-block' is passed. 
// Now the allItems const selects all the list items in the channel-blocks list and checks each one by one. if the argument is all (showAll button is clicked) then the function removes 'filter' class from all the list items. but if the argument is any other block type (image, links ...) then the function adds 'filter' class to all list items except the ones with the sent block type.

// what is 'filter' class? it is the class with display:none in the css.

let showAllButton = document.querySelector('.show-all')
let showImagesButton = document.querySelector('.show-images')
let showTextButton = document.querySelector('.show-texts')
let showLinksButton = document.querySelector('.show-links')
let showOtherButton = document.querySelector('.show-others')



function filterBlocksByClass(blockClass) {
    // select all items inside channel-blocks 
    const allItems = document.querySelectorAll('#channel-blocks li')
    allItems.forEach(item => {
        if (blockClass === 'all') {
            item.classList.remove('filter')
        } else {
            item.classList.toggle('filter', !item.classList.contains(blockClass))
        }
    })
}

showAllButton?.addEventListener('click', () => filterBlocksByClass('all'))
showImagesButton?.addEventListener('click', () => filterBlocksByClass('image-block'))
showTextButton?.addEventListener('click', () => filterBlocksByClass('text-block'))
showLinksButton?.addEventListener('click', () => filterBlocksByClass('link-block'))
showOtherButton?.addEventListener('click', () => filterBlocksByClass('other-block'))