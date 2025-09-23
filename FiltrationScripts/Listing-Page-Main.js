import { CheckAdjustmentImg } from "./Check-AdjustmentImg.js";
import { CheckChevronImg } from "./Check-ChevronImg.js"
import { CheckFiltration } from "./Check-Filtration.js"
import { CheckOtherOptions } from "./Check-OtherOptions.js"
import { CheckPriceSelectionForm } from "./Check-Price-Selection-Form.js"

async function Init(){
    CheckAdjustmentImg();
    CheckChevronImg();
    CheckFiltration();
    CheckOtherOptions();
    CheckPriceSelectionForm();
}

Init();