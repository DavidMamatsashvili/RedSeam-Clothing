import { DrawProducts, totalPages } from './Products.js';
import { GetData, GetDataFromForm } from './API.js';

export function InsertPaginations(text) {
    let checktext = text == "..." ? "third-wheel" : "pagination";
    let obj = document.createElement("div");
    obj.classList.add("page");
    obj.classList.add(checktext);
    obj.innerText=text;
    return obj;   
}

export async function DrawPaginations(current) {
    try{
        //const link = `https://api.redseam.redberryinternship.ge/api/products?page=${current}`;
        const data = await GetData(current);

        let x = data.links.last;
        let y = new URL(x);
        let total = parseInt(y.searchParams.get("page"));

        let pages = [];

        pages.push(1);
        if (total > 1) pages.push(2);

        if (current <= 4) {
            for (let i = 3; i <= current + 1 && i < total - 1; i++) {
                pages.push(i);
            }
            if (current + 1 < total - 2) pages.push("...");
        }
        else if (current >= total - 3) {
            pages.push("...");
            for (let i = total - 4; i < total; i++) {
                if (i > 2) pages.push(i);
            }
        }
        else {
            pages.push("...");
            pages.push(current - 1);
            pages.push(current);
            pages.push(current + 1);
            pages.push("...");
        }

        if (total > 2) {
            pages.push(total - 1);
            pages.push(total);
        }

        pages=pages.filter((item, index)=>{
            return typeof item === "string" || pages.indexOf(item) === index;
        });
        
        const parent = document.querySelector(".pagination-pages");
        document.querySelector(".pagination-pages").innerHTML="";

        for(let i of pages){
            let obj = InsertPaginations(i);
            parent.appendChild(obj);
        }

        ChangePaginationColor(current);
    }
    catch(err){
        console.log(err);
    }
}

export async function DrawPaginationsWithFiltration(min_price,max_price,current){
    try{
        const data = await GetDataFromForm(min_price,max_price,current);

        let x = data.links.last;
        let y = new URL(x);
        let total = parseInt(y.searchParams.get("page"));

        let pages = [];

        pages.push(1);
        if (total > 1) pages.push(2);

        if (current <= 4) {
            for (let i = 3; i <= current + 1 && i < total - 1; i++) {
                pages.push(i);
            }
            if (current + 1 < total - 2) pages.push("...");
        }
        else if (current >= total - 3) {
            pages.push("...");
            for (let i = total - 4; i < total; i++) {
                if (i > 2) pages.push(i);
            }
        }
        else {
            pages.push("...");
            pages.push(current - 1);
            pages.push(current);
            pages.push(current + 1);
            pages.push("...");
        }

        if (total > 2) {
            pages.push(total - 1);
            pages.push(total);
        }

        pages=pages.filter((item, index)=>{
            return typeof item === "string" || pages.indexOf(item) === index;
        });
        
       
        const parent = document.querySelector(".pagination-pages");
        document.querySelector(".pagination-pages").innerHTML="";

        for(let i of pages){
            let obj = InsertPaginations(i);
            parent.appendChild(obj);
        }

        await ChangePaginationColor(current);
    }
    catch(err){
        console.log(err);
    }
}

export async function ChangePaginationColor(current) {
    try{
        const PaginationPages = document.querySelectorAll(".pagination");
        PaginationPages.forEach(element=>{
            if(parseInt(element.innerText)==current){
                element.classList.add("pagination-clicked");
            }
        });

        PaginationPages.forEach(element=>{
            element.addEventListener("click",()=>{
                PaginationPages.forEach(other=>{
                    if(other.classList.contains("pagination-clicked")){
                        other.classList.remove("pagination-clicked");
                    }
                })
                element.classList.add("pagination-clicked");
            });
        })
    }
    catch(err){
        console.log(err);
    }
}

export async function CheckButtons() {
    try{
        document.querySelector(".chevron-left").addEventListener("click", async () => {
            const clicked = document.querySelector(".pagination-clicked");
            if (!clicked) return;

            if (parseInt(document.querySelector(".pagination-clicked").innerText) > 1) {
                let currentPage = parseInt(document.querySelector(".pagination-clicked").innerText);
                currentPage--;
                let products = await GetData(currentPage);
                await DrawProducts(products);
                await DrawPaginations(currentPage); 
            }
        });

        document.querySelector(".chevron-right").addEventListener("click", async () => {
            const clicked = document.querySelector(".pagination-clicked");
            if (!clicked) return;

            if (parseInt(document.querySelector(".pagination-clicked").innerText) < totalPages) {
                let currentPage = parseInt(document.querySelector(".pagination-clicked").innerText);
                currentPage++;
                let products = await GetData(currentPage);
                await DrawProducts(products);
                await DrawPaginations(currentPage);
            }
        });
    }
    catch(err){
        console.log(err);
    }
}

export async function CheckButtonsWithFiltration(min_price,max_price){
    try{
        document.querySelector(".chevron-left").addEventListener("click", async () => {
            const clicked = document.querySelector(".pagination-clicked");
            if (!clicked) return;

            if (parseInt(document.querySelector(".pagination-clicked").innerText) > 1) {
                let currentPage = parseInt(document.querySelector(".pagination-clicked").innerText);
                currentPage--;
                let products = await GetDataFromForm(min_price,max_price,currentPage);
                await DrawProducts(products);
                await DrawPaginationsWithFiltration(min_price,max_price,currentPage); 
            }
        });

        document.querySelector(".chevron-right").addEventListener("click", async () => {
            const clicked = document.querySelector(".pagination-clicked");
            if (!clicked) return;

            if (parseInt(document.querySelector(".pagination-clicked").innerText) < totalPages) {
                let currentPage = parseInt(document.querySelector(".pagination-clicked").innerText);
                currentPage++;
                let products = await GetDataFromForm(min_price,max_price,currentPage);
                await DrawProducts(products);
                await DrawPaginationsWithFiltration(min_price,max_price,currentPage); 
            }
        });
    }
    catch(err){
        console.log(err);
    }
}

