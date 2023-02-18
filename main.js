console.log(document.getElementsByTagName('h1')[0].innerHTML = "New Text") 
//          ^ targets the html, ^get all docs, target h1, and bring back 1st one, and change it to New Text

let colorButton = document.getElementById('color-button')
console.log(colorButton)

function colorChange(){
    let headerText = document.getElementsByTagName('h1')[0].innerHTML
    if(headerText == 'New Text'){
        document.getElementsByTagName('h1')[0].className='color-change'
                // what we're targeting ^       ^ what do we want to change  and what we change it to
    } else {
        headerText = 'Something Else'
    }
}

// Create the event listener (the response to the event)
// Change the text color via click event listener in JS
colorButton.addEventListener('click', colorChange)

// adding a new button in JS
let button = document.createElement('button')
let buttonDisplay = document.createElement('h2')
// Add inner text to the button
button.innerHTML = "I am alive!"
document.body.append(button)

button.addEventListener('click', function(){
    buttonDisplay.innerHTML = "More JS info here..."
    document.body.append(buttonDisplay)
})

// Grab copied text -- then place into a clipboard
 const source = document.querySelector('div.source');
 source.addEventListener('copy', ( event ) => {
    console.log(ClipboardEvent);
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase())
    event.preventDefault();
 } )

 // Grabbing Form Data from a Submit event
 const form = document.querySelector('#testDataForm')

 // Add event listener for submit event
 form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let query_first = document.querySelector('#first-name');
    let query_last = document.querySelector('#last-name')
    let first_name = event.path[0][0].value;
    let last_name = event.path[0][1].value;
    console.log(event)
    console.log(first_name, last_name)
    console.log(`This came from the query selector: ${query_first.value}, ${query_last.value}`)
 })
