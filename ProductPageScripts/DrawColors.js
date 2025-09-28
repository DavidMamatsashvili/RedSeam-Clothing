export async function DrawColors(products){
    const colorMap = {
        White: "#FFFFFF",
        Red: "#FF0000",
        Multi: "linear-gradient(90deg, red, yellow, green, blue)",
        Blue: "#0000FF",
        "Navy Blue": "#001F54",
        Grey: "#808080",
        Black: "#000000",
        Purple: "#800080",
        Orange: "#FFA500",
        Beige: "#F5F5DC",
        Pink: "#FFC0CB",
        Green: "#008000",
        Cream: "#FFFDD0",
        Maroon: "#800000",
        Brown: "#A52A2A",
        Peach: "#FFE5B4",
        "Off White": "#F8F8F0",
        Mauve: "#E0B0FF",
        Yellow: "#FFFF00",
        Magenta: "#FF00FF",
        Khaki: "#F0E68C",
        Olive: "#808000",
    };

    products.available_colors.forEach((element,index)=>{
        if(index==0){
            let obj = 
            `
            <label class="color-circle circle-bg-after">
                <input type="radio" name="color" checked="true">
                <span class="circle-bg" style="background:${colorMap[element]};"></span>
            </label>
            `
            document.querySelector(".colors-selection").innerHTML+=obj;
        }
        else{
            let obj = 
            `
            <label class="color-circle">
                <input type="radio" name="color">
                <span class="circle-bg" style="background:${colorMap[element]};"></span>
            </label>
            `
            document.querySelector(".colors-selection").innerHTML+=obj;
        }
    })
}
