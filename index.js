import { catsData } from "./data.js"


const emotionsRadio = document.getElementById('emotion-radios')
const getImgBtn = document.getElementById('get-image-btn')
const animatedGifChoice = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')


getImgBtn.addEventListener('click' , renderCat)


memeModalCloseBtn.addEventListener('click' , function(){
    memeModal.style.display = 'none'
})


function getMatchingCatsArray(){
    if(document.querySelector('input[type="radio"]:checked')){
        const checkedRadio = document.querySelector('input[type="radio"]:checked').value
        const isGif = animatedGifChoice.checked
        // console.log(isGif)
        // console.log(checkedRadio)
        const matchingCatsArray = catsData.filter(function(emotion){
            if (isGif) {
                return emotion.emotionTags.includes(checkedRadio) && emotion.isGif
            } else {
                return emotion.emotionTags.includes(checkedRadio)
            }
        })
        return matchingCatsArray
    }

}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    
    if (catsArray.length === 1) {
        return (catsArray[0])
    } else {
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return (catsArray[randomNumber])
    }
}
function renderCat(){
    const catObject = getSingleCatObject()
    console.log(catObject)

    memeModalInner.innerHTML = `
    <img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
    >
    `
    memeModal.style.display = "flex"
}




emotionsRadio.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
    const radioArray = document.getElementsByClassName('radio')
    for (let radio of radioArray) {
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getEmotionsArray(cats){
    const emoList = []

    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emoList.includes(emotion)) {
                emoList.push(emotion)  
            } 
        }
    }            // console.log(emoList)
    return emoList 
}

function renderEmotionsRadios(cats) {
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    
    for (let emotion of emotions) {
         // radioItems += `<p>${emotion}</p>`
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
                <input
                type="radio"
                id=${emotion}
                value=${emotion}
                name="emotions"
            >
        </div>
        `

    }
    
    emotionsRadio.innerHTML = radioItems




}

renderEmotionsRadios(catsData)