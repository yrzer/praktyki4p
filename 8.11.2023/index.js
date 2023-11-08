function rekurencja(x,y){
    console.log(x,y);
    if(x!=y) rekurencja(x,y-1); 
}
rekurencja(8,11);
/////
function fibonaci(n){
	if(n==0) return 0;
    else if(n<3)return 1;
	return fibonaci(n-2)+fibonaci(n-1);
}
for(x =0; x<15;x++) console.log(x+"fibonaci: "+fibonaci(x));
/////
tab1 = ["a","b","c"];
tab2 = [1,2,3];
tab3=[];
for(x = 0; x<tab2.length;x++){
    tab3.push(tab1[x],tab2[x]);
    console.log("tab3: "+tab3[x]);
}
/////
tab4=[10,11,"ania",11];
tab5=[];
f="11";
for(x=0;x<tab4.length;x++){
    if(tab4[x]==f) tab5.push(tab4[x])
}
console.log("result: "+ tab5)
///// Number.isInteger
tab6=[]
sum=0;
for(x =1;x<15;x++){
    tab6.push(x)
}
for(x =0;x<tab6.length;x++){
    if(Number.isInteger(tab6[x])){
        sum+=tab6[x];
    }
}
console.log("zad5: "+sum)