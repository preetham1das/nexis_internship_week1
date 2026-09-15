const form = document.getElementById("contactForm");
form.addEventListener("submit",function(Event){
    Event . preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const errorMessage = document.getElementById("errorMessage");

    if(name===""){
        errorMessage.textContent = "Please enter your name.";
        return ;
       } else if(email===""){
        errorMessage.textContent = "Please enter your email.";
        return ;
       }else if(message === ""){
        errorMessage.textContent = "Please enter your message.";
        return;
       }else {
        alert("Form Submitted Successfully!");
        form.reset();
       }
});