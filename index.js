let email=document.querySelector("#email");
let pass=document.querySelector("#password");
let form=document.querySelector("#loginForm");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    document.querySelector("#emailError").textContent="";
    document.querySelector("#passwordError").textContent="";
    document.querySelector(".error").style.display="none";
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let emailans=emailRegex.test(email.value);
let passwordans=passwordRegex.test(password.value);
let isValid=true;
if(!emailans){
document.querySelector("#emailError").textContent="Email is incorrect!";
document.querySelector(".error").style.display="initial";
let isValid=false;
}
if(!passwordans){
document.querySelector("#passwordError").textContent="Password is incorrect!";
document.querySelector(".error").style.display="initial";
let isValid=false;
if(isValid){
    alert("Logic succesfully!")
}
}
})