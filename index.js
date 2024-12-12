import { catsData } from "./data.js"


const emotionsRadio = document.getElementById('emotion-radios')



function getEmotionsArray(cats){
    const emoList = []

    for (let cat of cats){
        // console.log(cat)
        for (let emotion of cat.emotionTags){
            emoList.push(emotion)
        }
    }
    // console.log(emoList)
    return emoList
    
}


// console.log(getEmotionsArray(catsData))

function renderEmotionsRadios(cats) {
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    
    for (let emotion of emotions) {




        
        // radioItems += `<p>${emotion}</p>`
        radioItems += `
        <div class="radio">
            <label for=${emotion}>${emotion}</label>
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