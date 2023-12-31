const burger = document.querySelector(".burger");
const aside = document.querySelector(".nav-wrap");
if(burger){
    burger.addEventListener("click", function() {
        aside.classList.add("open");
        window.addEventListener("click", function burger(event) {
            const sideBar = event.target.closest(".nav-wrap");
            console.log(sideBar);
            if(!sideBar) {
                aside.classList.remove("open");
                window.removeEventListener("click", burger);
            }
            
        }, {capture:true})
    });
}

function hideBurger() {
    if (body.offsetWidth >= 1200) {
        aside.classList.remove("open");
    }
}

new ResizeObserver(hideBurger).observe(body);
