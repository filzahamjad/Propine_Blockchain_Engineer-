const program = require('commander')
const{
    allTokens,
    specificToken,
    specificTime,
    specificTimeToken

} = require('./index')

program
    .version('1.0.0')
    .description('Blockchain test')


// Given no parameters, return the latest portfolio value per token in USD
// Given a token, return the latest portfolio value for that token in USD
// Given a date, return the portfolio value per token in USD on that date
// Given a date and a token, return the portfolio value of that token in USD on that date

program
    .command('details')
    .alias('t')
    .description('Given no parameters, return the latest portfolio value per token in USD')
    .action(()=>{
        allTokens({});
    });

program
    .command('specific <token>')
    .alias('to')
    .description('Given a token, return the latest portfolio value for that token in USD')
    .action((token)=>{
        specificToken({token});
});

program
    .command('date <date>')
    .alias('d')
    .description('Given a date, return the portfolio value per token in USD on that date')
    .action((date)=>{
        specificTime({date});
});

program
    .command('tokenAndDate <token> <date>')
    .alias('td')
    .description('Given a date and a token, return the portfolio value of that token in USD on that date')
    .action((token,date)=>{
        specificTimeToken({token,date});
});


program.parse(process.argv)