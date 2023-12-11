const music = new Audio('../audio/1.mp3');

const songs = [
    {
        id:1,
        songName: `Rampampam <br> 
        <div class="subtitle">Minelli</div>`,
        poster: "Music_Website/img/1.jpg",
    },
    {
        id:2,
        songName: `Птичка <br> 
        <div class="subtitle">HammAli & Navai</div>`,
        poster: "Music_Website/img/2.jpg",
    },
    {
        id:3,
        songName: `Седая ночь <br> 
        <div class="subtitle">Юрий Шатунов</div>`,
        poster: "Music_Website/img/3.jpg",
    },
    {
        id:4,
        songName: `Верю в тебя <br> 
        <div class="subtitle">ANNA ASTI</div>`,
        poster: "Music_Website/img/4.jpg",
    },
    {
        id:5,
        songName: `Тает первый снег <br> 
        <div class="subtitle">Ислам Итляшев</div>`,
        poster: "Music_Website/img/5.jpg",
    },
    {
        id:6,
        songName: `In The End <br> 
        <div class="subtitle">Linkin Park</div>`,
        poster: "Music_Website/img/6.jpg",
    },
    {
        id:7,
        songName: `Выпускной <br> 
        <div class="subtitle">Баста</div>`,
        poster: "Music_Website/img/7.jpg",
    },
    {
        id:8,
        songName: `3-е сентебря <br> 
        <div class="subtitle">Михаил Шафутинский</div>`,
        poster: "Music_Website/img/8.jpg",
    },
    // {
    //     id:9,
    //     songName: `отчим <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/6.png",
    // },
    // {
    //     id:10,
    //     songName: `дура <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/1.png",
    // },
    // {
    //     id:11,
    //     songName: `вторник <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/1.png",
    // },
    // {
    //     id:12,
    //     songName: `женская дружба <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/7.png",
    // },
    // {
    //     id:13,
    //     songName: `тиндер <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/2.png",
    // },
    // {
    //     id:14,
    //     songName: `качели <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/7.png",
    // },
    // {
    //     id:15,
    //     songName: `Личка <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/2.png",
    // },
    // {
    //     id:16,
    //     songName: `Друзья <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/8.png",
    // },
    // {
    //     id:17,
    //     songName: `здоровью.нет <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/7.png",
    // },
    // {
    //     id:18,
    //     songName: `сорри <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/9.png",
    // },
    // {
    //     id:19,
    //     songName: `не учи <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/9.png",
    // },
    // {
    //     id:20,
    //     songName: `фарш <br> 
    //     <div class="subtitle">кис-кис</div>`,
    //     poster: "Music_Website/img/2.png",
    // }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});

// search data start
// let search_results = document.getElementsByClassName('search_results')[0];

// songs.forEach(element=>{
//     const {id, songName, poster} = element;

//     let card = document.createElement('a');
//     card.classList.add('card');
//     card.href = "#" + id;
//     card.innerHTML = `
//     <img src="${poster}" alt="">
//         <div class="content">
//            ${songName}
//         </div>
//     `;
//     search_results.style.zIndex = 10;
//     card.style.cursor = 'pointer';
//     search_results.appendChild(card);
// });

// let input = document.querySelector(".search-music");

// input.addEventListener("click" , (event) => {
//     search_results.style.display = "";
    
//     if(input.value == "") {
//         const arr  = Array.from(search_results.getElementsByTagName('a'));
//         arr.forEach(element => {
//             element.style.display = "flex";
//         });
//     }

    
// });

// // Нет мне оправдания
// window.addEventListener("click", (event) => {
//     if(!event.target.classList.contains('card') && !event.target.classList.contains("search-music")) {
//         search_results.style.display = "none";
//     }
// })


// input.addEventListener('keyup', ()=>{
//     let input_value = input.value.toUpperCase();
//     let items = search_results.getElementsByTagName('a');

//     for (let index = 0; index < items.length; index++) {
//         let as = items[index].getElementsByClassName('content')[0];
//         let text_value = as.textContent || as.innerHTML;

//         if (text_value.toUpperCase().indexOf(input_value) > -1) {
//             items[index].style.display = "flex";
//         } else {
//             items[index].style.display = "none";
//         }

//         if (input.value == 0) {
//             search_results.style.display = "none";
//         } else {
//             search_results.style.display = "";
//         }

//     }
// })


// Нормальный поиск по сайту
const search = document.querySelector(".search-music");
const searchItems = document.querySelectorAll(".songItem");

search.addEventListener("input",  (event)=> {
    const serchText = event.currentTarget.value.toLowerCase();
    if(serchText === "") {
        searchItems.forEach((songBlock) => {
                songBlock.style.display = "";
        });
        return;
    }

    
    searchItems.forEach((songBlock) => {
        const title = songBlock.children[2].innerText.split("\n")[0].toLowerCase();
        console.log("title: " + title);
        console.log("serchText: " + serchText);
        if(!title.includes(serchText)) {
            songBlock.style.display = "none";
        } else {
            songBlock.style.display = "";
        }
    });
});
// search data end


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})

