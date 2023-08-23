const vowels = ['a', 'e', 'i', 'o', 'u'];
var totalvowels = 0;

const check = function() {
    const val = document.getElementById("intext").value;
    
    vowels.forEach(vowel => {
        for (let i = 0; i < val.length; i++) {
            if (val[i] === vowel) {
                totalvowels++;
            }
        }
    });
    alert("Total amount of vowels is: " + totalvowels + " vowels ");
    totalvowels = 0;
}


