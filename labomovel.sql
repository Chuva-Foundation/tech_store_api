#criar db
CREATE DATABASE labomovel_db;

#criar tabela
CREATE TABLE Users (
    id SERIAL PRIMARY KEY, 
    Name TEXT NOT NULL,
    Username TEXT NOT NULL,
    Email TEXT NOT NULL UNIQUE,
    Password TEXT NOT NULL,
    Is_admin BOOLEAN NOT NULL,
    Gender TEXT NOT NULL,
    Birth DATE
);



CREATE TABLE Categories (
    id SERIAL PRIMARY KEY, 
    Name TEXT NOT NULL 
);

CREATE TABLE Products (
    id SERIAL PRIMARY KEY, 
    Name TEXT NOT NULL,
    Price INTEGER,
    Categories_id INTEGER ,
    IsActive BOOLEAN NOT NULL
);

alter table Products 
    add constraint fk_Products_Category
    foreign key (Categories_id) 
    REFERENCES Categories (id);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY, 
    Name TEXT NOT NULL 
);

CREATE TABLE Cart (
    id SERIAL PRIMARY KEY, 
    Users_id INTEGER,
    Products_id INTEGER,
    Quantity INTEGER,
    Price INTEGER  
);

alter table Cart
    add constraint fk_Cart_Users
    foreign key (Users_id) 
    REFERENCES Users (id);

alter table Cart
    add constraint fk_Cart_Produts
    foreign key (Products_id) 
    REFERENCES Products (id);

  
CREATE TABLE Phones 
( 
  id SERIAL PRIMARY KEY,
  Number INTEGER,
  Users_id integer
);

alter table Phones 
    add constraint fk_Phones_Users
    foreign key (Users_id) 
    REFERENCES Users (id);