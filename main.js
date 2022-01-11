const hiddenPassword = document.querySelector('.eyePassword');
const inputPassword = document.querySelector("#inputPassword");
let showPassword = false;
const submitButton = document.querySelector('#submitButton');
hiddenPassword.addEventListener('click', () => {
   if(showPassword === false )
   {
 hiddenPassword.style.background = "url('https://api.iconify.design/fa-regular/eye-slash.svg') no-repeat";
 
 inputPassword.type = "text";
 showPassword = true;
 }
 else{
   hiddenPassword.style.background = "url('https://api.iconify.design/fa-regular/eye.svg') no-repeat";
   inputPassword.type = "password";
   showPassword = false;
 }
  
})

//validando login


const loginLocal = localStorage;


submitButton.addEventListener('click', (evento) => {
  evento.preventDefault();
  
  validarLogin();
  
  
  
 

  
  
  
})

function validarLogin()
{
  
  
  const inputEmail = document.querySelector("#inputEmail");
  const inputPassword = document.querySelector("#inputPassword");
  
  
  if(inputEmail.value === loginLocal.getItem('email')  && inputPassword.value === loginLocal.getItem('password'))
  {
    window.location.href = "easteregg.html";
    
  }
  else{
    alert("entre com um login válido")
  }
}

const forgot = () =>{
  
  alert("Esqueceu a senha, que pena!");
}