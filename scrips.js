document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productsContainer = document.getElementById('productsContainer');

    productForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productImage = document.getElementById('productImage').value;
        
        if (productName && productPrice && productImage) {
            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            addProductToDOM(product);
            productForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    function addProductToDOM(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
            </div>
            <button class="delete-button">Eliminar</button>
        `;

        const deleteButton = productCard.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            productsContainer.removeChild(productCard);
        });

        productsContainer.appendChild(productCard);
    }
});
