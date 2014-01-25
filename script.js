/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.api.login(user_object)
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

	codepen.objects.User =  
	{
		name: null,
		email: null,
		username: null,
		password: null,
		is_logged_in: false
	}
/*	

		...: false,
		error: ''
	

	var NewUser = Object.create(codepen.objects.user, {
		firstname}
*/





	//Hide SignUp
	$(".signup-form").hide();

	//Show SignUp
	$(".signup-form-btn").on("click", function() {
		$(".login-form").slideUp();
		$(".signup-form").slideDown();

		$(".login-form-btn").removeClass("active");
		$(".signup-form-btn").addClass("active");
	});

	//Show LogIn
	$(".login-form-btn").on("click", function() {
		$(".signup-form").slideUp();
		$(".login-form").slideDown();

		$(".signup-form-btn").removeClass("active");
		$(".login-form-btn").addClass("active");
	});

	//Step 2

	//Listen for click on the login button
	$(".btn-login").on("click", function() {

	//Grab the text from the username field, pass and store in var
	//instantiate an object with the u / p

		var user = $("#login-username-field").val();
		var pass = $("#login-password-field").val();
		
		var user = {
			username: user,
			password: pass
		};

	    //console.log("User", user);

		//Call the login method and pass it our previosly insitantiated object an handle the response

		var res = codepen.api.login(user);

		//console.log(codepen.api.login(user));

		if (res.success) {
			console.log("Welcome: "+user.username);
			$(".login-form .form-feedback").html("Welcome " + user.username+ "!!");
		} else {
			$(".login-form .form-feedback").html(res.error + "-> User: " + user.username + "/******");
			console.log(res.error + "->" + user+ " / "+ pass);

			//Clear Inputs
			$("#login-username-field").val("");
			$("#login-password-field").val("");
		}
	});

		$(".btn-signup").on("click", function() {
			var newuser = {};
			newuser.name = $("#signup-name-field").val();
			newuser.email = $("#signup-email-field").val();
			newuser.username = $("#signup-username-field").val();
			newuser.password = $("#signup-password-field").val();

			var res= codepen.api.signup(newuser);

			if (res.success) {
				$(".signup-form .form-feedback").html("Welcome " + newuser.name+ "!!");
			} else {
				$(".signup-form .form-feedback").html(res.error);
			}

		});
});