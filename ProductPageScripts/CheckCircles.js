export async function CheckCircles(product){
    document.querySelectorAll(".color-circle").forEach((element,index)=>{
        element.addEventListener("click",async()=>{
            document.querySelectorAll(".color-circle").forEach(outer=>{
                if(outer.querySelector("input").checked==true){
                    outer.querySelector("input").removeAttribute("checked");
                    outer.classList.remove("circle-bg-after");
                }
            })

            element.querySelector("input").setAttribute("checked","true");
            element.classList.add("circle-bg-after");
            document.querySelector(".product-main-image-container").innerHTML=`<img src=${product.images[index]} alt="main_product" class="main-product-img">`

            document.querySelectorAll(".product-image-item").forEach(other=>{
                if(other.style.border=="1px solid"){
                    other.style.border="";
                }
            })
            document.querySelectorAll(".product-image-item")[index].style.border="1px solid";
        })
    })
}