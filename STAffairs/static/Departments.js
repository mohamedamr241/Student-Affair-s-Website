const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})    
    
alert("Try IDs: 20200200, 20200569, 20200145, 20200147, 20200371, 20200467");

function sv(){ 
  alert("Changes Saved Successfully"); }

function validateSearch ()
{
  let s = document.getElementById("srch").value; 
  if (s < 0) { return false; }
  else return true; 
}

function chnge() {
      let srch = parseInt(document.getElementById("srch").value);
      console.log(srch);
      let x = document.getElementById("n");
      let y = document.getElementById("id");
      let z = document.getElementById("lvl");

      switch (srch) {
        case 20200200:
          x.innerHTML = "Zeyad Diaa Eldin Refeat";
          y.innerHTML = "20200200";
          z.innerHTML = "3rd Level";
          break;
        case 20200569:
          x.innerHTML = "Mai Mostafa Amin";
          y.innerHTML = "20200569";
          z.innerHTML = "3rd Level";
          break;
        case 20200145:
          x.innerHTML = "Habiba Mohamed Mohamed Hassan";
          y.innerHTML = "20200145";
          z.innerHTML = "3rd Level";
          break;
        case 20200147:
          x.innerHTML = "Habiba Yasser Saied";
          y.innerHTML = "20200147";
          z.innerHTML = "3rd Level";
          break;
        case 20200371:
          x.innerHTML = "Fadia khaled Abd El Hady";
          y.innerHTML = "20200371";
          z.innerHTML = "3rd Level";
          break;
        case 20200467:
          x.innerHTML = "Mohamed Amr Abd El Fattah";
          y.innerHTML = "20200467";
          z.innerHTML = "3rd Level";
          break;
        default:
          if (validateSearch() == false)
          { alert ("Search ID is invalid");}
          else {alert("Student id doesn't exist or he didnt pass 2nd level yet!");}
      }
    }