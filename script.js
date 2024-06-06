let proC = document.getElementById('pro-c') ;
proC.style.display = 'block';
const colorconst = '2977F6';
// logo Variables
let spanLogo = document.getElementById('span');
let hh = document.getElementById('hh');
let logoMood = 'sapn';
// show all Variables
let showMood = 'show';
let hab = document.querySelector('.hab');
let showLll = document.getElementById('showAll'); 

// delet Variables
let r1 = document.querySelector('.r1');
let r2 = document.querySelector('.r2');
let r3 = document.querySelector('.r3');
let r4 = document.querySelector('.r4');
let r5 = document.querySelector('.r5');
let r6 = document.querySelector('.r6');
let r7 = document.querySelector('.r7');
let r8 = document.querySelector('.r8');
let r9 = document.querySelector('.r9');
let r10 = document.querySelector('.r10');

// nav Variables
let home = document.getElementById ('home');
let book = document.getElementById ('book');
let videos = document.getElementById ('videos');
let friends = document.getElementById ('friends');
let n1 = document.getElementById ('n4');
let n2 = document.getElementById ('n3');
let n3 = document.getElementById ('n2');
let n4 = document.getElementById ('n1');

// show more Variables
let showAlot = document.getElementById ('showAlot');
let showAlotMood = 'show';
let nee = document.getElementById ('nee');
let spanS = document.getElementById ('spanS');

// logo
 function logo() {
  if (logoMood == 'span') {
spanLogo.style = `font-weight: 350;
color: #333;
  transition: 0.8s;
  font-size: 30px;
  background:#fff;
  `;
hh.style = `background: #2977F6;
  padding: 5px;
  border-radius: 7px;
  font-weight: 450;
  color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
`;
logoMood = 'h1';
  }
  else {
hh.style = `font - weight: 350;
color: #333;
  transition: 0.8s;
  font-size: 30px;
  margin: 3px;`;
spanLogo.style = `background: #2977F6;
  padding: 5px;
  border-radius: 7px;
  font-weight: 450;
  color: # f1f1f1;
transition: 0.8 s;
font - size: 30 px;background: #2977F6;
`;
logoMood = 'span';
  }
}

// show and hidden 
function show(name,heght,allm) {
  name.style = `
  height:  ${heght}${allm};
overflow-y: hidden;
  `
}
function hidden(name,heght,allm) {
  name.style = `
  height:  ${heght}${allm};
overflow-y: hidden;
  `
}

// showAll
showLll.onclick = function() {
if (showMood == 'show') {
  show(hab,100,'%');
  showLll.innerHTML = 'Hidden';
  showMood = 'hidden';
}
else {
hidden(hab,140,'px');
showLll.innerHTML = 'Show All';
showMood = 'show';
} 

}

// delet
function delet(r) {
  r.style = `
  display:none;
  `
}

// nav 
 function nav(num1,num2,num3,num4) {
  num1.style = `
font-size: 30px;
padding: 20px 30px;
color: #777;
  margin-left: 10px;
  transition: 0.3s;
  border-bottom: 2.5px #2977F6 solid ;
  color: #2977F6;
  `;
  num2.style = `font-size: 30px;
padding: 20px 30px;
color: #777;
  margin-left: 10px;
  transition: 0.3s;`;
  num3.style = `font-size: 30px;
padding: 20px 30px;
color: #777;
  margin-left: 10px;
  transition: 0.3s;`;
  num4.style = `font-size: 30px;
padding: 20px 30px;
color: #777;
  margin-left: 10px;
  transition: 0.3s;`;
}
function disNav(e1,e2,e3,e4) {
  e1.style = `
  margin-top :76.6px;
  `
    e2.style = `
  display:none;
  `
    e3.style = `
  display:none;
  `
    e4.style = `
  display:none;
  `
}
window.onload = function () {
  nav(n1, n2, n3, n4);
  disNav(home, book, friends, videos);
  
likeMood = 'like';
}

