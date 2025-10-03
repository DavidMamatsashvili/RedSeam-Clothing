export async function CheckShoppingCart(){
    const cartIcon = document.querySelector(".cart");
    const cartOverlay = document.getElementById("cart-overlay");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCart = document.getElementById("close-cart");

    cartIcon.addEventListener("click", () => {
        cartOverlay.style.display="block";
        cartSidebar.classList.add("open");
    });

    closeCart.addEventListener("click",closeCartSidebar);
    cartOverlay.addEventListener("click",closeCartSidebar);

    function closeCartSidebar() {
        cartOverlay.style.display="none";
        cartSidebar.classList.remove("open");
    }

    document.querySelectorAll(".cart-item").forEach(item => {
        const input=item.querySelector("input[type=number]");
        const dec=item.querySelector(".decrease");
        const inc=item.querySelector(".increase");

        dec.addEventListener("click", () => {
            let val=parseInt(input.value);
            if (val>1) input.value = val-1;
        });

        inc.addEventListener("click", () => {
            let val = parseInt(input.value);
            input.value = val+1;
        });
    });

}
