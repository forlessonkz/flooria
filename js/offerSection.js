import offerSectionData from "../helpers/offerSectionsData.js";

function createCards(cardElement) {
    return (`
        <div class = 'offer__card'>
            <div class = 'card__top'>
                <a href = ${cardElement.link}>
                    <img class = 'card__image' src = ${cardElement.img} alt = ${cardElement.alt} />
                </a>
            </div>
            <div class = 'card__bottom'>
                <h1>${cardElement.title}</h1>
                <div class = 'icon'><span></span> &#9654;</div>
            </div>
        </div>
    `)
}


function renderCards(offers) {
    const offerList = document.getElementById('offer__list');

    offerList.innerHTML = offers.map(offer => createCards(offer)).join('')
}


document.addEventListener('DOMContentLoaded', () => {
    renderCards(offerSectionData)
})