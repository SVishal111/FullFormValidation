console.log("Hello World!");

// Form Declaration Starts
// First Part Form
var form = document.getElementById("form");

var fname = document.getElementById("fname");
var lname = document.getElementById("lname");

var email = document.getElementById("email");

var gender = document.getElementsByClassName("gender");

var numCode = document.getElementById("numCode");
var number = document.getElementById("number");

var dob = document.getElementById("dob");

var qualification = document.getElementsByClassName("qualification");

var address = document.getElementById("address");

// Second Part Form
// var cityNameOp = document.getElementById("cityNameOp");
// var pincode = document.getElementById("pincode");

var stateNameOp = document.getElementById("stateNameOp");

var mTongue = document.getElementById("mTongue");

var fatherFName = document.getElementById("fatherFName");
var fatherLName = document.getElementById("fatherLName");

var motherFName = document.getElementById("motherFName");
var motherLName = document.getElementById("motherLName");

var income = document.getElementById("income");

var declareCheckBox = document.getElementById("declareCheckBox");
// Form Declaration Ends

// Submit Button
var btn = document.getElementById("btn");

// Refresh Button
// var btnRefresh = document.getElementById("btnRefresh");

// btnRefresh.addEventListener("click", function() {
//     window.location.reload();
// });

// PreventDefault and CheckData and SeparatePage Functions
var a = 0;

var i = 0;
var genderVal = "";
var qualificationVal = "";

form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkData();

    if(a >= 17) {
        display();
    }
    else {
        // alert("Fill Every Column!");
        console.log(a);
        a = 0;
    }
});


