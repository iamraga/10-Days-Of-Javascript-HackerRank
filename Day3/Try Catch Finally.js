/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        var split = s.split("");
        var rev = "";
        for(var i=split.length-1; i>=0; i--) {
            rev += split[i];
        }
        console.log(rev);
    }
    catch(e) {
        console.log(e.message);
        console.log(s);
    }
}