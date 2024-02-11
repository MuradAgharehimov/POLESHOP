const div = document.getElementById("productList")
let db = [];

async function  getProduct () {
    const response = await axios.get("https://65675cba64fcff8d73103f34.mockapi.io/xpolee")
    const data = response.data
    db=data
    data.forEach(item =>{
        if(item.count === undefined){
            item.count = 1
        }
        const box = document.createElement("div")
        box.className='boxDiv col-xl-3 col-md-6 col-sm-12 col-12'
        box.innerHTML=`
        <img src="${item.image}" alt="">
        <p class="title">${item.title}</p>
        <p class="price">${item.price}</p>
        <div class="buttonx">
        <button onclick="addTobasket (${item.id})"><i class="fa-solid fa-basket-shopping"></i></button>
        <button onclick="addToheart (${item.id})"><i class="fa-regular fa-heart"></i></button>
        </div>
        `
        div.appendChild(box)
    })
}

function addTobasket(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productItem = cart.find(item => item.id == index)
    if(productItem) {
        productItem.count = (productItem.count || 1) + 1
    } else {
        cart.push(db.find((item) => item.id == index));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}
function addToheart(index) {
    let heart = JSON.parse(localStorage.getItem("heart")) || [];
    let productItem = heart.find(item => item.id == index)

    if(productItem){
        alert('Var!')
    }else {
        heart.push(db.find((item) => item.id == index));
        localStorage.setItem("heart", JSON.stringify(heart));
    }

}

window.onload=() =>{
    getProduct()
}






