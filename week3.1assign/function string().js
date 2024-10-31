//Anthony Owen, csc102, Assignment3.1//
//creates function for string//
function strings()
{
    // creates var for firstInput//
    var string1 = document.getElementById("firstInput").value;
    
    //creates var for splitting string1//
    var splitStr = string1.split("");
    
    //creates var for reversing of the split of string1//
    var reverseStr = splitStr.reverse();
    
    //creates var for joining the reverse split of string1//
    var joinStr = reverseStr.join("");
    
    //if string1 is = to the joined string inputs Palindrome in status are//
    if (string1 == joinStr)
    {
        document.getElementById("stringStatus").innerHTML = "Palindrome"
    }
    // if it string1 does not = joined string inputs not a palindrome//
    else
    {
        document.getElementById("stringStatus").innerHTML = "not a palindrome"
    }
    // if string1 is blank then inputs Error in status area//
    if (string1 == "")
         {
        document.getElementById("stringStatus").innerHTML = "Error"
         } 
    

}
