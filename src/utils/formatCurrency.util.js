// format the float into a currency string
// ex: 12345 => $12,345.00
// thanks: https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-currency-string-in-javascript
export default function formatCurrency(num) {
    const negativeSign = num < 0 ? "-" : "";
    num = Math.abs(num);
    let splitNum = num.toString().split(".");
    let dollars = splitNum[0];
    let cents = splitNum.length > 1 ? splitNum[1] : "00";
    let firstComma = dollars.length > 3 ? dollars.length % 3 : 0;

    return (
        negativeSign +
        "$" +
        (firstComma ? dollars.substr(0, firstComma) + "," : "") +
        dollars.substr(firstComma).replace(/(\d{3})(?=\d)/g, "$1,") +
        "." +
        cents
    );
}