n1.onclick = function () {
  nav(n1,n2,n3,n4);
  disNav(home,book,friends,videos);
  window.scrollTo({
  top: 0,
  behavior: "smooth",
});
}
n2.onclick = function () {
  nav(n2,n1,n3,n4);
  disNav(friends,book,home,videos);

}
n3.onclick = function () {
  nav(n3,n2,n1,n4);
  disNav(videos,book,home,friends);
}
n4.onclick = function() {
  nav(n4, n2, n3, n1);
  disNav(book,videos,home,friends);
}
let spanSs = document.querySelector('spanS');
// showMore
showAlot.onclick = function () {
  if (showAlotMood == 'show') {
        pS.innerHTML = 'show less'
    
    show(nee,1119.9,'px');
    showAlotMood = 'hidden';
  }
  else {
        pS.innerHTML = 'show more'
   hidden(nee,690,'px');
   showAlotMood = 'show';

  }
}

var likeMood = 'like';

function likee(i) {
  if (likeMood == 'like') {
post[i].likes= ++likePosttt;
    likeMood = 'dis';
    let numfavet = i; 
          }
  else {
   post[i].likes= --likePosttt;
likeMood = 'like';

  }
  localStorage.postN = JSON.stringify(post);
  showPost();
  
}
//post 
// save body post
let post = [];
if (localStorage.getItem('postN') !== null) {
  post = JSON.parse(localStorage.getItem('postN'));
}
let likePosttt = 1;
let narInp = document.getElementById('narInp');
let nameInput = prompt('name') || "unknown";
let uploadbtn = document.getElementById('upload') ;
uploadbtn.onclick = function (){
  if (narInp && narInp.value.trim() !== '') {
    let newPost = {
      bodyPost: narInp.value,
      name: nameInput,
     likes:likePosttt = 1,
    };
    post.push(newPost);
    localStorage.setItem('postN', JSON.stringify(post));
    clearInput();
    showPost();
    
  } else {
    alertt('Element with id "narInp" not found or input value is empty.',"red");
  }
}
// Clear inputs
function clearInput() {
  if (narInp) {
    narInp.value = '';
  }
}
let iii; 
let iiii;

// Show posts

function showPost() {
    let postn = '';
  for (let i = post.length - 1; i >= 0; i--) {
    postn += `

      <div class="nasher post">
        <div class="pro-post">
          <p>${post[i].name}</p>
          <img class="pro-c" src="pro1.jpeg" alt="">
        </div>
        <div class="post-info">
          <p>${post[i].bodyPost}</p>
        </div>
        <div class="upload like">
                            <button id="deleteee"class="likee deleteee"onclick="deletPostt(${i})" >
            <p>delete</p>
            <span id="spanS" class="material-symbols-outlined">
            delete 
            </span>
          </button>
          </div>
        <div class="upload like"onclick = "likee(${i})" >
          <button  id="like" class="likee lookos "   >
            <p id="lnn" >${post[i].likes}</p>
            <span id="spanSs" class="material-symbols-outlined spanS" ">
            thumb_up
            </span>
          
          </button>
          </div>
      </div>
    `;
    
  }
  likePostt = postn;
  
  document.getElementById('posts').innerHTML = postn;
}

showPost()
function deletPostt(i) {
  let passwordDelete = prompt('enter password delete')
if (passwordDelete == 'GPT') {
  alertt('done✅✔✅✔','#31FF4B');
  post.splice(i);localStorage.postN = JSON.stringify(post);
  showPost()
  console.log(i)
}
  else {
    alertt('اعتذر يا مستخدم يمكن لل مطور فقط حذف اي منشور.لكن ان كنت تريد ان تحذف اي منشو كلمي علي الوتس علي الرقم ده { 01501480908 }.','red')
  }
}

// Variables dark mood
let infoAlert = document.querySelector('.info-alert');
let alerte = document.getElementById('alertt');
let pMoodWeb = document.querySelector('.pMoodWeb');
let buttonMoodWeb = document.querySelector('.buttonMoodWeb');
let header = document.querySelector('.header');
let searchIcon = document.querySelector('.search-icon');
let seach = document.getElementById('seach');
let logoe = document.querySelector('.logo');
let naveev = document.querySelector('.naveev');
let pi = document.querySelector('.pi');
let pp = document.querySelector('.pp');
let nasher = document.querySelector('.nasher');
let containerq = document.querySelector('.containerq');
let infoo = document.querySelector('.infoo');
let infooo = document.querySelector('.infooo');
let infoooo = document.querySelector('.infoooo');
let bbh = document.querySelector('.bbh');
let bbbh = document.querySelector('.bbbh');
let bbbbh = document.querySelector('.bbbbh');
let w = document.querySelector('.w');
let shoog = document.querySelector('.shoog');
let rrt = document.querySelector('.rrt');
let rrrt = document.querySelector('.rrrt');
let box = document.querySelector('.box');
let rrrtf = document.querySelector('.rrrtf');
let rrrrt = document.querySelector('.rrrrt');
let rrrrrt = document.querySelector('.rrrrrt');
let body = document.querySelector('.body');
let loding = document.querySelector('.over-lay');
let webMood = 'dark';
let darMood = 'dark';

