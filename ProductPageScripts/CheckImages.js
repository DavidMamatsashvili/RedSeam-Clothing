export async function CheckImages(){
    document.querySelectorAll(".product-image-item").forEach((element,index)=>{
        element.addEventListener("click",async()=>{
            document.querySelectorAll(".color-circle").forEach(other=>{
                if(other.querySelector("input").checked==true){
                    other.querySelector("input").removeAttribute("checked")
                }
                other.classList.remove("circle-bg-after");
            })
            document.querySelectorAll(".product-image-item").forEach(other2=>{
                if(other2.style.border=="1px solid"){
                    other2.style.border="";
                }
            })
            element.style.border="1px solid";
            document.querySelectorAll(".color-circle")[index].querySelector("input").setAttribute("checked","true");
            document.querySelectorAll(".color-circle")[index].classList.add("circle-bg-after");
        })
    })
}