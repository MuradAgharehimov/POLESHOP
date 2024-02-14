const div = document.getElementById("productList");
let db = [];

async function getProduct() {
    const response = await axios.get("https://65675cba64fcff8d73103f34.mockapi.io/xpolee");
    const data = response.data;
    db = data;
    data.forEach(item => {
        if (item.count === undefined) {
            item.count = 1;
        }
        if (item.title.startsWith("Undawn")) { 
            const box = document.createElement("tr");
            box.className = 'boxDiv';
            box.innerHTML = `
                <td class="title">${item.title}</td>
                <td class="price">${item.price}</td>
                <td>0</td>
                <td>
                <button onclick="addTobasket(${item.id})">
                        <i class="fa-solid fa-basket-shopping"></i><span>Sifariş et</span>
                    </button>
                </td>
            `;
            div.appendChild(box);
        }
    });
}

function addTobasket(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productItem = cart.find(item => item.id == index);
    if (productItem) {
        productItem.count = (productItem.count || 1) + 1;
    } else {
        cart.push(db.find((item) => item.id == index));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

window.onload = () => {
    getProduct();
};




