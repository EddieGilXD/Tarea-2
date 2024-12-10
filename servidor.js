const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',    
    database: 'BancoDB'
})

connection.query('SELECT * FROM Clientes',(err, results, fields)=>{
    if (err){
        console.log("Error en query", err)
    } else{
        console.log("Resultados: ", results)
        console.log("Campos: ", fields)
    }
})