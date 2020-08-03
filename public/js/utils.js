import data from "./data.js";

export function populatePayeeInfo(index) {

    $(".pageInfo").text(index + 1)
    $("#payee").empty();

    const payeeInfo = $(`

      <div class="card">
        <h4 class="card-title text-center title">${data[index].Payee.Name} (PAYEE)</h4>
            <table class="table table-borderless">
                <tbody>
                    <tr class = "tableRow">
                        <td class = "infoTitle" scope="row">Address :</th>
                        <td class ="info border-right">${data[index].Payee.Address.Address1}</th>
                        <td class = "infoTitle" scope="row">City, State, Zipcode :</th>
                        <td class ="info">${data[index].Payee.Address.City}, ${data[index].Payee.Address.StateOrProvince} ${data[index].Payee.Address.PostalCode} ${data[index].Payee.Address.Country}</th>
                    </tr>
                    <tr class = "tableRow">
                        <td class = "infoTitle" scope="row">Phone :</th>
                        <td class ="info border-right">${data[index].Payee.Phone}</th>
                        <td class = "infoTitle" scope="row">Fax :</th>
                        <td class ="info">${data[index].Payee.Fax}</th>
                    </tr>
                    <tr>
                        <td class = "infoTitle" scope="row">Attention :</th>
                        <td class ="info border-right">${data[index].Payee.Attention}</th>
                        <td class = "infoTitle" scope="row">Submission Date :</th>
                        <td class ="info">${data[index].Payee.SubmissionDate}</th>
                    </tr>
                    </tbody>
            </table>
      </div>
      `)

    $("#payee").append(payeeInfo)
}

export function populatePaymentInfo(index) {

    $("#payment").empty();

    const paymentInfo = $(`

      <div class="card">
      <h4 class="card-title text-center title">PAYMENT INFORMATION</h4>
        <table class="table table-borderless ">
            <tbody>
                <tr class = "tableRow">
                    <td class = "infoTitle" scope="row">PAN :</th>
                    <td class ="info">${data[index].Payment.PAN}</th>
                </tr>
                <tr class = "tableRow">
                    <td class = "infoTitle" scope="row">CVV :</th>
                    <td class ="info">${data[index].Payment.CVV}</th>
                </tr>
                <tr>
                    <td class = "infoTitle" scope="row">EXP :</th>
                    <td class ="info">${data[index].Payment.Exp}</th>
                </tr> 
            </tbody>
        </table>
      </div>
      `)

    $("#payment").append(paymentInfo)

}



export function populateRemittanceInfo(index) {

    $("#remittance").empty();

    for (var i = 0; i < data[index].Remittance.length; i++) {

        const remittanceInfo = $(`

            <div class="col-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title text-center title">${data[index].Remittance[i].PayorName.toUpperCase()} (PAYOR)</h4>
                        <table class="table table-borderless ">
                            <tbody">
                                <tr class = "tableRow">
                                    <td class = "infoTitle" scope="row">Invoice Number :</th>
                                    <td class ="remittanceInfo">${data[index].Remittance[i].InvoiceNo}</th>
                                </tr>
                                <tr class = "tableRow">
                                    <td class = "infoTitle" scope="row">Payor Id :</th>
                                    <td class ="remittanceInfo">${data[index].Remittance[i].PayorId}</th>
                                </tr>
                                <tr class = "tableRow">
                                    <td class = "infoTitle" scope="row">Description :</th>
                                    <td class ="remittanceInfo">${data[index].Remittance[i].Description}</th>
                                </tr> 
                                <tr>
                                    <td class = "infoTitle" scope="row">Ammount :</th>
                                    <td class ="remittanceInfo">${data[index].Remittance[i].Amount}</th>
                                </tr> 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

    `)
        $("#remittance").append(remittanceInfo)

    }
}

