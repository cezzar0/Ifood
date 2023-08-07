
let btnn = document.getElementById('btnn');

window.onscroll = function () {
    if (scrollY >= 400) {
        btnn.style.display = 'block';
    } else {
        btnn.style.display = 'none';
    }
}
btnn.onclick = function () {
    scroll({
        right: 0,
        top: 0,
        behavior: "smooth"
    })
}


function formValidate() {
    let nameSingUp = document.getElementById('nameSingUp');
    let EmailSingUp = document.getElementById('EmailSingUp');
    let passSingUp = document.getElementById('passSingUp');
    var text = "";

    if (EmailSingUp.indexOf("@") == -1) {
        text = "Plasse Enter Your Email Address @";
        error.innerHTML = text;
        return false;
    } else if (nameSingUp.length < 7) {
        text = "Plasse Enter Your Password"
        error.innerHTML = text;
        return false;
    } else if (passSingUp.length < 8) {
        text = "Plasse Enter Your Password"
        error.innerHTML = text;
        return false;
    } else {
        alert = ("done");
        return true;
    }
}
