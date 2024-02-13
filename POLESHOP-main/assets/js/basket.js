const div = document.getElementById('productsListx')

function getProducts () {
    div.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cart);
    cart.map((item,index )=> {
        const box = document.createElement('div')
        box.className = "boxDivx col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12";
        box.innerHTML =`
        
        
        
        <img src="${item.image}" alt="">
        <p class="title">${item.title}</p>
        <p class="price">${item.price}</p>
        <p class="count">${item.count}</p>
        <button onclick="removeItem(${index})">Remove from cart</button>

        `
        div.appendChild(box)
    })
}

function removeItem (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}


   getProducts()