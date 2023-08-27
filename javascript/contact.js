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

function sendMessage() {
    document.getElementById("contact-form").submit();
}

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "cwxdesmond2002@gmail.com",
        Password: "00B15FF1600F1C288D8004016F40B1EE9957",
        To: 'cwxdesmond2002@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New message from 24 Seasons Drum SMKSK",
        Body: "Phone number: " + document.getElementById("phone").value + "<br>" + document.getElementById("message").value
    }).then(
        message => alert("Message sent successfully!")
    );
}