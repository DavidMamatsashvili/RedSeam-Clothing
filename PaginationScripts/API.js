export const Link = `https://api.redseam.redberryinternship.ge/api/products`;

export async function GetData(link) {
    try{
        const data = await fetch(link);
        const json = await data.json();
        return json;
    }
    catch(err){
        console.log(err);
    }
}
