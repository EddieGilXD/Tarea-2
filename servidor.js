const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Windows@32",
    database: 'BancoDB'
})

const closeConnection = () => {
    connection.end((err)=>{
        if (err){
            console.log("Error al cerrar la conexion: ", err)
        }else{
            console.log("Conexion cerrada")
        }
    })
}

connection.query('SELECT * FROM Cuentas',(err, results, fields)=>{
    if (err){
        console.log("Error en query: ", err)
    } else{
        console.log("Listado de todas las cuentas creadas: ", results)        
    }    
})

connection.query('SELECT * FROM Clientes',(err, results, fields) =>{
    if(err){
        console.log("Error en query: ", err)
    } else {
        console.log("Listado de todos los clientes creados: ", results)                
    }    
    closeConnection();
})