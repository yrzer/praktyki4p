function hRf(form){
    let word = form.txt_reverse.value;
    document.getElementById("rR").innerHTML = myReverse(word);
}
function myReverse(newVarTest){
	let result = "";
	for(let i = newVarTest.length-1; i >= 0; i--){
		result = result + newVarTest[i];
	}
	return result
}
/////////////////////////////////////////
function cf(form){
    const num1 = parseFloat(form.num1.value);
    const num2 = parseFloat(form.num2.value);
    const operator = form.operator.value;

    const resultElement = document.getElementById("cf");
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Wprowadź prawidłowe liczby";
        return;
    }

    switch (operator) {
        case "dod":
            result = num1 + num2;
            break;
        case "odj":
            result = num1 - num2;
            break;
        case "raz":
            result = num1 * num2;
            break;
        case "prz":
            if (num2 === 0) {
                resultElement.textContent = "Dzielenie przez zero!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = "Nieznany operator";
            return;
    }
    resultElement.innerHTML = "Wynik: "+result;
}
