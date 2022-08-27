
/*
var info = document.getElementsByClassName("stu");
let arr = [...info];
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
  arr1[i] = arr[i].innerHTML;
  console.log(arr1[i]);
}
localStorage.setItem("myvalue", JSON.stringify(arr1));
var studentInfo = new Array(6);
for (var i = 0; i < studentInfo.length; i++) {
  studentInfo[i] = new Array(9);
}
var x=0;
for(var i=0;i<6;i++){
  for(var j=0;j<9;j++){
    studentInfo[i][j]=arr1[x];
    x++;
  }
}

function validation(){
  let s = document.getElementById("SearchID").value;
  let valid=false;
  for(let i=0;i<6;i++){
    if(studentInfo[i][1]==s){
        valid=true;
        break;
    }
  }
  return valid; 
}
function success(){
  if(validation()){
    window.alert("Edits are saved successfully! ");
  }
  else{
    window.alert("Student's ID doesn't exist");
  }
}*/