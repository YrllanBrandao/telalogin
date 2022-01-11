const email = document.querySelector("#inputEmail");
const emailConfirm = document.querySelector("#inputEmailConfirm");
const buttonSign = document.querySelector("#submitSign");
const inputUser = document.querySelector("#inputUser");
const password = document.querySelector("#inputPassword");
const passwordConfirm = document.querySelector("#inputPasswordConfirm");



const loginLocal = localStorage;


buttonSign.addEventListener("click",(e) =>{
   e.preventDefault();
   
   validarDados()

   
});


function validarDados()
{
  let validos = 0;
  if(email.value === emailConfirm.value)
  {
    email.style.border = "none";
    emailConfirm.style.border = "none";
    loginLocal.setItem('email', `${email.value}`);
    validos++;
  }
  else if( email.value !== emailConfirm.value){
    email.style.border = "1px solid red";
    emailConfirm.style.border = "1px solid red";
    alert("Emails are not the same, correct and try again");
    
  }
  
  
  if (password.value === passwordConfirm.value)
  {
    loginLocal.setItem('password', `${password.value}`);
    validos++;
  }
  else if(password.value !== passwordConfirm.value) {
    alert("Passwords do not match, try again");
    password.style.border = "1px solid red";
    passwordConfirm.style.border = "1px solid red";
    
  }
  
  if(validos >= 0)
  {
    window.location.href = "index.html"
  }
}