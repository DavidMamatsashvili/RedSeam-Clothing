export async function DrawSizes(products){
    products.available_sizes.forEach((element,index)=>{
        if(index==0){
            document.querySelector(".product-size-text").innerText=`Size ${element}`
            let obj = 
            `<label class="size-btn">
                <input type="radio" name="size" value="${element}" checked> ${element}
            </label>`
            document.querySelector(".product-size-container").innerHTML+=obj;
        }
        else{
            document.querySelector(".product-size-text").innerText=`Size ${element}`
            let obj = 
            `<label class="size-btn">
                <input type="radio" name="size" value="${element}"> ${element}
            </label>`
            document.querySelector(".product-size-container").innerHTML+=obj;
        }
    })
}