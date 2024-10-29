//Anthony Owen, Assignment 2.2: The Building Blocks for Javascript - Functions, added game of heads or tails (winner buys parts when heads is triggered, passes when tails is triggered)//
// uses random math generator, uses harleyhead.jpg image when heads is triggered, uses tailsection.jpg when tails is triggered//

function flipcoin()
{
    var player1 = Math.ceil(Math.random()*2);
    var headimage = "harleyhead.jpg";
    var tailimage = "tailsection.jpg";

    if (player1 == 1)
    {
        //inputs player1 headimage when heads is triggered//
        document.getElementById("player1Img").src = headimage;
    }
    
    if (player1 == 2)
    {
        //inputs player1 tailimage when tails is triggered//
        document.getElementById("player1Img").src = tailimage;    
    }
    
    

}

function validate()
{
    var user = document.getElementById("userName").value;
    var pas = document.getElementById("password").value;
    var empID = document.getElementById("employee ID").value;
 
    if ((user == "")||(pas == "")(empID == ""))
    {
        document.getElementById("inputStatus").innerHTML = "incorrect username/password/employee ID"
        return false;
    }
    
    else if ((user == "admin")||(pas == "160777")||(empID == "crazyhorse"))
    {
        document.getElementById("inputStatus").innerHTML = "username/password accepted redirecting"
        return true; 
    }
    else if ((user == "admin")|| (pas == "160777")||(empID == "crazyhorse"))
    {
        Window.location.href = "board1.html"
        return true;
    }
} 