let position = [],
    currentActive = null,
    links = '.anchor';

let allHref = document.querySelectorAll(links);

allHref.forEach(function(elem){
    position.push({
        top: elem.getBoundingClientRect().y,
        a: elem.id + '-head'
    })
});

function removeActive(){
    let arr = document.querySelectorAll('.click__buttom');
    arr.forEach((elem) => {
        elem.classList.remove("text__active");
    })
}

window.addEventListener('scroll', function() {
    let winTop = (window.pageYOffset !== undefined) 
                ? window.pageYOffset 
                : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    for(let i = 0; i <= position.length; i++){
        if(winTop <= position[i].top){
            if(currentActive !== i){
                currentActive = i;

                let tag = document.getElementById(position[i].a);
                
                removeActive(allHref);
                tag.classList.add("text__active");
            }
            break;
        }
    }
});