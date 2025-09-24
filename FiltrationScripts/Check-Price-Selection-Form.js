import { DeletePriceTag } from "./Delete-Price-Tag.js";

export async function CheckPriceSelectionForm(){
    const PriceSelectionForm = document.querySelector(".min-max-price-form");
    PriceSelectionForm.addEventListener("submit",async(e)=>{
        e.preventDefault();
        let formData = new FormData(e.target);
        let min_price = formData.get("price_from");
        let max_price = formData.get("price_to");

        // for (const [key, value] of formData.entries()) {
        //     console.log(key, value);
        // }

        const PriceTagContainer = document.querySelector(".filter-categories");
        if(PriceTagContainer.children.length==0){
            let newtag = 
            `
            <div class="min-max-price-category-container">
                <div class="price-tag">Price:${min_price}-${max_price}</div>
                <img src="images/x-mark.png" alt="x" class="delete-price-tag-btn">
            </div>
            `;
            PriceTagContainer.innerHTML+=newtag;
            DeletePriceTag();
        }
        else{
            PriceTagContainer.innerHTML="";
            let newtag = 
            `
            <div class="min-max-price-category-container">
                <div class="price-tag">Price:  ${min_price}-${max_price}</div>
                <img src="images/x-mark.png" alt="x" class="delete-price-tag-btn">
            </div>
            `;
            PriceTagContainer.innerHTML+=newtag;
            DeletePriceTag();
        }
    })
}