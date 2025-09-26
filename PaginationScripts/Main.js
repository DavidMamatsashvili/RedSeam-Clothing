import { DrawProducts } from './Products.js';
import { DrawPaginations, CheckButtons, DrawPaginationsWithFiltration, CheckButtonsWithFiltration } from './Pagination.js';
import { GetData, GetDataFromForm } from './API.js';
import { CheckProductAmount } from './Check-Product-Amount.js';
import { CheckDeleteBtn } from './Check-Delete-Btn.js';

let currentFilter = { min: null, max: null };
let currentPage = 1;

async function init() {
    let products = await GetData(currentPage);
    await DrawProducts(products);
    await DrawPaginations(currentPage,products);
    await CheckProductAmount(products,currentPage);

    document.querySelector(".pagination-pages").addEventListener("click", async (e) => {
        if (!e.target.classList.contains("pagination") || e.target.classList.contains("third-wheel")) return;
        const pageNum = parseInt(e.target.innerText);
        if (!isNaN(pageNum)) {
            currentPage = pageNum;
            await loadPage();
        }
    });

    document.querySelector(".min-max-price-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        currentFilter.min = formData.get("price_from");
        currentFilter.max = formData.get("price_to");
        currentPage = 1;
        await loadPage();
    });

    document.querySelector(".chevron-left").addEventListener("click", async () => {
        if (currentPage > 1) {
            currentPage--;
            await loadPage();
        }
    });

    document.querySelector(".chevron-right").addEventListener("click", async () => {
        currentPage++;
        await loadPage();
    });
}

async function loadPage() {
    await CheckDeleteBtn(currentFilter,loadPage);
    if (currentFilter.min != null && currentFilter.max != null) {
        let products = await GetDataFromForm(currentFilter.min, currentFilter.max, currentPage);
        await DrawProducts(products);
        await CheckProductAmount(products,currentPage);
        await DrawPaginationsWithFiltration(currentPage,products);
    } else {
        console.log("printed")
        let products = await GetData(currentPage);
        await DrawProducts(products);
        await CheckProductAmount(products,currentPage);
        await DrawPaginations(currentPage,products);
    }
}

init();
