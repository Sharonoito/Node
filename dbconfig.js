const {Client}=require('pg');
const client=new Client({
    host:"localhost",
    port:"5432",
    user:"postgres",
    password:"37000198",
    database:"VoiceRecorder",
})

module.exports=client