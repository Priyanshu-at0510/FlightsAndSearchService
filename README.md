# Welcome to Flight service

## Project Setup
 - clone the project on your local
 - execute `npm install` on the same path as of your root directory of the downloaded project
 - Create a `.env` file in the root directory and add the following enviornment variable
  - `PORT=3000`
 - inside the `src/config` folder create a new file `config.json` and then add the following piece of json 

 ```
 { 
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

  
}

 ```
 -  once you have added your db config as listed above ,go to the src folder from your terminal and execute `npx sequelize db:create`