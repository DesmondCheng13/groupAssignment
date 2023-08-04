function openNav() {
    if (window.matchMedia("(max-width:420px)").matches) {
        document.getElementById("mySidebar").style.width = "200px";
    } else {
        document.getElementById("mySidebar").style.width = "350px";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}