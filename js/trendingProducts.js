import trendingProductsData from "../helpers/trendigProductsData.js";

function createCard(cardElement) {
    return(`
        <div class = 'card'>
            <div class = 'product__card__top'>
                <img src = ${cardElement.img} alt = ${cardElement.alt}/>
                <button>add to card</button>
            </div>
            <div class = 'products__card__bottom'>       
                <h5>${cardElement.title}</h5>
                <p>${cardElement.price}</p>
            </div>
        </div>
    `)
}



function renderCards(cards) {
    const productsList = document.getElementById('products__list');
    productsList.innerHTML = cards.map(card => createCard(card)).join('');
}


document.addEventListener('DOMContentLoaded', () => {
    renderCards(trendingProductsData)
})