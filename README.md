# Propine_Blockchain
## How to Use
### 1. Open Project in an IDE
### 2. run command ```node CSVtoJSON.js```
this converts the csv file to json file and makes it easier to get a specific record and perform any kind of operation on it.
### 3. Given no parameters, return the latest portfolio value per token in USD
run command ```node command.js details```
### 4. Given a token, return the latest portfolio value for that token in USD
token: ETH,BTC,XRP
run command ```node command.js specific <token>```
### 5. Given a date, return the portfolio value per token in USD on that date
date in the format date/month/year
run command ```node command.js date <date>```
### 6. Given a date and a token, return the portfolio value of that token in USD on that date
token: ETH,BTC,XRP
date in the format date/month/year
run command ```node command.js tokenAndDate <token> <date>```
