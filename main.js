const URL = 'https://thatcopy.pw/catapi/rest/'
const catbtn = document.querySelector('#btn-cat')
const catImg = document.querySelector('#img-cat')

const getCats = async () => {

    try {
        const data = await fetch(URL);
        const json = await data.json();

        return json.webpurl;
    } catch (e) {
        console.log(e.message)
    }
    
};


const loadImg = async () => {
    catImg.src = await getCats();
}

catbtn.addEventListener('click', loadImg);

loadImg();