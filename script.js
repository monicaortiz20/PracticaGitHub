const inputEmail = document.getElementById('inputEmail').value

const inputPassword = document.getElementById('inputPassword').value

const submit = document.getElementById('submit')

let arrUsers = []


submit.addEventListener('submit', () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail) && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(inputPassword)) {
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


