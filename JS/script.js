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


// function to remove the active state in the controls-content
// here we are 
// 1. adding all the buttons in the control list to an array 'controlsList'
// 2. checking each of these buttons to see if they have class 'active-content'
// 3. removing 'active-content' from all of them
function removeActiveClass(){
    const controlsList = document.querySelectorAll('.controls-content li button')

    controlsList.forEach(element => {
        if(element.classList.contains( 'active-content')){
            element.classList.remove('active-content')
        }
    });
}



// I used Gemini for shorterning the code
// Basically before I had a long and repeated list of function which had same code just a different variable so I asked Gemini to shorten it and remove the DRY code.
// What is happening?
// You have your filters array with a key (btn and type) : value ('.show-images','image-block' ....) pair. These filters get called one by one by the 'for each' function below. And then the other functions get called which filters the content and changes the state of the buttons in the controls-content (our menu)
const filters = [
    { btn: '.show-all', type: 'all' },
    { btn: '.show-images', type: 'image-block' },
    { btn: '.show-texts', type: 'text-block' },
    { btn: '.show-links', type: 'link-block' },
    { btn: '.show-others', type: 'other-block' }
];

filters.forEach(({ btn, type }) => {
    const buttonElement = document.querySelector(btn);
    
    buttonElement?.addEventListener('click', () => {
        filterBlocksByClass(type); //filtering the items in the list acc to the type
        removeActiveClass(); //removing previously active button in the controls-content
        buttonElement.classList.add('active-content'); //adding active state to the active button
    });
});


// adding butterflyVision
// this is just the working of the butterfly vision button. When button is clicked first time it adds .butterfly-version class to dialog, and if it is active and clicked again it removes it from the dialog.
let butterflyVisionButton = document.querySelector('.butterfly-vision-button')

butterflyVisionButton.addEventListener('click', () => {

    if(collectionDialog.classList.contains('butterfly-version')){
        collectionDialog.classList.remove('butterfly-version')
    }
    else{
        collectionDialog.classList.toggle('butterfly-version')
    }
})


// responsive menu bar
// in mobile menu bar is hidden in the filter icon
// added a class called display in css with visibility hidden. and toggled the visibility of the menu in the control-content.
let mobileControls= document.querySelector('.mobile-controls')
let controlsContent = document.querySelector('.controls-content')

mobileControls.addEventListener('click', ()=>{
    
    controlsContent.classList.toggle('display')
    mobileControls.classList.toggle('active-content')
})