function darLigh() {
  if (darMood == 'dark') {
    darkk();
    webMood = 'light';
     buttonMoodWeb.innerHTML = 'light_mode';
    pMoodWeb.innerHTML = 'Light Mood';
webMood = 'light';
darMood = 'daork';
  }
  else {
    lightt();
webMood = 'dark';
buttonMoodWeb.innerHTML = 'dark_mode';
pMoodWeb.innerHTML = 'dark Mood';
webMood = 'dark';
darMood = 'dark';
  }
}
darLigh()
// dark mood
function darkk() {
  
  infoAlert.style = `background :#444;`;
  box.style = `background :#111;`;
  body.style = `background:#333;`;
  shoog.onclick = function () {
   shoog.style=` color:#8167FF;`
   if (showMood == 'show') {
  show(hab,100,'%');
  showLll.innerHTML = 'Hidden';
  showMood = 'hidden';
}
else {
hidden(hab,140,'px');
showLll.innerHTML = 'Show All';
showMood = 'show';
} 

  }
  w.style =`color:#B6B6B6;`;
  bbh.style =`color:#B6B6B6;`;
  bbbh.style =`color:#B6B6B6;`;
  bbbbh.style =`color:#B6B6B6;`;
  infoo.style = `color:#D5D5D5;`;
  infooo.style = `color:#D5D5D5;`;
infoooo.style = `color:#D5D5D5;`;
  containerq.style = `background :#333;
  color:#D5D5D5;
  `
  rrrtf.style = `background :#333;
  color:#fff;
  `
  rrt.style = `background :#222;
  color:#fff;
  `
  rrrt.style = `background :#222;
  color:#fff;
  `
  rrrrt.style = `background :#222;
  color:#fff;
  `
  rrrrrt.style = `background :#222;
  color:#fff;
  `
  header.style = `
  background :#222;
  `;
  hh.style = `
color:#f1f1f1;
transition: 0.8s;
font-size: 30px;
background: #222;
  `;
  spanLogo.style = `
  background: #236DE5;
  padding: 5px;
  border-radius: 7px;
  font-weight: 450;
  color: #f1f1f1;
transition: 0.8s;
font-size: 30 px;
  background: #236DE5;
  `;
    seach.style = `
    outline-color:#236DE5 ;
  color: #f1f1f1;
  background: #111;
  `;
  searchIcon.style = `
    border: 1px #f9f9f9 solid;
  color: #f7f7f7;
  background: #111;
  `;
  searchIcon.style = `
    border: 1px #f9f9f9 solid;
  color: #f7f7f7;
  background: #111;
  `;
  searchIcon.onclick = function() {
    // Tab to edit
   searchIcon.style = `background: #777;
color: #fff;`
  }
  logoe.onclick = function () {
    if (logoMood == 'span') {
  spanLogo.style = `font-weight: 350;
color: #f1f1f1;
  transition: 0.8s;
  font-size: 30px;
  background:#222;
  `;
  hh.style = `background: #2977F6;
  padding: 5px;
  border-radius: 7px;
  font-weight: 450;
  color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
`;
  logoMood = 'h1';
  
}
else {
  hh.style = `font-weight: 350;
color: #f1f1f1;
  transition: 0.8s;
  font-size: 30px;
  margin: 3px;
  background: #222;`;
  spanLogo.style = `
  padding: 5px;
  border-radius: 7px;
  font-weight: 450;
  color: #f1f1f1;
transition: 0.8s;
font-size: 30px;background: #236DE5;
`;
  logoMood = 'span';
}
  }
  pi.style = `
  color: #999;
  background: #555;
  `;
  pp.style = `
  color: #999;
  background: #555;
  `;
  }
