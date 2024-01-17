
const newParagraph = document.createElement('p');
document.getElementById('email-check').appendChild(newParagraph);


document.getElementById('form').addEventListener('submit', (event) => {

    event.preventDefault();

    const emailValue = document.forms['form'].email.value;

    const isEmailValid = validazioneEmail(emailValue);

    if (!isEmailValid) {
        emailInvalid();
    } else {
        emailValid();
    }
});

function emailValid() {
    newParagraph.textContent = "Form submitted successfully";
    newParagraph.style.color = "green";
    console.log("si fa per dire ;)");
}

function emailInvalid() {
    newParagraph.textContent = "Oops! Please check your email";
}

function validazioneEmail(email) {
    if (email == '') {
        // console.log("sono passato di qui");
        return false;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;  // Restituisci true se l'email è valida
    } else {
        return false;
    }
}