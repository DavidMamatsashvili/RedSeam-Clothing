export async function ProductDescription(product){
    document.querySelector(".brand").innerHTML=`<strong>Brand:</strong> ${product.brand.name}`;
    document.querySelector(".product-description-cont").innerText=`${product.description}`
}