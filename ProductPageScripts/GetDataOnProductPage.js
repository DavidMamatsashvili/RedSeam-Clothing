export async function GetData(id){
    try{
        if(id==null) return;
        //let id = parseInt(sessionStorage.getItem("ProductId"));
        let link = `https://api.redseam.redberryinternship.ge/api/products/${id}`
        const retreive = await fetch(link);
        const data = await retreive.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}