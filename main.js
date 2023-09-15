// select elements

const productsEl = document.querySelector('.product-container');


// Render Products

function renderProducts(){
    products.forEach((product) => {
        productsEl.innerHTML += `
        <div class="product">
                <img src="${product.imgSrc}" alt="Produkt 1">
                <h2>${product.name}</h2>
                <p>Eine wirkliche schmackhafte Kirsche macht doch jeden glücklich.</p>
                <p>${product.price} € / kg</p>
                <div class="button-wrapper">
                    <button>Hinzufügen</button>
                </div>
            </div>
        
        `

    })
}
renderProducts();