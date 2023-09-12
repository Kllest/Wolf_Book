import home from "./home/index";
import about from "./home/about";
import contacts from "./home/contacts";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        switch(window.location.hash){
            case " ";
            main.appendChild(home());
            break;
            case "#about"
            main.appendChild(about());
            break;
            case "#contacts";
            main.appendChild(contacts());
            break;
            default;
            main.appendChild(home());
        }
    } )
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})