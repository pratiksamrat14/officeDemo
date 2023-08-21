
//commmon validator for first name and last name ;
function nameValidator(name,id) {
  const element=document.getElementById(id);
  if (name.length < 2 || name.length > 25) {
    element.style.display='block' ;
     return false ;
  } 
  element.style.display='none' ;
   return true ;
}

//validation of mail address 
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isStrongPassword(password) {
    // Regular expression for strong password validation
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return strongPasswordRegex.test(password);
  }

  //function to detect changes 
function onChangePass(e){
  const flag=isStrongPassword(e.target.value) ;
  const element=document.getElementById('pass-error');
  element.style.display= flag ? 'none' : 'block' ;
  
}

function confirmPassword()
{
   const confm = document.getElementById("confirm-pass").value ;
   const pass=document.getElementById("create-pass").value ;
   const element=document.getElementById('confirm-error');

   element.style.display= pass===confm ? 'none':'block' ;

   return pass===confm ;

}

//validation fo rmobile number ;
function isValidMobileNumber(mobileNumber) {
    // Regular expression for mobile number validation
    const mobileNumberRegex = /^[0-9]{10}$/;
  
    return mobileNumberRegex.test(mobileNumber);
  }

  function mobfun(e)
  {
    const flag=isValidMobileNumber(e.target.value);
    const element=document.getElementById('mob-error') ;
    element.style.display=flag ? 'none':'block'  ;

  }


//birthday functions 

function isValidBirthday(dateString) {
    
  const birthday = new Date(dateString);

  
  if (isNaN(birthday)) {
    return false;
  }

  const currentDate = new Date();

  if (birthday > currentDate) {
    return false;
  }

  const minAge = 18;
  const minAgeDate = new Date();
  minAgeDate.setFullYear(currentDate.getFullYear() - minAge);
  if (birthday > minAgeDate) {
    return false;
  }


  return true;
}


//actions you need to perform after submission of the values 
function submitForm(e) {
  e.preventDefault();
  const fname = nameValidator(document.getElementById("fname").value,'fname-error');
  const lname=nameValidator(document.getElementById("lname").value,'lname-error') ;

  const email=isValidEmail(document.getElementById('email').value) ;
  const element=document.getElementById('email-error');
    element.style.display= email  ? 'none' :'block' ;
  
  const pass=isStrongPassword(document.getElementById("create-pass").value) ;
  const confirmPass=confirmPassword() ;

  const mobile=isValidMobileNumber(document.getElementById('mobno').value) ;
   
  const birthdate=isValidBirthday(document.getElementById('dob').value);
  const element1=document.getElementById('dob-error') ;
  element1.style.display= birthdate ?'none':'block' ;
  

}