function lightt() {
  rrt.style = `background :#f0f0f0;
  color:#fff;
  `
rrrt.style = `background :#f0f0f;
  color:#fff;
  `
rrrrt.style = `background :#f0f0f;
  color:#fff;
  `
rrrrrt.style = `background :#f0f0f;
  color:#fff;
  `
  shoog.onclick = function() {
  shoog.style = ` color:#092AB5;`
  if (showMood == 'show') {
    show(hab, 100, '%');
    showLll.innerHTML = 'Hidden';
    showMood = 'hidden';
  }
  else {
    hidden(hab, 140, 'px');
    showLll.innerHTML = 'Show All';
    showMood = 'show';
  }

}
  bbh.style = `color:#9C9C9C;`;
bbbh.style = `color:#9C9C9C;`;
bbbbh.style = `color:#9C9C9C;`;
  w.style =`color:#9C9C9C;`;
  infoo.style = `color:#000;`;
infooo.style = `color:#000;`;
infoooo.style = `color:#000;`;
  containerq.style = `background :#f1f1f;
  color:#000;
  `
  rrrtf.style = `background :#f1f1f;
  color:#000;
  `
  header.style = `
  background :#fff;
  `;
  hh.style = `
  color: #333;
  `;
  spanLogo.style = `
  color: #f1f1f1;
  background: #2977F6;
  `;
  seach.style = `
    outline-color:#2977F6 ;
  color: #888;
  `;
searchIcon.style = `
    border: 1px #888 solid;
  color: #888;
  background: #f5f5f5;
  `;
  searchIcon.onclick = function() {
  // Tab to edit
  searchIcon.style = `background: #f9f9f9;
color: #555;`
}
logoe.onclick = function() {
  if (logoMood == 'span') {
    spanLogo.style = `font-weight: 350;
color: #333;
  transition: 0.8s;
  font-size: 30px;
  background:#fff;
  `;
    hh.style = `background: #2977F6;
  padding: 5px;
  border-radius: 7px;
  font-weight: 450;
  color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
`;
    logoMood = 'h1';
  }
  else {
    hh.style = `font - weight: 350;
color: #333;
  transition: 0.8s;
  font-size: 30px;
  margin: 3px;`;
    spanLogo.style = `background: #2977F6;
  padding: 5px;
  border-radius: 7px;
  font-weight: 450;
  color: # f1f1f1;
transition: 0.8 s;
font - size: 30 px;background: #2977F6;
`;
    logoMood = 'span';
  }
}
pi.style = `
  color: #444;
  background: #DCDCDC;
  `;
pp.style = `
  color: #444;
  background: #DCDCDC;
  `;
  box.style = `background :#fff;`;  body.style = `background :#f1f1f1;`;infoAlert.style = `background :#f0f0f;`;
}
function darkMood() {
  if (webMood === 'dark') {
    darkk()
    pi.innerHTML = 'light_mode';
    buttonMoodWeb.innerHTML = 'light_mode';
    pMoodWeb.innerHTML = 'Light Mood';
    webMood = 'light';
  }
  else {
    pi.innerHTML = 'dark_mode';
    lightt()
    buttonMoodWeb.innerHTML = 'dark_mode';
pMoodWeb.innerHTML = 'Dark Mood';
webMood = 'Dark';
  }
}
function toPlasten() {
  let numForPlasten = prompt('اكتب اول تالت ارقام من علي الشمال ');
  if (numForPlasten === '729' || numForPlasten === '841' || numForPlasten === '871' || numForPlasten === '729 ' || numForPlasten === '841 ' || numForPlasten === '871 ') {
    alertt('🇮🇱🇮🇱مقاطعه🇮🇱🇮🇱','red');
  }

  else {
    alertt('🇵🇸🇵🇸 المنتج ليس من قائمة المقاطعه 🇵🇸🇵🇸','#31FF4B')
  }
}
let infoAlertt = document.getElementById('infoAlertt');
function gg() {
  alerte.style = `display :none;`;
}
function alertt(msg,color) {
  alerte.style = `display :flex;`;
  infoAlertt.innerHTML = msg;
  infoAlertt.style = `color :${color};`
}

window.addEventListener('load', function() {
  setTimeout(function() {
    loding.style.transition = 'opacity 1s'; 
    loding.style.opacity = '0'; 
    setTimeout(function() {
            loding.style.display = 'none'; 
            body.style.overflow = 'auto';
          }, 2000); 
  },0); 
});