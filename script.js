const buttons = document.querySelectorAll(".submit");

buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        button.classList.toggle("active");
    });
})