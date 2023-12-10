
// Списки карточек
const cardStorages = document.querySelectorAll(".card-storage");
const lastUpdatesList= document.querySelectorAll(".swiper-wrapper")[0];
const communityStorage = document.querySelectorAll(".swiper-wrapper")[1];
const slickTrack = document.querySelectorAll(".slick-track");
const lastUpdatesContainer = document.querySelector(".last-updates-container");
const communityContainer = document.querySelector(".community-container");





// Цикл для отрисовки статей
for(let articleId in articles){
    const create = document.createElement("div");
    create.classList.add("update-card","card-link" , "swiper-slide");
    create.style.width = "300px"
    create.setAttribute("data-id",articleId);
    create.style.backgroundImage = `url(${articles[articleId].imgId})`;
    create.innerHTML = `
        <h3 class="title-font card-title pad-z-relative">${articles[articleId].title}</h3>
        <p class="regular-font pad-z-relative card-description">${articles[articleId].description}</p>
        <div class="likes-and-views pad-z-relative ">
        <div class="likes regular-font">
            Понравилось: ${articles[articleId].likes}
        </div>
        <div class="views regular-font">
            Просмотры: ${articles[articleId].views} 
        </div>
        </div>`;
    create.addEventListener("click", event=>{
        let card = event.target.closest(".card-link");
        if(card){
            window.location.href=`article.html?id=${card.dataset.id}`;
        }
    });
    if(lastUpdatesContainer) lastUpdatesContainer.appendChild(create);
    if(lastUpdatesList) lastUpdatesList.appendChild(create); 
}

// Цикл для отрисовки сообществ
const modalTitle = document.querySelector(".modal__title"),
      modalText = document.querySelector(".modal__text"),
      modalPhoto = document.querySelector(".modal__photo"),
      modal = document.querySelector(".modal");



modal.addEventListener("click",  (event) =>{
    if(event.target.classList.contains("modal")){
        modal.style.zIndex = "";
        modal.style.opacity = "";
    }
});
    

    
for(let communityId in communities){
    const create = document.createElement("div");
    create.classList.add("popular-card","card-link", "swiper-slide");
    const title = communities[communityId].title,
          photo = communities[communityId].img,
          description = communities[communityId].description;
    create.innerHTML = `
    <img src="${photo}" alt="" width="133px">
    <svg width="219" height="152" viewBox="0 0 219 152" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_945_30)">
        <path d="M31.8585 152C16.2708 152 8.47699 152 6.22884 147.721C3.98069 143.441 8.63248 136.691 17.9361 123.19C28.1867 108.315 38 90.3316 38 76C38 61.4286 28.4995 43.764 18.4298 29.1335C8.98734 15.4144 4.26614 8.55492 6.51479 4.27747C8.76344 0 16.6487 0 32.4192 0H220V152H31.8585Z" fill="#393D5E"/>
        </g>
        <defs>
        <filter id="filter0_d_945_30" x="-14.3306" y="-21" width="254.331" height="192" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-1"/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_945_30"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_945_30" result="shape"/>
        </filter>
        </defs>
        </svg> 
        <div class="hub">
        <h3 class="title-font">${title}</h3>
        <p class="regular-font hub_text">${description}</p>
        <p class="regular-font">8${communities[communityId].members} Участников</p>
        </div>
    `;

    create.addEventListener("click", function() {
        modalTitle.textContent = title;
        modalText.textContent  = description;
        modalPhoto.src = photo;
        modal.style.zIndex = "100";
        modal.style.opacity = "1";
        
    });
    if(communityStorage)communityStorage.appendChild(create);
    if(communityContainer)communityContainer.appendChild(create);
}

//Рендерим книжки
const book_storage = document.querySelector(".book__main");
const modalBook = document.querySelector(".modal__book");
for (let i in books) {
    renderBooks(i);
}

function renderBooks(i){
    const create = document.createElement('div');
    create.classList.add('book');
    create.innerHTML= `
            <img src="${books[i].img}" alt="">
            <p>${books[i].title}</p>
            <p>${books[i].autorName} ${books[i].autorSurname}</p>
    `;
    
    create.onclick = showBook;
    
    book_storage.appendChild(create);


    function showBook() {
        modalBook.style.zIndex = "100";
        modalBook.style.opacity = "1";
        window.onkeydown = (event) => {
        
        if(event.key ==="Escape") {
            modalBook.style.zIndex = "";
            modalBook.style.opacity = "";
            window.onkeydown = null;
        }
        }
        embed.src=`${books1[i].pdf}`;
        
        modalBook.addEventListener("click", function(event) {
        if(event.target.tagName==="EMBED"){
            event.stopPropagation();
        } else {
            modalBook.style.zIndex = "";
            modalBook.style.opacity = "";
            window.onkeydown = null;
        }
        });
    }


}
