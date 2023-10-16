let randomImg = document.getElementById('randomimg');
const imgNavIcon = document.getElementsByTagName('i');
const img1 = "/images/avatar.jpg";
const img2 = "/images/dora.jpg";
const img3 = "/images/shazam.jpg";
const img4 = "/images/quantumania.jpg"

let img = [img1, img2, img3, img4];

function makeRandome() {
    let oldUrl = document.getElementById('randomimg').src;
    console.log(oldUrl);
    let imgUrl = img[Math.floor(Math.random() * img.length)];
    randomImg.src = imgUrl;
}

//console.log(img.indexOf(imgUrl));


async function getRandomImg() {
    await makeRandome();
}
setInterval(
    () => {
        makeRandome();

    }, 5000);