// CheckData Function Starts
function checkData() {
    var fnameCD = fname.value.trim();
    var lnameCD = lname.value.trim();
    var emailCD = email.value.trim();
    var numberCD = number.value.trim();
    var addressCD = address.value.trim();
    // var pincodeCD = pincode.value.trim();
    var mTongueCD = mTongue.value.trim();
    var fatherFNameCD = fatherFName.value.trim();
    var fatherLNameCD = fatherLName.value.trim();
    var motherFNameCD = motherFName.value.trim();
    var motherLNameCD = motherLName.value.trim();
    var incomeCD = income.value.trim();

    var genderCD = gender.value;
    var numCodeCD = numCode.value;
    var dobCD = dob.value;
    var qualificationCD = qualification.value;
    // var cityNameOpCD = cityNameOp.value;
    var stateNameOpCD = stateNameOp.value;
    var declareCheckBoxCD = declareCheckBox.value;

    // To Check Name
    if (fnameCD === "") {
        setError2For(fname, "*Invalid Blank Name!")
    } else {
        setSuccess2For(fname);
        setSuccess2For(lname);
    }

    // To Check Email Address
    if(emailCD === "") {
        setErrorFor(email, "*Invalid Blank Email!");
    } else if(!isEmail(emailCD)) {
        setErrorFor(email, "*Error-Structure!");
    } else {
        setSuccessFor(email);
    }

    // To Check Gender
    for(i = 0; i<gender.length; i++) {
        if(gender[i].checked) {
            genderVal = gender[i].value;
            setSuccess3For(genderVal);
        }
    }

    if(numCodeCD === "+00") {
        setError2For(numCode, "*Invalid Blank Code or/and Number");
    } else {
        setSuccess2For(numCode);
    }

    // To Check Number
    if(numberCD === "") {
        setError2For(number, "*Invalid Blank Number!");
    } else if(numberCD.length < 10 || numberCD.length > 10) {
        setError2For(number, "*Invalid Number Length")
    } else {
        setSuccess2For(number);
    }

    // To Check Date of Birth
    if(dobCD === "") {
        setErrorFor(dob, "*Invalid Blank Date of Birth!");
    } else {
        setSuccessFor(dob);
    }

    // To Check Qualification
    for(i = 0; i<qualification.length; i++) {
        if(qualification[i].checked) {
            qualificationVal = qualification[i].value;

            setSuccess3For(qualificationVal);
        }
    }

    // To Check Address
    if(addressCD == "") {
        setErrorFor(address, "*Invalid Blank Address!");
    } else {
        setSuccessFor(address);
    }

    // To Check City Name | Dismantled
    // if(cityNameOpCD == "") {
    //     setError2For(cityNameOp, "*Invalid Blank City Name")
    // } else {
    //     setSuccessFor(cityNameOp);
    // }

    // To Check Pincode | Dismantled
    // if(pincodeCD == "") {
    //     setError2For(pincode, "*Invalid Blank City & PINCODE!");
    // } else if(pincodeCD.length < 5 || pincodeCD.length > 7) {
    //     setError2For(pincode, "*Invalid Pincode");
    // } else {
    //     setSuccessFor(pincode);
    // }

    // To Check Country Name
    if(stateNameOpCD == "") {
        setErrorFor(stateNameOp, "*Invalid Blank State Name")
    } else {
        setSuccessFor(stateNameOp);
    }

    // To Check Mother Tongue
    if(mTongueCD == "") {
        setErrorFor(mTongue, "*Invalid Blank Mother Tongue!");
    } else {
        setSuccessFor(mTongue);
    }

    // To Check Father Name
    if (fatherFNameCD === "") {
        setError2For(fatherFName, "*Invalid Blank Father Name!")
    } else {
        setSuccess2For(fatherFName);
        setSuccess2For(fatherLName);
    }

    // To Check Mother Name
    if (motherFNameCD === "") {
        setError2For(motherFName, "*Invalid Blank Mother Name!")
    } else {
        setSuccess2For(motherFName);
        setSuccess2For(motherLName);
    }

    // To Check Income
    if(incomeCD === "") {
        setErrorFor(income, "*Invalid Blank Income!");
    } else if(incomeCD <0) {
        setErrorFor(income, "*Invalid Negative Income!")
    } else {
        setSuccessFor(income);
    }

    // To Check Declare Checkbox
    if (declareCheckBox.checked) {
        setSuccess2For(declareCheckBox);
    }  else {
         setError2For(declareCheckBox, "*Invalid Blank Declare CheckBox!");
    }


    // Success Functions
    function setSuccessFor(input) {
        var formAction = input.parentElement;
        formAction.className = "formAction success";

        a += 1;
    }

    function setSuccess2For(input) {
        var formAction = input.parentElement.parentElement;
        formAction.className = "formAction success";

        a += 1;
    }

    function setSuccess3For(input) { //Experimental Practices
        // var formAction = input.parentElement.parentElement.parentElement;
        // formAction.className = "formAction success";

        a += 1;
    }


    // Error Functions
    function setErrorFor(input, message) {
        var formAction = input.parentElement;
        var small = formAction.querySelector("small");

        formAction.className = "formAction error";
        small.innerText = message;
    }

    function setError2For(input, message) {
        var formAction = input.parentElement.parentElement;
        var small = formAction.querySelector("small");

        formAction.className = "formAction error";
        small.innerText = message;
    }

    function setError3For(input, message) {
        // var formAction = input.parentElement.parentElement.parentElement;
        // var small = formAction.querySelector("small");

        // formAction.className = "formAction error";
        // small.innerText = message;
    }


    // Email Checking Function
    function isEmail(email) {
        return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    console.log("If it Runs, it Runs!");
}


// Display Function
function display() {
    document.write("Name:           "+fname.value+"&nbsp;"+lname.value+"<br>");
    document.write("Email:          "+email.value+"<br>");
    document.write("Gender:         "+genderVal+"<br>");
    document.write("Number:         "+numCode.value+"&nbsp;"+number.value+"<br>");
    document.write("Date of Birth:  "+dob.value+"<br>");
    document.write("Qualification:  "+qualificationVal+"<br>");
    document.write("Address:        "+address.value+"<br>");
    document.write("Country:        "+stateNameOp.value+"<br>");
    document.write("Mother Tongue:  "+mTongue.value+"<br>");
    document.write("Father' Name:   "+"Mr. "+fatherFName.value+"&nbsp;"+fatherLName.value+"<br>");
    document.write("Mother' Name:   "+"Mrs. "+motherFName.value+"&nbsp;"+motherLName.value+"<br>");
    document.write("Income:         "+"Rs. "+income.value+"<br>");
}

console.log("Bye!");