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
})

connection.query('SELECT * FROM Clientes INNER JOIN Cuentas ON Clientes.id_cliente = Cuentas.id_cliente', (err, results) =>{
    if (err){
        console.log("Error en query: ", err);
    }else{
        console.log("Listado de todas las cuentas que estan asociadas a clientes: ", results)
    }    
})

connection.query('SELECT * FROM Clientes LEFT JOIN Cuentas ON Clientes.id_cliente = Cuentas.id_cliente WHERE Cuentas.id_cliente IS NULL',(err, results) => {
    if(err){
        console.log("Error en query: ", err);
    }else{
        console.log("Listado de todos los clientes que no tienen cuentas asociadas", results)
    }
    closeConnection();
}) 