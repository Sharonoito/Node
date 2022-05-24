const client=require('./dbconfig')
// var sql=require('mssql')
client.connect()

const getProducts =(request,res)=> {
  
        // let conn=await sql.connect();
     client.query('SELECT * FROM Products',(error,result)=>{
         if(error){
             throw error
         }res.status(200).json(result.rows)
         
     });
  
    
    
}
module.exports={
    getProducts:getProducts
}