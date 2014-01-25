/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {

	//Hide SignUp
	$(".signup-form").hide();

	//Show SignUp
	$(".signup-form-btn").on("click", function() {
		$(".login-form").hide();
		$(".signup-form").show();

		$(".login-form-btn").removeClass("active");
		$(".signup-form-btn").addClass("active");
	});

	//Show LogIn
	$(".login-form-btn").on("click", function() {
		$(".signup-form").hide();
		$(".login-form").show();

		$(".signup-form-btn").removeClass("active");
		$(".login-form-btn").addClass("active");
	});


});