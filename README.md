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
and the execute
`npx sequelize db:migrate`

```

 ## DB Design
  - Airplane Table
  - Flights
  - Airport
  - City
   
  - A flight belong to an airplane but one airplane can be used in multiple flights
  - A city has many Airport but one airport belongs to a city
  - one airport can have many flight , but a flight belongs to one airport


##Tables

###City -> id,name,created_at,updated_at
###Airport ->id,name,address,city_id,created_at,updated_at
   Relationship -> City has many airport and Airport belong to a city(one to many)
```

npx sequelize model:generate --name Airport --attributes name:String,address:String,CityId:integer
```
 
  
  