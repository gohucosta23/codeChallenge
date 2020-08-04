
import * as Utils from "./utils.js";
import data from "./data.js";

let index = 0;

function buttonDisable() {

    $(".amountOfPages").text(data.length);
    
    if(index === 0) {
        $("#previousBtn").hide();
    }
    else if (index === data.length - 1){
        $("#nextBtn").hide();
    }
}

$("#nextBtn").on("click", function () {

    if (index < data.length - 1) {
        index += 1;
        buttonDisable();
        $(".pageInfo").text(index + 1)
        $("#previousBtn").show();
        Utils.populatePayeeInfo(index);
        Utils.populatePaymentInfo(index);
        Utils.populateRemittanceInfo(index)
    } 
});

$("#previousBtn").on("click", function () {

    if (index > 0) {
        index -= 1;
        buttonDisable();
        $(".pageInfo").text(index - 1)
        $("#nextBtn").show();
        Utils.populatePayeeInfo(index);
        Utils.populatePaymentInfo(index);
        Utils.populateRemittanceInfo(index);
    }
});

buttonDisable();
Utils.populatePayeeInfo(index);
Utils.populatePaymentInfo(index);
Utils.populateRemittanceInfo(index);

