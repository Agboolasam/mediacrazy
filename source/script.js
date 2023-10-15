let randomImg = document.getElementById('randomimg');
const img1 = "/images/avatar.jpg";
const img2 = "/images/dora.jpg";
const img3 = "/images/shazam.jpg";
const img4 = "/ images / photo_2_2023 - 10 - 05 _19 - 52 - 01. jpg"

let img = [img1, img2, img3];

function makeRandome() {
    let imgUrl = img[Math.floor(Math.random() * img.length)];
    return imgUrl;

}
async function getRandomImg() {
    source = await makeRandome();
    randomImg.src = source;

}