# API Documentation
All api documentation can be found here
## REGISTER
* ***URL***
	`/api/register`

* ***Method***
	`POST`

* ***Request Body***
	Use json format for request body, example:
	```{ 
		"fullname": "Ach. Jailani", 
		"email": "achjailani@gmail.com", 
		"phone": "087750898766", 
		"password": "helloworld", 
		"password_confirmation": "helloworld" 
	}```

	The above fields are required.

## LOGIN
* ***URL***
	`/api/login`

* ***Method***
	`POST`

* ***Request Body***
	Use json format for request body, example:
	```{ 
		"email": "achjailani@gmail.com", 
		"password": "helloworld", 
	}```

	The above fields are required.

## GET ALL USERS
* ***URL***
	`/api/users`

* ***Method***
	`GET`

* ***Authorization Header***
	'Authorization: Bearer <acccess_token>', change the access token with token you get in login process

## 
