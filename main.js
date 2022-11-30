const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains("inactive");

    if (!isAsideClose){
        aside.classList.add("inactive");
    }
    

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains("inactive");

    if (!isAsideClose){
        aside.classList.add("inactive");
    }
    

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive");

    
    if (!isMobileMenuClose){
        mobileMenu.classList.add("inactive");
    }
    
    aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: "Hiland Bicicleta de montaña con ruedas de 29 pulgadas",
    price: 279,
    image: "https://m.media-amazon.com/images/I/71dtgqP+33L._AC_SL1500_.jpg",
});

productList.push({
    name: "Asus XG27VQ Rog Strix 27 LED 144 Hz Freesync Curvo",
    price: 175,
    image: "https://img.pccomponentes.com/articles/14/140468/1.jpg?_gl=1*1i0znbt*_ga*MTY3MDM1Nzc5NC4xNjY5Nzk5MDQ2*_ga_DJ03PRJ8R3*MTY2OTc5OTA0Ni4xLjAuMTY2OTc5OTA0Ni4wLjAuMA..",
});

productList.push({
    name: "Acer Predator Helios 300 PH315-54 Intel Core i7-11800H/16GB/1TB SSD/RTX 3070/15.6",
    price: 1299,
    image: "https://img.pccomponentes.com/articles/74/748784/2230-acer-predator-helios-300-ph315-54-intel-core-i7-11800h-16gb-1tb-ssd-rtx-3070-156-comprar.jpg",
});


function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo= document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv= document.createElement("div");
        
        const productPrice= document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName= document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure= document.createElement("figure");
        const productImgCart= document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);