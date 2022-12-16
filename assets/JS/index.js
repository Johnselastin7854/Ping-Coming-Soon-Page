// Selecting Elements
const form=document.getElementById("form");
const email=document.getElementById("email");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
   

    checkInput()
})

function checkInput(){
    const emailValue=email.value.trim();

    if(emailValue === ""){

        setError(email, "Email cannot be blank")
    }
    else if(!isEmail(emailValue)){
        setError(email, "Please provide a valid email address")
    }
    else{
        setSuccess(email)
    }
}

function setError(input, message){
    const parentEl=input.parentElement;
    const small= parentEl.querySelector("small");

    parentEl.className="form-control error";

    small.innerText=message;
}

function setSuccess(input){
    const parentEl=input.parentElement;

    parentEl.className="form-control success";

}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}