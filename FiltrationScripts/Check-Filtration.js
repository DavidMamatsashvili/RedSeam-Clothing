export async function CheckFiltration(){
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