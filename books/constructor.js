function getMonthName(monthNumber) {
  const months = {
    0: "Января",
    1: "Февраля",
    2: "Марта",
    3: "Апреля",
    4: "Мая",
    5: "Июня",
    6: "Июля",
    7: "Августа",
    8: "Сентября",
    9: "Октября",
    10: "Ноября",
    11: "Декабря"
  };
  return months[monthNumber];
}

const storage = document.querySelector('.storage');
const book_storage = document.querySelector('.book_storage');
const embed = document.getElementById("embed");
const modal = document.querySelector(".modal__book");
const _alert = document.querySelector('.alert');
let intervalId;
const _favourites = document.querySelector('.favourites');

let data = new Date();

for (let i in books) {
  renderBooks(i);
}

  

function renderBooks(i){
  const create = document.createElement('div');
  const storage_create = document.createElement('div');
  const createBtn = document.createElement('button');
  const createBtnRemove =  document.createElement('button');
  createBtnRemove.textContent = "Удалить из избранного"
  createBtnRemove.classList.add('removeBtn',"link-font");
  create.setAttribute("data-liked", "false");
  create.setAttribute("data-id", i);

  function addBtn() {
    if(create.dataset.liked==="true"){
      create.append(createBtnRemove)
    } else{
      create.append(createBtn);
    }
  }

  function showBook() {
    modal.style.zIndex = "100";
        modal.style.opacity = "1";
        window.onkeydown = (event) => {
          
          if(event.key ==="Escape") {
            modal.style.zIndex = "";
            modal.style.opacity = "";
            window.onkeydown = null;
          }
        }
        embed.src=`${books[i].pdf}`;
        btn = document.querySelector('button');
        modal.addEventListener("click", function(event) {
          if(event.target.tagName==="EMBED"){
            event.stopPropagation();
          } else {
            modal.style.zIndex = "";
            modal.style.opacity = "";
            window.onkeydown = null;
          }
        });
  }

  createBtnRemove.addEventListener("click",function(event) {
    event.stopPropagation();
    createBtnRemove.remove();
    const books = document.querySelectorAll(".storage > .card");
    for (const book of books) {
      if(book.dataset.id===create.dataset.id) {
        book.remove();
      }
    }
    create.dataset.liked = false;
    addBtn();
  });

  createBtn.textContent = "Добавить в избранное";
  createBtn.classList.add('createBtn',"link-font");
  createBtn.addEventListener("click",function(event) {
    createBtn.remove();
    create.dataset.liked = true;
    storage_create.classList.add('card', "fade");
    storage_create.setAttribute("data-id", i);
    storage_create.innerHTML = `
    <p class="title-font" style="font-size:14px;">${books[i].title}</p>
    <p class="regular-font" style="font-size:12px;position: relative;
    right: -60%;">${books[i].autorName} ${books[i].autorSurname}</p>
    <p class='time regular-font' style="font-size:12px">${data.getDate()} ${getMonthName(data.getMonth())}</p>
    `;
    storage_create.addEventListener("click",showBook);
    storage.append(storage_create);
    event.stopPropagation();
    clearInterval(intervalId);
    _alert.style.transform = "translateY(0)";
    intervalId = setInterval(() => {
    _alert.style.transform = "translateY(-100%)";
    }, 2000);
    addBtn();
  });
  // ${books[i].img}
  
  create.classList.add('book');
  create.innerHTML= `
          <img src="imgs/book/book1.png" alt="">
          <p>${books[i].title}</p>
          <p>${books[i].autorName} ${books[i].autorSurname}</p>
  `;
  addBtn();
  

  createBtnRemove
  create.onclick = showBook;
  
  book_storage.appendChild(create);
}

