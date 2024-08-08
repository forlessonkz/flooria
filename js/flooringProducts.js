import flooringProductsData from "../helpers/flooringProductsData.js"

function createCard(cardEl){
    return(`
        <div class="flooring__products__card">
            <div class="bcg__changed">
           
            </div>      
            <div class="flooring__card__img"><img src=${cardEl.img} alt=""></div>
            <div class="flooring__card__title">
                <div class="flooring__card__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                </div>
                <h5>Project #${cardEl.title}</h5>
            </div>
        </div>
    `)
}

function renderCard(productsCards){
    const productsList = document.getElementById('flooring__products__list');
    productsList.innerHTML = productsCards.map(cardEl => createCard(cardEl)).join("");
}

renderCard(flooringProductsData)