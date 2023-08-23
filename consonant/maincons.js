const cons = ['B', 'C', 'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'S', 'T', 'V', 'X', 'Z', 'H', 'R', 'W', 'Y'];
var totalcons = 0;

const check = function() {
    const val1 = document.getElementById("intext1").value;
    
    cons.forEach(consonant => {
        for (let i = 0; i < val1.length; i++) {
            if (val1[i].toUpperCase() === consonant) {
                totalcons++;
            }
        }
    });
    alert("Total amount of consonants is: " + totalcons + " consonants ");
    totalcons = 0;
}
