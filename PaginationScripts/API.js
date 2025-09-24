//export const Link = `https://api.redseam.redberryinternship.ge/api/products`;

export async function GetData(page) {
    try{
        const Link = `https://api.redseam.redberryinternship.ge/api/products?page=${page}`;
        const data = await fetch(Link);
        const json = await data.json();
        return json;
    }
    catch(err){
        console.log(err);
    }
}

export async function GetDataFromForm(min_price,max_price,page){
    try{
        let productsAwait  = await fetch(`https://api.redseam.redberryinternship.ge/api/products?page=${page}&filter[price_from]=${min_price}&filter[price_to]=${max_price}`);
        let products = await productsAwait.json();
        return products;
    }
    catch(err){
        console.log(err);
    }
}