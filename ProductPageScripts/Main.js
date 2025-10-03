import { DrawColors } from "./DrawColors.js";
import { DrawImages } from "./DrawImages.js";
import { DrawQuantity } from "./DrawQuantity.js";
import { DrawSizes } from "./DrawSizes.js";
import { GetData } from "./GetDataOnProductPage.js";
import { ProductDescription } from "./ProductDrescription.js";
import { CheckLogo } from "./CheckLogo.js";
import { CheckImages } from "./CheckImages.js";
import { CheckCircles } from "./CheckCircles.js";
import { CheckShoppingCart } from "./ShoppingCart.js";

async function init(){
    let id = JSON.parse(sessionStorage.getItem("ProductId"));
    let data = await GetData(id);
    document.querySelector(".product-title").innerText=data.name;
    document.querySelector(".product-price").innerText=`$ ${data.price}`;
    await DrawColors(data);
    await DrawSizes(data);
    await DrawQuantity(data);
    await ProductDescription(data);
    await DrawImages(data);
    await CheckLogo();
    await CheckCircles(data);
    await CheckImages();
    await CheckShoppingCart();
}

init()