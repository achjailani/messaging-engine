# Messaging API built on NodeJs

Simple messaging API built on NodeJs runtime and comes with authentication feature, it's not a real-time system and it may have a lot of flaws, but it'll be continuously developed

## Installation

Before making an installation, make sure you have the following requirements:

- Node Js installed on your machine

- NPM (Node Package Manager), basically it'll installed automatically with the Node Js
- MySQl database
- Git installed on your computer

To install the project, here is the step

- Clone the project with command `git clone https://github.com/achjailani/messaging-engine.git`
- Change directory, I assume the folder name is messaging-engine `cd messaging-engine`
- Install required packages `npm install`, wait for till it done
- Duplicate `.env.example` file and rename it to `.env`
- Configure the database connection and other configuraions in `.env` file
- Migrate the miration files to generate all required tables `npx sequelize db:migrate`
- And here we go, now we can run it with command `npm run happy5:dev` for development and and `npm run happy5:prod` for production

## API Documentation

API Documentation could be found [here](https://github.com/achjailani/messaging-engine/blob/develop/API_DOCS)
