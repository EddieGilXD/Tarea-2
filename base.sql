CREATE DATABASE IF NOT EXISTS BancoDB;

CREATE TABLE IF NOT EXIST Clientes (
    id_cliente INT PRIMARY KEY,
    nombre VARCHAR(50),
    ciudad VARCHAR(50)
);

CREATE TABLE IF NOT EXIST Cuentas (
    id_cuenta INT PRIMARY KEY,
    id_cliente INT,
    tipo_cuenta VARCHAR(50),
    saldo DECIMAL (10,2),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

INSERT INTO Clientes (id_cliente, nombre, ciudad) VALUES
(1, 'Mario', 'Guatemala'),
(2, 'Fernanda', 'Antigua Guatemala'),
(3, 'Carlos', 'Peten'),
(4,  'Ana', 'Solola'),
(5, 'Ricardo', 'Reu');

INSERT INTO Cuentas (id_cuenta, id_cliente, tipo_cuenta, saldo) VALUES
(10, 1, 'Monetaria', 1000.00),
(20, 2, 'Ahorro', 300.00),
(30, 3, 'Monetaria', 900.00),
(40, 4, 'Monetaria', 90.51),
(50, 4, 'Monetaria', 750.00);