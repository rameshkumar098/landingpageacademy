let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}



var config = {
    apiKey: "AIzaSyBGl8WRPw6OmcaA6WEsJGQN9VtmnL0tEbU",
    authDomain: "contact-form-af120.firebaseapp.com",
    databaseURL: "https://contact-form-af120.firebaseio.com",
    projectId: "contact-form-af120",
    storageBucket: "contact-form-af120.appspot.com",
    messagingSenderId: "868725020169"
  };

firebase.initializeApp(config);

// reference messages collection
var messageRef = firebase.database().ref('messages');


// listen for form submition
document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form (MAIN)
function submitForm(e) {
    // prevent the default behaviour of submit
    e.preventDefault();

    // get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // save message
    saveMessage(name, company, email, phone, message);

    // show alert on successful submition
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3 seconds (timeout)
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // clear form after submission
    document.getElementById('contactForm').reset();
}

// get specific input value
function getInputVal(id) {
    return document.getElementById(id).value;
}

// save the form to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messageRef.push();
    // sending an object of data to be saved
    newMessageRef.set({
        name: name,
        comapny: company,
        email: email,
        phone: phone,
        message: message
    });
}



