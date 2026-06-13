const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const title = document.getElementById("title");
const message = document.getElementById("message");
const catImage = document.getElementById("catImage");

let yesScale = 1;

const pages = [

{
title:"I'm Soooo Sorry 🥺",
msg:"I never wanted to hurt you 😭❤️",
img:"assets/cat2.gif"
},

{
title:"Please Forgive Me ❤️",
msg:"You mean so much to me 🥺💕",
img:"assets/cat3.gif"
},

{
title:"One More Chance 😭",
msg:"I promise I'll be better ❤️",
img:"assets/cat1.gif"
},

{
title:"Pleaseeeee ❤️",
msg:"Don't stay angry 🥺",
img:"assets/cat2.gif"
},

{
title:"I Love You ❤️",
msg:"You're really special to me 💕",
img:"assets/cat3.gif"
}

];

let current = 0;

noBtn.addEventListener("mouseover",()=>{

const x = Math.random()*250;
const y = Math.random()*80;

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

yesScale += 0.15;

yesBtn.style.transform =
`scale(${yesScale})`;

if(current < pages.length){

title.innerText =
pages[current].title;

message.innerText =
pages[current].msg;

catImage.src =
pages[current].img;

current++;
}

});

yesBtn.addEventListener("click",()=>{

document.querySelector(".container").innerHTML = `

<img src="assets/cat3.gif"
style="width:250px;border-radius:20px;">

<h1 style="color:#ff2d75;">
YAYYYYYY ❤️🎉
</h1>

<p style="font-size:22px;">
Thank Youuuuuu 🥺💕
<br><br>
You Forgave Me 😭❤️
<br><br>
You're The Best ❤️
</p>

`;

startCelebration();

});

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

const emojis = [
"❤️","💕","💖","💗","💘","💞"
];

heart.innerHTML =
emojis[
Math.floor(Math.random()*emojis.length)
];

heart.style.left =
Math.random()*100 + "vw";

heart.style.animationDuration =
(Math.random()*3 + 3) + "s";

heart.style.fontSize =
(Math.random()*20 + 20) + "px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,250);

function startCelebration(){

for(let i=0;i<100;i++){

setTimeout(()=>{

const emoji =
document.createElement("div");

emoji.innerHTML="🎉";

emoji.style.position="absolute";

emoji.style.left=
Math.random()*100+"vw";

emoji.style.top="-50px";

emoji.style.fontSize="35px";

document.body.appendChild(emoji);

emoji.animate(
[
{transform:"translateY(0)"},
{transform:"translateY(100vh)"}
],
{
duration:3000
}
);

setTimeout(()=>{
emoji.remove();
},3000);

},i*40);

}

}