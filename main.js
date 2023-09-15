// select elements

const productsEl = document.querySelector('.product-container');


// Render Products

function renderProducts(){
    products.forEach((product) => {
        productsEl.innerHTML = `
        <div class="product">
                <img src="./src/img/cherry.jpg" alt="Produkt 1">
                <h2>Kirsche</h2>
                <p>Eine wirkliche schmackhafte Kirsche macht doch jeden glücklich.</p>
                <div class="button-wrapper">
                    <button>Hinzufügen</button>
                </div>
            </div>
        
        `

    })
}