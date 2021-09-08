import variables from "./variables.css"
import cssmobile from "./mobile-styles.css"
import cssdesktop from "./desktop-styles.css"
import brands from "../node_modules/@fortawesome/fontawesome-free/js/brands.js"
import solid from "../node_modules/@fortawesome/fontawesome-free/js/solid.js"
import fontawesome from "../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js"


function checkValidEmail () {
    const inputText = document.getElementById("email")
    const errorMessage = document.querySelector(".get-early-access .error-message")
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const result = re.test(inputText.value)
    if (result){
        errorMessage.style.display = "none"
        console.log("result true")
        return true
    }
    else {
        errorMessage.style.display = "block"
        console.log("result false ")
        return false;
    }
}

const button = document.querySelector(".get-early-access .button")

button.addEventListener("click", checkValidEmail)
