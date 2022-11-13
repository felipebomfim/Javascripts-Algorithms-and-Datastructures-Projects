function rot13(str) {
    let words = str.split(" ");
    let characters;
    let phrase = [];
    words.forEach(word=> {
        characters = word.split("");
        word = "";
        characters.forEach( char=>{
            if (char<='Z'&&char>='A')
                char = String.fromCharCode('A'.charCodeAt(0)+(char.charCodeAt(0)+13-'A'.charCodeAt(0))%26)
            word+=char;
        });
        phrase.push(word);
    });
    phrase = phrase.join(" ");
    return phrase;
}
  
console.log(rot13("SERR PBQR PNZC"));