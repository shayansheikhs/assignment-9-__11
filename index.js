 alert ("welcome to the  city of light ")

var userGender=prompt( "Give ma a Gender below")
if (Gender ===   "male"){
    alert(" <br>  Good Morning Sir!")
}
else if (Gender === "female") {
    alert(" <br> Good Morning Maam!")
}
  var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 }
  var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
 }
  var c = 12;
 if (c++ === 13){
 alert("condition 1 is true");
}
 if (c === 13){
 alert("condition 2 is true");
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 }
  var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 }
  if (true){
 alert("True");
 }
 if (false){
 alert("False");
 }
  if("car" < "cat"){
     alert("car is smaller than cat");
  }

 var signalcolor = "red"; 
 var signalcolor1 =  "yellow"; 
 var signalcolor2 = "green";
 var Message = "Must stop";
 var Message1= "Ready to move";
 var Message2 =   " Move now"
  document.write( "<tr><td>"+ "<br>"+"Signal color" +"</td></tr>" + "<tr><td>"+"<tr><td>"+ "Message" +"</td></tr>" )
 document.write(   "<tr><td>"+  "<br>"+"Red" +"</td></tr>"  +"</td></tr>"+  "Must Stop" +"</td></tr>"  + "<tr><td>"+ "<br>" + "Yellow"+"</td></tr>"  + "Ready to move " +"</td></tr>" + "<tr><td>"+"<br>" +  "Green" +"</td></tr>"  + "<tr><td>" + "<tr><td>" + "Move now"  +"</td></tr>" )

  document.write( " <br> Percentage%" + " Grade" +"Remarks")
  document.write( " <br>Greater than or equal to 80"  + " A-one" +"Excellent")
  document.write( " <br>Greater than or equal to 70"  + " A" +"Good")
  document.write( "<br> Greater than or equal to 60"  + " B" +"You need to inmprove")
  document.write( " <br> less than 60 "  + "  fail " +"Sorry")
  document.write("<h1>  Marks Sheet</h1>")
  var totalmark = 300
  document.write(" <br> Total mark" +":" + totalmark)
  var Markobtained = 219
  document.write(" <br> Marks obtained" +":" +  Markobtained)
  const sum = Markobtained /totalmark
  const sum1 = sum * 100
  document.write(" <br> Percntage" + ":" + sum1 +"%")
  document.write(" <br> Grade" + ":" + "B")
  document.write(" <br> Remarks" + ":" + "You need to improve")

  var  number = +prompt("give a Number for even y odd")
  if ( number  % 2 === 0 ) {
     document.write( " <br> even number")
  } else{
     document.write( " <br>odd number")
  }

  var userNumber =+prompt("give me a number divisible by 3")
  if( userNumber % 3===0){
     document.write(" <br> divisible by 3" )
  } else{
     document.write("  <br> not divisble by 3")
  }
  var user1Number = +prompt("give me a first number")
 var user2Number = +prompt("give me a second number")
 var operation = prompt("give me a operation(+,/,*,-,%)")

 if(isNaN(user1Number) || isNaN(user2Number)) {
    document.write( "<br>" +'not a number')
 } else if (operation === "+"){
         document.write( "<br>" + user1Number + user2Number)
 } else if (operation === "-"){
     document.write( "<br>" +user1Number - user2Number)
 } else if (operation === "*"){
     document.write( "<br>" +user1Number * user2Number)
 } else if (operation === "/"){
     document.write( "<br>" +user1Number / user2Number)
 } else if (operation === "%"){
     document.write( "<br>" +user1Number % user2Number)
 } else {
   document.write( "<br>" +'wrong operator')
 }