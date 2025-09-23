export async function CheckChevronImg(){
    const ChevronImg = document.querySelector(".chevron");
    ChevronImg.addEventListener("click",()=>{
        let OtherFilterContainer = document.querySelector(".another-filtering-options-container");
        let FilterContainer = document.querySelector(".price-selection-container");

        if(OtherFilterContainer.style.visibility=='hidden'){
            OtherFilterContainer.style.visibility='visible';
            if(FilterContainer.style.visibility=='visible'){
                FilterContainer.style.visibility='hidden'
            }
        }
        else{
            OtherFilterContainer.style.visibility='hidden'
        }
    })
}