const dotenv = require('dotenv')
const Twitter = require('twitter')
const CronJob = require("cron").CronJob

dotenv.config({ path: './config.env'});

const twitterClient = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

const tweet_bomdia = async () => 
    twitterClient.post('statuses/update', {status: 'bom dia @nalinhane, boa aula hoje ❤️'},  function(error, tweet, response) {
        if(error) throw error;
})

const tweet_bomdia_segunda = async () => 
      twitterClient.post('statuses/update', {status: 'bom dia @nalinhane, boa semana e boa aula hoje ❤️'},  function(error, tweet, response) {
          if(error) throw error;
})

const tweet_bomdia_quarta = async () => 
      twitterClient.post('statuses/update', {status: 'bom dia @nalinhane, aguenta que já chegamos no meio da semana 😅❤️'},  function(error, tweet, response) {
          if(error) throw error;
})

const tweet_bomdia_sexta = async () => 
      twitterClient.post('statuses/update', {status: 'bom dia @nalinhane, sextooooooouuu bebe 🥳❤️'},  function(error, tweet, response) {
          if(error) throw error;
})

const tweet_bomdia_fds = async () => 
      twitterClient.post('statuses/update', {status: 'bom dia @nalinhane, aproveite seu dia ❤️'},  function(error, tweet, response) {
          if(error) throw error;
})

const tweet_boanoite = async () => 
      twitterClient.post('statuses/update', {status: 'boa noite @nalinhane , durma bem ❤️'},  function(error, tweet, response) {
          if(error) throw error;
})

const job0 = new CronJob("0 7 * * 2,4", () => {
    console.log('Bom dia sendo enviado!')
    tweet_bomdia()
})

const job1 = new CronJob("0 7 * * 1", () => {
    console.log('Bom dia de segunda sendo enviado!')
    tweet_bomdia_segunda()
})

const job2 = new CronJob("0 7 * * 3", () => {
    console.log('Bom dia de quarta sendo enviado!')
    tweet_bomdia_quarta()
})

const job3 = new CronJob("0 7 * * 5", () => {
    console.log('Bom dia de sexta sendo enviado!')
    tweet_bomdia_sexta()
})

const job4 = new CronJob("0 10 * * 0,6", () => {
    console.log('Bom dia do fim de semana sendo enviado!')
    tweet_bomdia_fds()
})

const job5 = new CronJob("30 22 * * 0-6", () => {
    console.log('Boa noite sendo enviado!')
    tweet_boanoite()
})

job0.start()
job1.start()
job2.start()
job3.start()
job4.start()
job5.start()