export async function CheckDeleteBtn(current,loadpage){
    const FilterCategoryDeleteBtn = document.querySelector(".delete-price-tag-btn");
    if(FilterCategoryDeleteBtn){
        FilterCategoryDeleteBtn.addEventListener("click",async()=>{
            console.log("deleted")
            const Parent = document.querySelector(".filter-categories");
            Parent.innerHTML="";
            current.max=null;
            current.min=null;
            await loadpage();
        })
    }
}