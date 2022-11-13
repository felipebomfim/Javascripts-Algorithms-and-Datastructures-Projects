function convertToRoman(num) {
    let roman='';
    let roman_numerals = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let arabic_numerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    for (i=0;i<roman_numerals.length;i++){
     while (num>=arabic_numerals[i]){
       roman+=roman_numerals[i];
       num-=arabic_numerals[i];
     }
    }
    return roman;
   }
   
console.log(convertToRoman(2));