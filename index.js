const form=document.getElementById("login-form");
const fName=document.getElementById("login-form")[0];
const lName=document.getElementById("login-form")[1];
const email=document.getElementById("login-form")[2];
const password=document.getElementById("login-form")[3];

function handleClick(){
  validation();
}
function stylesChange(x){
  document.querySelectorAll("#login-form input")[x].classList.add("form-error")
  document.querySelectorAll("#login-form input")[x].placeholder=""
  document.querySelectorAll("#login-form div")[x].classList.remove("invisible")
}

function validation(){
  const fNameValue=fName.value;
  if(fName.validity.valueMissing){
    stylesChange(0);
  }
  if(lName.validity.valueMissing){
    stylesChange(1);
  }
  if(!email.validity.valid){
    stylesChange(2);
  }
  if(password.value.length<5){
    stylesChange(3);
  }
}
