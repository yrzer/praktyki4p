const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];


const laczenie_tablic = (tab1,tab2) => tab1.concat(tab2); // 1
const ostatniE_tablic = (tab1) => tab1.reverse()[0]; // 2  error: ponieważ powinno być (tab1) => tab1[tab1.length - 1]
const filterDlugosci_tablic = (tab2,argInt) => tab2.filter( (a) => a.length > argInt ); // 3
const suma_tablic = (numerki) => numerki.reduce((a, x) => a + x); // 4
const wyliczanie_tablic = (numerki) => numerki.map( x => Math.pow(x,2)+3 ); // 5
/// +2
const filterDod_tablic = (numerki) => numerki.filter( (a) => a%2 == 0 ); // 1+
const min_tablic = (numerki) => numerki.reduce((a, x) => {if(a>x) a=x; return a; }); // 2+


function z(){
    let w="";
    w+="<b>łączenie tablic arr1 oraz arr2</b> "+ laczenie_tablic(arr1,arr2)+"<br>";
    w+="<b>ostatni element w tablicy: </b><br>"+ ostatniE_tablic(arr1)+"<br>"+ ostatniE_tablic(arr2)+"<br>"+ ostatniE_tablic(numbers)+"<br>";
    w+="<b>zastosuj filter w tablicy arr2 (wieksze od 4) </b>"+ filterDlugosci_tablic(arr2,4)+"<br>";
    w+="<b>suma elementów w tablicy numbers </b>"+ suma_tablic(numbers)+"<br>";
    w+="<b>.map() po tablicy numbers i każdy element n^2+3 </b>"+ wyliczanie_tablic(numbers)+"<br>";
    w+="<b>dodatkowe:<br>Dodaj funkcję strzałkową używając .filter(), która odnajdzie wyłącznie liczby parzyste w numbers </b>"+ filterDod_tablic(numbers)+"<br>";
    w+="<b>Napisz funkcję rekurencyjną strzałkową (reduce), która odnajdzie najmniejszy element w tablicy numbers </b>"+ min_tablic(numbers)+"<br>";
    document.getElementById("w").innerHTML=w;
}

