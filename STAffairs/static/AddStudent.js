const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
function check(){
    let x=document.getElementById("lvl").value;
    if(x=="First Level" || x=="Second Level"){
        document.getElementById("dep").setAttribute("disabled", "disabled");
    }
    else{
        document.getElementById("dep").removeAttribute("disabled");
    }
}

function inputValidation() {
    var flag = true;
    var allowedChars = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var n = document.getElementById("Name").value;
    for (var i = 0; i < n.length; i++) {
        if (allowedChars.indexOf(n.charAt(i)) == -1) {
            alert("Student name must contain characters only");
            flag = false;
            break;
        }
    }
    let gpa = document.getElementById("GPA").value;
    if (gpa < 0 || gpa > 4) { alert(" Please Enter a Valid GPA"); flag = false; }
    let Id = document.getElementById("ID").value;
    if (Id < 0 ) { alert(" Please Enter a Valid ID"); flag = false; }

    let phone = document.getElementById("PhoneNum").value;
    if (phone < 0 || phone > 99999999999) { alert("Please Enter a Valid Phone Number"); flag = false; }
    var level=document.getElementByName("Level").value;
    var dept = document.getElementsByName("Department").value;
    if (level == document.getElementByValue("FirstLevel") || level==document.getElementByValue("FirstLevel") ) {
        if (dept != document.getElementByValue("General")) { alert("Student Is Not Allowed To Have a Department Yet"); flag = false; }

    }
    
    return flag;
}
function AddStudent() {
    if (inputValidation()) {
        window.alert("Student Added Successfully! ");
    } 
}




