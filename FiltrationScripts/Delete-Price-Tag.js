export function DeletePriceTag(){
    const FilterCategoryDeleteBtn = document.querySelector(".delete-price-tag-btn");
    FilterCategoryDeleteBtn.addEventListener("click",()=>{
        const Parent = document.querySelector(".filter-categories");
        Parent.innerHTML="";
    })
}