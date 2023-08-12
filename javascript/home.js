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

function scrollFunction() {
    let mybutton = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

window.onscroll = function () {
    scrollFunction();
};