const FilterDisplay = document.querySelector(".filter-container-text");
const AdjustmentImg = document.querySelector(".adjustments");

FilterDisplay.addEventListener("click",(e)=>{
    e.preventDefault();
    let FilterContainer = document.querySelector(".price-selection-container");
    let OtherFilterContainer = document.querySelector(".another-filtering-options-container");

    if(FilterContainer.style.visibility=='hidden'){
        FilterContainer.style.visibility='visible';
        if(OtherFilterContainer.style.visibility=='visible'){
            OtherFilterContainer.style.visibility='hidden';
        }
    }
    else if(FilterContainer.style.visibility=='visible'){
        FilterContainer.style.visibility='hidden';
    }
})

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


const OtherOptions = document.querySelector(".sortby-container-text");
const ChevronImg = document.querySelector(".chevron");

OtherOptions.addEventListener("click",()=>{
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

const PriceSelectionForm = document.querySelector(".min-max-price-form");
PriceSelectionForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData = new FormData(e.target);
    let min_price = formData.get("price_from");
    let max_price = formData.get("price_to");

    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }

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
            <div class="price-tag">Price:${min_price}-${max_price}</div>
            <img src="images/x-mark.png" alt="x" class="delete-price-tag-btn">
        </div>
        `;
        PriceTagContainer.innerHTML+=newtag;
        DeletePriceTag();
    }
})

function DeletePriceTag(){
    const FilterCategoryDeleteBtn = document.querySelector(".delete-price-tag-btn");
    FilterCategoryDeleteBtn.addEventListener("click",()=>{
        const Parent = document.querySelector(".filter-categories");
        Parent.innerHTML="";
    })
}
