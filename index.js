
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(name) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents){
        tabcontents.classList.remove("active-tab")
    }

    Event.currentTarget.classList.add("active-link");
    document.getElementById(name).classList.add("active-tab");
}