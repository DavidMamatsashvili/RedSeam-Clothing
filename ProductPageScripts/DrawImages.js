export async function DrawImages(product){
    product.images.forEach((element,index)=>{
        let img = document.createElement("img");
        img.src=`${element}`;
        img.alt="image";
        img.classList.add("product-image-item");
        img.style.border=(index==0)?"1px solid":"";
        document.querySelector(".product-images-container").appendChild(img);
    })

    let mainimg = `<img src=${product.cover_image} alt="main_product" class="main-product-img">`
    document.querySelector(".product-main-image-container").innerHTML+=mainimg;

    document.querySelector(".brand_img").src=product.brand.image;

    document.querySelectorAll(".product-image-item").forEach((element,index)=>{
        element.addEventListener("click",async(e)=>{
            document.querySelector(".main-product-img").src=e.target.src;
        })
    })
}

