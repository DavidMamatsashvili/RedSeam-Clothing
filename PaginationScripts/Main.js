import { DrawProducts } from './Products.js';
import { DrawPaginations, CheckButtons } from './Pagination.js';

async function init() {
    await DrawProducts(1);
    await DrawPaginations(1);
    CheckButtons();

    document.querySelector(".pagination-pages").addEventListener("click", async (e) => {
        if (!e.target.classList.contains("pagination") || e.target.classList.contains("third-wheel")) return;
        const pageNum = parseInt(e.target.innerText);
        if (!isNaN(pageNum)) {
            await DrawProducts(pageNum);
            await DrawPaginations(pageNum);
        }
    });
}

init();
