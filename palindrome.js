function palindrome(str) {
    str = str.toLowerCase();
    let elements = str.split('');
    elements = elements.filter((el)=> ((el>='a'&&el<='z')||(el>='0'&&el<='9')));
    let hi=elements.length-1;
    let low = 0;
    while (hi>=low){
      if (elements[hi]!==elements[low])
        return false;
      hi--;
      low++;
    }
    return true;
}

console.log(palindrome("eye"));