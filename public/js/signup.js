$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var nameInput = $("input#name-input");
  var userNameInput = $("input#userName-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      userName: userNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData.name);

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.name,
      userData.userName,
      userData.email,
      userData.password
    );
    emailInput.val("");
    passwordInput.val("");
    nameInput.val("");
    userNameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(name, userName, email, password) {
    $.post("/api/signup", {
      name: name,
      userName: userName,
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
