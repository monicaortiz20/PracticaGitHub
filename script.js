const inputEmail = document.getElementById('inputEmail').value

const inputPassword = document.getElementById('inputPassword').value

const submit = document.getElementById('submit')

let arrUsers = []

let variableChunga = 34
let variableGhetto = 2
let vaAPetar = "sí o sí"

let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

submit.addEventListener('submit', () => {
    if (regexMail.test(inputEmail) && regexPassword.test(inputPassword)) {
        arrUsers.push(dataUser =
        {
            user: inputEmail,
            password: inputPassword
        }
        )
    } else {
        console.log("Error")
    }
})


