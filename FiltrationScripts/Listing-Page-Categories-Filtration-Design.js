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


async function CheckFiltration(){
    const FilterDisplay = document.querySelector(".filter-container-text");
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
}

async function CheckAdjustmentImg(){
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

async function CheckOtherOptions(){
    const OtherOptions = document.querySelector(".sortby-container-text");
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
}

async function CheckChevronImg(){
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


