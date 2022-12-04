function clickHandler(event){
    console.log("clicked", event.target)
    if(event.target.textContent === "Dark Mode")//back ground color button is pressed
    {
        document.body.classList.toggle("DarkBG");
    }
}
document.body.addEventListener("click", clickHandler)

function Sidebar(event){
    if(event.target.textContent === "Dark Mode")//Side bar original function above does not affect it. Does not work as well in the long run(it was working previously)
    {
        document.getElementById("sidebar").classList.toggle("asideBG");
    }
}

document.body.addEventListener("click", Sidebar)
// Cancel Button Functionality //
const CancelButton = document.querySelector('.Cancel')
const textbox = document.querySelector('textarea') // textbox
const bottom_buttons = document.querySelector('.buttons-bot')

function cancel(){
   textbox.style.visibility = 'hidden'
   bottom_buttons.style.visibility = 'hidden'
}
CancelButton.addEventListener('click', cancel);

// New Note functionality

const NewnoteButton = document.querySelector('#NoteN')

function newtoggle(){
   textbox.style.visibility = 'visible'
   bottom_buttons.style.visibility = 'visible'
   if (textbox.style.visibility == 'visible'){
      textbox.value = ''
   }
   
}
NewnoteButton.addEventListener('click', newtoggle);
