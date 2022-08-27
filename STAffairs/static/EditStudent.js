const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


alert(
  "Try IDs: 20200200, 20200569, 20200145, 20200147, 20200371, 20200467"
); 


function inputValidation() {
  var flag = true; 
  var allowedChars="abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var n=document.getElementById("Name").value;
  for(var i=0;i<n.length;i++){
      if(allowedChars.indexOf(n.charAt(i))==-1)
      {
        alert("Student name must contain characters only");
        flag = false; 
        break; 
   }
  }

  let gpa = document.getElementById("newGpa").value;
  if (gpa < 0 || gpa > 4) { alert ( "Edited GPA is invalid"); flag = false;}

  let phone = document.getElementById("PhoneNum").value; 
  if (phone < 0){alert("Invalid Phone number" ); flag = false;}

  return flag; 
}

function validateSearch ()
{
  let s = document.getElementById("SearchID").value; 
  if (s < 0) { alert ("Search ID is invalid"); return false;}
  else return true; 
}

var studentInfo = new Array(6);
for (var i = 0; i < studentInfo.length; i++)
{
  studentInfo[i] = new Array(9);
}
var arr2=localStorage.getItem('myvalue');
var arr3=JSON.parse(arr2);

var x=0;
for(var i=0;i<6;i++)
{
  for(var j=0;j<9;j++)
  {
    studentInfo[i][j]=arr3[x];
    x++;
  }
}

function search()
{
  let id = (document.getElementById('SearchID').value);
  console.log(id);

  let name = document.getElementById('n').value;
  let studID = document.getElementById('id').value;
  let Gpa = document.getElementById('stud_gpa').value;
  let lvl = document.getElementById('lvl').value;
  let dept = document.getElementById('dep').value;
  let st = document.getElementById('stat').value;
  let bd = document.getElementById('BD').value;
  let num = document.getElementById('num').value;
  let email = document.getElementById('email').value;
  
  var found = false; 
  for (var i = 0; i < 6; i++)
  {
    if (id == studentInfo[i][1])
    {
      found = true; 
      bd.innerHTML = studentInfo[i][6];
      Gpa.innerHTML = studentInfo[i][5];
      name.innerHTML=studentInfo[i][0];
      studID.innerHTML=studentInfo[i][1];
      st.innerHTML=studentInfo[i][2]; 
      lvl.innerHTML = studentInfo[i][3]; 
      dept.innerHTML=studentInfo[i][4];
      num.innerHTML=studentInfo[i][7];
      email.innerHTML=studentInfo[i][8];
    }
  }
  if (found == false  && validateSearch())
  {
    alert("Student ID doesn't exist");
  }
}

function SaveEdits ()
{
  if (inputValidation() && validateSearch())
  {  window.alert("Edits are saved successfully! ");
}
}


function confirmDelete()
{
confirm("Are you sure you wants to delete this student? ");
}
