
    function currencyExchange() {

    if (!isFinite(1*SelectCurrencyAmount.value)) {
        alert("הכנס ספרות בלבד");
    return;
    }
    document.getElementById('ResultSourceCode').innerHTML = SelectSourceCurrency.value;
    document.getElementById('ResultTargetCode').innerHTML = SelectTargetCurrency.value;
    document.getElementById('ResultSourceAmount').innerHTML = SelectCurrencyAmount.value;
    if (SelectSourceCurrency.value == SelectTargetCurrency.value) {
        document.getElementById('ResultTargetAmount').innerHTML = SelectCurrencyAmount.value + " = ";
    }
    else {
        var USDSource = "USD" + SelectSourceCurrency.value;
        var USDTarget = "USD" + SelectTargetCurrency.value;
        var tmp1, tmp2;

        if (USDSource == "USDTHB") tmp1 = <%= quetes.USDTHB %>;
        if (USDSource == "USDAUD") tmp1 = <%= quetes.USDAUD %>;
        if (USDSource == "USDUSD") tmp1 = <%= quetes.USDUSD %>;
        if (USDSource == "USDNZD") tmp1 = <%= quetes.USDNZD %>;
        if (USDSource == "USDSGD") tmp1 = <%= quetes.USDSGD %>;
        if (USDSource == "USDCAD") tmp1 = <%= quetes.USDCAD %>;
        if (USDSource == "USDPLN") tmp1 = <%= quetes.USDPLN %>;
        if (USDSource == "USDEUR") tmp1 = <%= quetes.USDEUR %>;
        if (USDSource == "USDJPY") tmp1 = <%= quetes.USDJPY %>;
        if (USDSource == "USDNOK") tmp1 = <%= quetes.USDNOK %>;
        if (USDSource == "USDCZK") tmp1 = <%= quetes.USDCZK %>;
        if (USDSource == "USDGBP") tmp1 = <%= quetes.USDGBP %>;
        if (USDSource == "USDMXN") tmp1 = <%= quetes.USDMXN %>;
        if (USDSource == "USDSEK") tmp1 = <%= quetes.USDSEK %>;
        if (USDSource == "USDZAR") tmp1 = <%= quetes.USDZAR %>;
        if (USDSource == "USDRUB") tmp1 = <%= quetes.USDRUB %>;
        if (USDSource == "USDILS") tmp1 = <%= quetes.USDILS %>;

        if (USDTarget == "USDTHB") tmp2 = <%= quetes.USDTHB %>;
        if (USDTarget == "USDAUD") tmp2 = <%= quetes.USDAUD %>;
        if (USDTarget == "USDUSD") tmp2 = <%= quetes.USDUSD %>;
        if (USDTarget == "USDNZD") tmp2 = <%= quetes.USDNZD %>;
        if (USDTarget == "USDSGD") tmp2 = <%= quetes.USDSGD %>;
        if (USDTarget == "USDCAD") tmp2 = <%= quetes.USDCAD %>;
        if (USDTarget == "USDPLN") tmp2 = <%= quetes.USDPLN %>;
        if (USDTarget == "USDEUR") tmp2 = <%= quetes.USDEUR %>;
        if (USDTarget == "USDJPY") tmp2 = <%= quetes.USDJPY %>;
        if (USDTarget == "USDNOK") tmp2 = <%= quetes.USDNOK %>;
        if (USDTarget == "USDCZK") tmp2 = <%= quetes.USDCZK %>;
        if (USDTarget == "USDGBP") tmp2 = <%= quetes.USDGBP %>;
        if (USDTarget == "USDMXN") tmp2 = <%= quetes.USDMXN %>;
        if (USDTarget == "USDSEK") tmp2 = <%= quetes.USDSEK %>;
        if (USDTarget == "USDZAR") tmp2 = <%= quetes.USDZAR %>;
        if (USDTarget == "USDRUB") tmp2 = <%= quetes.USDRUB %>;
        if (USDTarget == "USDILS") tmp2 = <%= quetes.USDILS %>;

        var amountInDollars = 1 * SelectCurrencyAmount.value.toString() / tmp1;
        var amountInNewCurrency = 1 * amountInDollars * tmp2;
        document.getElementById('ResultTargetAmount').innerHTML = "" + amountInNewCurrency+" = ";
    }
}
function reset() {
        document.getElementById('ResultSourceCode').innerHTML = "";
    document.getElementById('ResultTargetCode').innerHTML = "";
    document.getElementById('ResultSourceAmount').innerHTML = "";
    document.getElementById('ResultTargetAmount').innerHTML = "";
    document.getElementById('SelectCurrencyAmount').value = "1";
}