// Random Password Generator



function randomPasswordGenerator() {
    let string = "1234567890!@#$%^&*()_+-=AQZXSWCDEVFRBGTNHYMJUKILOP,./;'[]azqwsxcderfvbgtyhnmjuiklop<>?:{}|";

    let pass = "";

    for (let i = 0; i < 12; i++) {
        let randomNumber = Math.floor(Math.random() * string.length);

        pass = pass + string[randomNumber];
    }

    document.getElementById("password").value = pass;
}
