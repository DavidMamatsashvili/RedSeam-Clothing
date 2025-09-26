export async function CheckProductAmount(products,page){
    let total = products.meta.total;
    let product_amount = products.data.length;
    let from = 10*parseInt(page)-9;
    let to = products.data.length < 10 ? (parseInt(page)-1)*10+product_amount : parseInt(page)*product_amount
    document.querySelector(".show-results").innerText=`showing ${from}-${to} of ${total} results`;
}