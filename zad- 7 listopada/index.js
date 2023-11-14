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
/////////////////////////////////////////
function palindrom(txt) { /// zad2
    let str = "";
    for (let x = txt.length - 1; x >= 0; x--) {
      str += txt[x];
    }
  
    if (txt === str) {
      return true;
    } else {
      return false;
    }
}
////
function isNumber(string) {
  const parsedNumber = parseInt(string);
  return parsedNumber !== NaN && !isNaN(parsedNumber);
}
function zad3(tab) {

    if (isNumber(tab[0])) {
      
        let a = parseInt(tab[0]);
        let b = parseInt(tab[0]);
        for (let x = tab.length - 1; x >= 0; x--) {
          let tabx = parseInt( tab[x]);
          if (tabx > a) {
              b = a;
              a = tabx;
          }
          else if (tabx == a){
              //pass
          }
          else if (tabx > b) {
              b = tabx;
          }
        }
      
      return a + " - liczba";
    } else if (typeof tab[0] === "string") { // jeżeli string
      let tab2 = "";
      let tab1 = tab[0];
      for (let x = tab.length - 1; x >= 0; x--) {
        if (tab[x].length > tab1.length) {
          tab2 = tab1;
          tab1 = tab[x];
        } else if (tab[x].length > tab2.length) {
          tab2 = tab[x];
        }
      }
      return tab2 + " - string";
    } else return "error";
}
////
function zad4(txt1, txt2){
  let l1= txt1.split("").map(c => c.charCodeAt(0));
  let l2= txt2.split("").map(c => c.charCodeAt(0));

  let w1 = 1;
  for (let i = 0; i < l1.length; i++) {
    w1 *= l1[i];
  }
  let w2 = 1;
  for (let i = 0; i < l2.length; i++) {
    w2 *= l2[i];
  }

  if(w1 == w2) return true;
  else return false;

}
//
function z2(form){
    let txt = form.txt.value.toLowerCase();
    let out = "nie jest";
    if(palindrom(txt)) out= "jest";
    document.getElementById("z2").innerHTML = out;
}
function z3(form){
    let tab = form.txt.value.toLowerCase().split(",");
    document.getElementById("z3").innerHTML = zad3(tab);
}
function z4(form){
    let txt1 = form.txt1.value.toLowerCase();
    let txt2 = form.txt2.value.toLowerCase();
    let out = "nie jest";
    if(zad4(txt1,txt2)) out= "jest";
    document.getElementById("z4").innerHTML = out;
}