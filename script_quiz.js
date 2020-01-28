//validation of quiz
function validateForm1() {
var score=0;
var radios = document.forms["form1"]["Q2F1"];
var cbox = document.forms["form1"]["Q4F1"];
var a = document.forms["form1"]["Q1F1"].value;
var b = document.forms["form1"]["Q2F1"].value;
var c = document.forms["form1"]["Q3F1"].value;
var ch1 = document.getElementById("c1F1").checked;
var ch2 = document.getElementById("c2F1").checked;
var ch3 = document.getElementById("c3F1").checked;
var ch4 = document.getElementById("c4F1").checked;
if(((ch1 == false) && (ch2 == false) && (ch3 == false) && (ch4 == false)) || a == "" || b == "" || c == "") {
     alert ("you must answer all qustion");
     return false;
}
var r = true;
/*start validate Q1*/ 
if(!isNaN(document.getElementById("txt1").value)){
alert("in Q1 you must enter a String not a number");
return false;
}/*end validate Q1*/
if(document.getElementById("txt1").value.includes("blue")){
         score ++; 
         document.getElementById("p").style.backgroundColor = "green";
}
else{
     document.getElementById("p").style.backgroundColor = "red"; 
     r = false;
}

if(radios[0].checked ){
score++;
document.getElementById("p2").style.backgroundColor = "green";      
}
else if(radios[1].checked){
document.getElementById("p2").style.backgroundColor = "red";
r = false;
}
	
	
if(document.getElementById('tp').selectedIndex == 2 ){
score++; 
document.getElementById("q3").style.backgroundColor = "green";
}    
	
else{
document.getElementById("q3").style.backgroundColor = "red";
r=false;
}
	
	
if(cbox[0].checked == true && cbox[1].checked == true && cbox[2].checked == true && cbox[3].checked == false){
score++; 
document.getElementById("q4").style.backgroundColor = "green";
}
else{
document.getElementById("q4").style.backgroundColor = "red";
r= false;
}
var tex = "your score is" + score;
alert(tex);
//___number of attempt
var x = Number(localStorage.getItem("attempt1"));
x++;
localStorage.setItem("attempt1", x);
//___avarage grade
var grade = localStorage.getItem("grade1");
if(x == 1){
score = (score + Number(grade));
}
else{
score = (score + Number(grade))/2;
}
localStorage.setItem("grade1", score);
return false;  }




//Tables in the Profile page
function sortTableAscending(){
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}



//validate login
function bodyfun(){
var x = document.getElementById("Username").value;
if(x==""){
	alert("you must inter user name");
	return false;
}else
localStorage.setItem("UserName", x);
alert(x);
}

function profileload(){
document.getElementById("user").innerHTML=localStorage.getItem("UserName");
document.getElementById("attempt1").innerHTML=localStorage.getItem("attempt1");
document.getElementById("grade1").innerHTML=localStorage.getItem("grade1");
document.getElementById("attempt2").innerHTML=localStorage.getItem("attempt2");
document.getElementById("grade2").innerHTML=localStorage.getItem("grade2");
document.getElementById("attempt3").innerHTML=localStorage.getItem("attempt3");
document.getElementById("grade3").innerHTML=localStorage.getItem("grade3");
} 


function login(){
	var x = document.getElementById("Username").value;
    if(x==""){
	alert("you must inter user name");
	return false;
	
	}else if(!isNaN(document.getElementById("Username").value)){
         alert("Please Enter Characters also");
     return false;
    }
	else{
     localStorage.setItem("UserName", x);
    alert(x);
    document.getElementById("loginForm").style.display = "none";
	document.getElementById("logout").style.display = "block";
}
}

function logout(){
	localStorage.clear();
    document.getElementById("loginForm").reset();
    document.getElementById("loginForm").style.display = "block";
	document.getElementById("logout").style.display = "none";
}




// reset bottom
function Res() {
var t=confirm("warning : if you press ok your answers will be deleted");
}









