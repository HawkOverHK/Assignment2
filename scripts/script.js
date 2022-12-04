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