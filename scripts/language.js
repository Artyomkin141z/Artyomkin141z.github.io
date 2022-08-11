// import language from "./lngTranslate";

const ruSwitch = document.querySelector(".switch__RU");
const engSwitch = document.querySelector(".switch__ENG");
const allLang = ['ru', 'eng'];

ruSwitch.addEventListener('click', (event) => {
    location.href = window.location.pathname + "#ru";
    location.reload();
});
engSwitch.addEventListener("click", (event) => {
    location.href = window.location.pathname + "#eng";
    location.reload();
});

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substring(1);
    
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + "#eng";
        location.reload();
    }

    if(hash == "ru"){
        ruSwitch.classList.add("switch__click");
        engSwitch.classList.remove("switch__click");
    }
    else{
        engSwitch.classList.add("switch__click");
        ruSwitch.classList.remove("switch__click");
    }

    document.title = language['name'][hash];

    for(let i in language){
        let selectors = document.querySelectorAll('.lng-' + i);
        for(let n = 0; n < selectors.length; n++){
            selectors[n].innerHTML = language[i][hash];
        }
    }
}

changeLanguage();