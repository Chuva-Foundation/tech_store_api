#criar db
CREATE DATABASE labomovel_db;

#criar tabela
CREATE TABLE Users (
    id SERIAL PRIMARY KEY, 
    Name TEXT NOT NULL,
    Username TEXT NOT NULL,
    Email TEXT NOT NULL UNIQUE,
    Password TEXT NOT NULL,
    Isadmin BOOLEAN,
    Gender TEXT NOT NULL,
    Birth DATE
);

CREATE TABLE Contact (
    id SERIAL PRIMARY KEY, 
    Number INTEGER,
    Users_id INTEGER FOREIGN KEY,
    
);

CREATE TABLE Category (
    id SERIAL PRIMARY KEY, 
    Name TEXT NOT NULL,  
);

CREATE TABLE Products (
    id SERIAL PRIMARY KEY, 
    Name TEXT NOT NULL,
    Price INTEGER,
    Category_id INTEGER ,
    IsActive BOOLEAN
);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY, 
    Users_id INTEGER FOREIGN KEY,  
);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY, 
    Order_id INTEGER FOREIGN KEY,
    Products_id INTEGER FOREIGN KEY,
    Quantity INTEGER,
    Price INTEGER  
);