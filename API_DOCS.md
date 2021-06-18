# API Documentation
All api documentation can be found here
## REGISTER
* ***URL***
	`/api/register`

* ***Method***
	`POST`

* ***Request Body***
	Use json format for request body, example:
	```json
	{ 
		"fullname": "Ach. Jailani", 
		"email": "achjailani@gmail.com", 
		"phone": "087750898766", 
		"password": "helloworld", 
		"password_confirmation": "helloworld" 
	}
	```

	The above fields are required.

## LOGIN
* ***URL***
	`/api/login`

* ***Method***
	`POST`

* ***Request Body***
	Use json format for request body, example:
	```json
	{ 
		"email": "achjailani@gmail.com", 
		"password": "helloworld", 
	}
	```

	The above fields are required.

## GET ALL USERS
* ***URL***
	`/api/users`

* ***Method***
	`GET`

* ***Authorization Header***
	'Authorization: Bearer <acccess_token>', change the access token with token you get in login process

## USER SEND A MESSAGE TO ANOTHER USER
* ***URL***
	`/api/messages/send/:userId`
	example: 'http://127.0.0.1:8080/api/messages/send/4'
	`userId` is an Id for user target (not sender)

* ***Method***
	`POST`

* ***Authorization Header***
	'Authorization: Bearer <acccess_token>'

* ***Request Body***
	Use json format for request body, example:
	```json
	{ 
		"message": "Hi, how are you?", 
	}
	```

	The above field is required.

## USER'S MESSAGES IN A CONVERSATION
* ***URL***
	`/api/messages/thread/:threadId`
	example: 'http://127.0.0.1:8080/api/messages/thread/2'
	`threadId` is an Id for a conversation ( a room )

* ***Method***
	`GET`

* ***Authorization Header***
	'Authorization: Bearer <acccess_token>'

## USER REPLIES TO A CONVERSATION
* ***URL***
	`/api/messages/reply/:threadId`
	example: 'http://127.0.0.1:8080/api/messages/reply/2'
	`threadId` is an Id for a conversation ( a room )

* ***Method***
	`POST`

* ***Request Body***
	Use json format for request body, example:
	```json
	{ 
		"message": "Hi too, fine, what about you ?", 
	}
	```

	The above field is required.

* ***Authorization Header***
	'Authorization: Bearer <acccess_token>'

## LIST OF USER'S Conversations
* ***URL***
	`/api/messages`
	example: 'http://127.0.0.1:8080/api/messages'

* ***Method***
	`GET`

* ***Authorization Header***
	'Authorization: Bearer <acccess_token>'