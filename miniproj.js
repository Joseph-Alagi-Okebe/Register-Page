
    let id = (id) => document.getElementById(id);

    let classes = (classes) => document.getElementsByClassName(classes);
    
    let firstName = id("firstName"),
      lastName = id("lastName"),
      email = id("email"),
      phoneNumber = id("phoneNumber"),
      password = id("password"),
      form = id("form"),
      errorMsg = classes("error"),
      successIcon = classes("success-icon"),
      failureIcon = classes("failure-icon");
    
    // Adding the submit event Listener
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    
      engine(firstName, 0, "First name cannot be blank");
      engine(lastName, 1, "Last name cannot be blank");
      engine(email, 2, "Email cannot be blank");
      engine(phoneNumber, 3, "Phone number cannot be blank");
      engine(password, 4, "Password cannot be blank");
    });
 
    // engine function which will do all the works
    
    let engine = (id, serial, message) => {
      if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
    
        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
      } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
    
        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
      }
    };
    // const firstName = document.getElementById("firstName")
// const lastName = document.getElementById("lastName")
// const emailAddress = document.getElementById("emailAddress")
// const phoneNumber = document.getElementById("phoneNumber")
// const form = document.getElementById("form")
// const errorElement = document.getElementById("error")



// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (firstName.value == null) {
//         messages.push ('firstName is required')
//     }
//    if (messages.length > 10){
//     e.preventDefault()
//     errorElement.innerText = messages.join(',  ')
//    }
   
// }
//     )


