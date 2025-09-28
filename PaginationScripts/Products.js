import { GetData } from './API.js';

export const ProductContainer = document.querySelector(".products-display");
export let totalPages;

export async function DrawProducts(products) {
    try{
        ProductContainer.innerHTML="";
        for(let i of products.data){
            let product = 
            `
            <div class="product-container" id=${i.id}>
                <img src="${i.cover_image}" alt="product-img" class="fetched-product-img">
                <div class="product-details-container">
                    <div class="product-title-container">${i.name}</div>
                    <div class="product-price-container">$ ${i.price}</div>
                </div>
            </div>
            `;
            ProductContainer.innerHTML+=product;
        }

        let x = products.links.last;
        let y = new URL(x);
        totalPages = parseInt(y.searchParams.get("page"));
        //console.log(totalPages)
    }
    catch(err){
        console.log(err);
    }
}


export async function CheckProductUnit(){
    if(document.querySelector(".products-display").children.length>0){
        document.querySelectorAll(".product-container").forEach(element=>{
            element.addEventListener("click",async(e)=>{
                window.location.href="Product-Page.html"
                sessionStorage.setItem("ProductId",JSON.stringify(e.target.parentElement.id))
            })
        });
    }
}