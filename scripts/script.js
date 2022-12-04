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
//Save Button
const sidebar_notes = document.querySelector("aside", "ul", "nav")
const saveButton = document.querySelector('#Save')

function save(){
   let saveName = prompt('What is the Title?:');
   let generated_note = {title:saveName, body:textbox.value};
   ArrayNotes.push(generated_note);
   noteListAppend();
   function noteListAppend(){
      var listing = document.createElement('li');
      var createNote = document.createTextNode(saveName);
      listing.appendChild(createNote);
      sidebar_notes.appendChild(listing);
   }
}
saveButton.addEventListener("click" , save);

//Array
let ArrayNotes = 
[{title:"Note One",
   body:"This is the 1st note"},
{title:"Note Two",
   body:"This is the 2nd note"}
]
// Note List Functionality which doesn't function apparently.
function NoteDisplay(inquiry){
    var notetitle_Search = inquiry.target.innerText
    for (var i = 0; i < ArrayNotes.length; i++)
    {
       if (ArrayNotes[i].title === notetitle_Search){
          textbox.value = ArrayNotes[i].body
       }
    } 
 }   
 sidebar_notes.addEventListener("click", NoteDisplay);
