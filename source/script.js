let randomImg = document.getElementById('randomimg');
const imgNavIcon = document.getElementsByTagName('i');
const img1 = "/images/avatar.jpg";
const img2 = "/images/dora.jpg";
const img3 = "/images/shazam.jpg";
const img4 = "/images/quantumania.jpg"

let img = [img1, img2, img3, img4];
let newImgSrc

function makeRandome() {
    let oldUrlSrc = document.getElementById('randomimg').src;

    console.log(oldUrlSrc);
    let imgUrl = img[Math.floor(Math.random() * img.length)];
    //console.log(img.indexOf(imgUrl));
    randomImg.src = imgUrl;
    newUrlSrc = randomImg.src;
    // console.log(newUrlSrc);
    if (oldUrlSrc === newUrlSrc) {

        console.log("same")
        let newIndex
        if (img.indexOf(imgUrl) < 3) {
            newIndex = img.indexOf(imgUrl) + 1;
            imgUrl = img[newIndex];
            randomImg.src = imgUrl;
            randomImg.style.display = "block";
            console.log(randomImg.src);
            // console.log(newIndex);

        } else {
            let newIndex1 = 0;
            imgUrl = img[newIndex1];
            randomImg.src = imgUrl;
            randomImg.style.display = "block";




        }
    } else {
        randomImg.src = imgUrl;
        randomImg.style.display = "block";

        console.log(randomImg.src);

    }

}

//console.log(img.indexOf(imgUrl));


async function getRandomImg() {
    const choosePicture = await makeRandome();
}
setInterval(
    () => {
        makeRandome();

    }, 5000);