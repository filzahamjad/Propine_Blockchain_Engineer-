'use strict';

const fs = require('fs');
    var sumWithdraw = 0;
    var sumDeposit = 0;

    let rawdata = fs.readFileSync('./transactions.json');
    let Transaction = JSON.parse(rawdata);

// for a token and given date returning the portfolio value
function PortfolioValueDate(token,givenDate){
    for(var i=0;i<Transaction.length;i++){
        var date = new Date(Transaction[i]['timestamp']*1000);
        var  date2 = date.getDate()+ "/"+(date.getMonth()+1)+ "/"+date.getFullYear()
        if(date2 === givenDate && Transaction[i]['token']===token)
        {
            if(Transaction[i]['transaction_type']==='WITHDRAWAL'){
            sumWithdraw+= parseFloat(Transaction[i]['amount'])}
            if(Transaction[i]['transaction_type']==='DEPOSIT'){
                sumDeposit+= parseFloat(Transaction[i]['amount'])}
        }
    }
    var portfolio = sumDeposit - sumWithdraw;
    TokenValueUSD();
    async function TokenValueUSD() {
        const url = `https://min-api.cryptocompare.com/data/price?fsym=`+token+`&tsyms=USD&api_key=6f1b51ff9a80af897502d3bd3b3c5cb2cd2358d32532655c8fdf0034d883071d`;
        const response = await fetch(url);
        const price = await response.json();
        console.log(token,'portfolio value in USD' ,price['USD']*portfolio , "on date", givenDate);
    }

}

// for a token returning the portfolio value
function PortfolioValue(token){
    for(var i=0;i<Transaction.length;i++){
        if(Transaction[i]['token']===token){
            if(Transaction[i]['transaction_type']==='WITHDRAWAL'){
            sumWithdraw+= parseFloat(Transaction[i]['amount'])}
            if(Transaction[i]['transaction_type']==='DEPOSIT'){
                sumDeposit+= parseFloat(Transaction[i]['amount'])}
            }
    }
    var portfolio = sumDeposit - sumWithdraw;
    TokenValueUSD();
    async function TokenValueUSD() {
        const url = `https://min-api.cryptocompare.com/data/price?fsym=`+token+`&tsyms=USD&api_key=6f1b51ff9a80af897502d3bd3b3c5cb2cd2358d32532655c8fdf0034d883071d`;
        const response = await fetch(url);
        const price = await response.json();
        console.log(token,'latest portfolio value in USD' ,price['USD']*portfolio);
    }
}
               
// Given no parameters, return the latest portfolio value per token in USD

const allTokens = ()=>{

    PortfolioValue('ETH')
    PortfolioValue('BTC')
    PortfolioValue('XRP')

}

// Given a token, return the latest portfolio value for that token in USD

const specificToken=(token)=>{

    PortfolioValue(token['token'])

}

// Given a date, return the portfolio value per token in USD on that date

const specificTime=(time)=>{

    PortfolioValueDate('ETH',time['date'])
    PortfolioValueDate('BTC',time['date'])
    PortfolioValueDate('XRP',time['date'])
}

// Given a date and a token, return the portfolio value of that token in USD on that date

const specificTimeToken=(token)=>{

    PortfolioValueDate(token['token'],token['date'])

}

module.exports = {
    allTokens,
    specificToken,
    specificTime,
    specificTimeToken
}