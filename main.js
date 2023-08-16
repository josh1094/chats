const saved = document.getElementById('saveId');
const name1 = document.getElementById('name-1');
const name2 = document.getElementById('name-2');
const bodyContainer = document.querySelector('.container');
const loginContainer = document.querySelector('.logins');
const signContainer = document.querySelector('.signup');
const id1 = document.getElementById('id-1');
const id2 = document.getElementById('id-2');
var names = document.getElementById('name');
var emails = document.getElementById('email');
var messages = document.getElementById('message');
var sender = document.getElementById('send');

function loginButton() {
    if (saved.innerHTML === id1.value) {
    if(name1.value === '' || id1.value === ''){
        return;
    } else {
        loginContainer.classList.remove('active');
        bodyContainer.classList.add('active');
        names.value = name1.value;
        name1.value = '';
        id1.value = '';
    }
    }
}
function signin() {
    if(confirm("Are you sure you want to sign up ?")){
        loginContainer.classList.remove('active');
        signContainer.classList.add('active');
    } else {
        return;
    }
}
function signButton() {
    if(name2.value === '' || id2.value === ''){
        return;
    } else {
    loginContainer.classList.add('active');
    signContainer.classList.remove('active');
    }
    saved.innerHTML = id2.value;
}
function exitButton() {
    if(confirm('Are you sure you want to exit ?')){
    names.value = '';
    emails.value = '';
    messages.value = '';
    sender.innerText = 'Send';
    bodyContainer.classList.remove('active');
    loginContainer.classList.add('active');
    } else {
        return;
    }
}

function sendMail(){
    if(emails.value === '' || messages.value === '' || names.value === ''){
        return;
    }
    var params = {
     name: document.getElementById("name").value,
     email: document.getElementById("email").value,
     message: document.getElementById("message").value,
    };
   if(sender.innerText === 'Send'){
    sender.innerHTML = 'Sending...';
   }

   const serviceID = 'service_cfs5mno';
   const templateID = 'template_i5731hi';
   
   emailjs
   .send(serviceID, templateID, params)
   .then(
   res =>{
   document.getElementById('name').value = "";
   document.getElementById('email').value = "";
   document.getElementById('message').value = "";
   console.log(res);
   if (sender.innerText === 'Sending...') {
   sender.innerHTML = 'Sent';
   }
   setTimeout(function(){
    sender.innerHTML === 'Send';
   }, 1500);
   }
   );
   }