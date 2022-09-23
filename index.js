function stylePassword(){
  document.querySelectorAll("#login-form input")[2].classList.add("form-error")
  document.querySelectorAll("#login-form input")[2].placeholder=""
  document.querySelectorAll("#login-form div")[2].classList.remove("invisible")
}

$("#claim").click(function(event){
  var fName=document.querySelectorAll("#login-form input")[0].value
  var lName=document.querySelectorAll("#login-form input")[1].value
  var email=document.querySelectorAll("#login-form input")[2].value
  var password=document.querySelectorAll("#login-form input")[3].value


  if(fName===""){
    document.querySelectorAll("#login-form input")[0].classList.add("form-error")
    document.querySelectorAll("#login-form input")[0].placeholder=""
    document.querySelectorAll("#login-form div")[0].classList.remove("invisible")
  }

  if(lName===""){
    document.querySelectorAll("#login-form input")[1].classList.add("form-error")
    document.querySelectorAll("#login-form input")[1].placeholder=""
    document.querySelectorAll("#login-form div")[1].classList.remove("invisible")
  }
  var suffix="";
  for(var i=0;i<email.length;i++){
    if(email[i]==="."){
      suffix=email.substring(i);
      break;
    }
  }
    if(suffix!==".com" && suffix!==".in" && suffix!==".org"){
      stylePassword();
    }

  if(password===""){
    document.querySelectorAll("#login-form input")[3].classList.add("form-error")
    document.querySelectorAll("#login-form input")[3].placeholder=""
    document.querySelectorAll("#login-form div")[3].classList.remove("invisible")
  }
})

//height issue
const setHeight = () => {
  if(window.innerHeight<690 && window.innerWidth<700){
    document.getElementsByClassName("viewport")[0].style.height = "100%"
  }
  else{
    document.getElementsByClassName("viewport")[0].style.height = "100vh"
  }
};
let deviceWidth = window.matchMedia("(max-width: 1024px)");//returns a boolean
if (deviceWidth.matches) {
    window.addEventListener("resize", setHeight);
    setHeight();
}