const makeAllplay = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background ="rgb(105, 105, 105, .0)";
    })
}



let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
// let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
let subtitle = document.querySelector('.subtitle');


Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `${songs[index-1].poster}`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        // download_music.href = `audio/${index}.mp3`; 

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            // download_music.setAttribute('download', songName);
        });
        
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})



let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerHTML = `${min1}:${sec1}`;
    if(currentEnd.innerHTML === "NaN:NaN") {
        currentEnd.innerHTML = "00:00";
    }
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerHTML = `${min2}:${sec2}`;



    let progressBar = parseInt((music_curr / music_dur) * 100);
    let seekbar = progressBar;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width= `${vol_a}%`;
    vol_dot.style.left= `${vol_a}%`;
    music.volume = vol_a / 100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', (el)=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `${songs[index-1].poster}`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });
    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

    wave.classList.add('active1');
    changePlayToPause();
})



next.addEventListener('click', (el)=>{
    
    index ++;
    
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `${songs[index-1].poster}`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });
    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1'); 
    changePlayToPause();
})

function changePlayToPause() {
    const allSongs = document.querySelectorAll(".songItem");
    allSongs.forEach(song => {
        if(song.style.background ==="rgba(105, 105, 105, 0.1)") {
            song.children[3].classList.remove("bi-play-circle-fill");
            song.children[3].classList.add("bi-pause-circle-fill");
        }
    });
}






let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
// pop_song_right.addEventListener('click', ()=>{
//     pop_song.scrollLeft += 330;
// });
// pop_song_left.addEventListener('click', ()=>{
//     pop_song.scrollLeft -= 330;
// });

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

// pop_art_right.addEventListener('click', ()=>{
//     Artists_bx.scrollLeft += 330;
// });
// pop_art_left.addEventListener('click', ()=>{
//     Artists_bx.scrollLeft -= 330;
// });

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
    changePlayToPause();
});





const next_music = (el) =>{
    console.log("Функция");
    if (index == songs.length) {
        index = 1;
    } else {
        index++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `${songs[index-1].poster}`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        console.log(elss)
        let {songName} = elss;
        title.innerHTML = songName;
        // download_music.setAttribute('download', songName);
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplay();
    // el.target.classList.remove('bi-play-circle-fill');
    // el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    changePlayToPause();
}

const repeat_music = () =>{
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `${songs[index-1].poster}`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        // download_music.setAttribute('download', songName);
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplay();
    // el.target.classList.remove('bi-play-circle-fill');
    // el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    changePlayToPause();
}

const random_music = () =>{
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `${songs[index-1].poster}`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        // download_music.setAttribute('download', songName);
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplay();
    // el.target.classList.remove('bi-play-circle-fill');
    // el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    changePlayToPause();
}

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;


    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
    
})

// 
