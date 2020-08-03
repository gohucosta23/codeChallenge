
import * as Utils from "./utils.js";
import data from "./data.js";

let index = 0;

$("#nextBtn").on("click", function () {
    if (index < data.length - 1) {
        index += 1;
        $(".pageInfo").text(index + 1)
        Utils.populatePayeeInfo(index);
        Utils.populatePaymentInfo(index);
        Utils.populateRemittanceInfo(index)
    }
});
$("#previousBtn").on("click", function () {
    if (index > 0) {
        index -= 1;
        $(".pageInfo").text(index - 1)
        Utils.populatePayeeInfo(index);
        Utils.populatePaymentInfo(index);
        Utils.populateRemittanceInfo(index);
    }
});

Utils.populatePayeeInfo(index);
Utils.populatePaymentInfo(index);
Utils.populateRemittanceInfo(index);

