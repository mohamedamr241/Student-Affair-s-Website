function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}



function loadDoc() {
  let nme = document.getElementById("name").value;
  console.log(nme);
  let department = document.getElementById("Departments").value;
  console.log(department);
  var l = document.querySelectorAll(".lvll");
  let s = document.querySelectorAll('[name="studentStatus"]');
  console.log(l);
  console.log(s);
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    console.log(data[0].name);
    console.log(data[0].department_id);
    console.log(data[0].level);
    console.log(data[0].ID);
    console.log(data[0].phone_number);
    console.log(data[0].email);
    
  };
  xhttp.open("POST", "active/srch");
    const csrftoken = getCookie('csrftoken');
    xhttp.setRequestHeader("X-CSRFToken", csrftoken);
  xhttp.send(
    JSON.stringify({
      name:nme,
      level1:l[0].checked,
      level2:l[1].checked,
      level3:l[2].checked,
      level4:l[3].checked,
      status1:s[0].checked,
      status2:s[1].checked,
      status3:s[2].checked,
      department:department,
    })
  );
}

/*const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

alert(
  "Try Names: Mohamed Amr Abd El Fattah, Fadia Khaled Abd El Hady, Habiba Yasser Saied, Habiba Mohamed Mohamed Hassan, Mai Mostafa Amin, Zeyad Diaa Eldin Refeat"
);

//define 2D array
var studentInfo = new Array(6);
for (var i = 0; i < studentInfo.length; i++) {
  studentInfo[i] = new Array(9);
}
var arr2=localStorage.getItem('myvalue');
var arr3=JSON.parse(arr2);

var x=0;
for(var i=0;i<6;i++){
  for(var j=0;j<9;j++){
    studentInfo[i][j]=arr3[x];
    x++;
  }
}
for(var i=0;i<6;i++){
  for(var j=0;j<9;j++){
    console.log(studentInfo[i][j]);
  }
}
function validation(){
  let n = (document.getElementById("name").value);
  let valid=false;
  for(let i=0;i<6;i++){
    if(studentInfo[i][0]==n){
      valid=true;
      break;
    }
  }
  if(valid){
    return true;
  }
  alert("Student Name doesn't exist");
  return false;
}
function search() {
  if(validation()){
    let name = (document.getElementById("name").value);
    let department = document.getElementById("Departments").value;
    var level = document.querySelectorAll('.lvll:checked');
    //let status =document.getElementsByName("studentStatus");
    let status=document.querySelectorAll('[name="studentStatus"]:checked');
    //let arrStatus=[...status];
  
    //console.log(name);
    //console.log(department);
    //for(let i=0;i<level.length;i++){
     // console.log(level[i].value);
    //}
    //for(let i=0;i<status.length;i++){
     // console.log(status[i].value);
    //}
  
    let x = document.getElementById("n");
    let y = document.getElementById("id");
    let z = document.getElementById("lvl");
    let r = document.getElementById("dep");
    let v = document.getElementById("stat");
    let a = document.getElementById("gpa");
    let b = document.getElementById("date");
    let c = document.getElementById("num");
    let d = document.getElementById("email");
  
    for(var j=0;j<6;j++){
      if(studentInfo[j][0]==name && (studentInfo[j][4]==department ||department=="All")){
        console.log("one");
        //console.log(studentInfo[j][0]);
        for(let i=0;i<level.length;i++){
          if(studentInfo[j][3]==level[i].value){
            console.log("two");
            for(let i=0;i<status.length;i++){
              if(studentInfo[j][2]==status[i].value || status[i].value=="All"){
                  console.log("three");
                  x.innerHTML=studentInfo[j][0];
                  y.innerHTML=studentInfo[j][1];
                  z.innerHTML=studentInfo[j][3];
                  r.innerHTML=studentInfo[j][4];
                  v.innerHTML=studentInfo[j][2];
                  a.innerHTML=studentInfo[j][5];
                  b.innerHTML=studentInfo[j][6];
                  c.innerHTML=studentInfo[j][7];
                  d.innerHTML=studentInfo[j][8];
                  var valid=true;
                  break;
              }
            }
            if(valid){break;}
  
          }
  
        }
        if(valid){
          break;
        }
      }else{
        continue;
      }
    }
  
  }
  
}

*/