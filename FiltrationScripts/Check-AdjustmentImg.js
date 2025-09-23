export async function CheckAdjustmentImg(){
    const AdjustmentImg = document.querySelector(".adjustments");
    AdjustmentImg.addEventListener("click",()=>{
        let FilterContainer = document.querySelector(".price-selection-container");
        let OtherFilterContainer = document.querySelector(".another-filtering-options-container");

        if(FilterContainer.style.visibility=='hidden'){
            FilterContainer.style.visibility='visible';
            if(OtherFilterContainer.style.visibility=='visible'){
                OtherFilterContainer.style.visibility='hidden';
            }
        }
        else{
            FilterContainer.style.visibility='hidden';
        }
    })
}