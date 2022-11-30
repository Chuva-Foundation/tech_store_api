#criar db
CREATE DATABASE labomovel_db;

#criar tabela
CREATE TABLE Users (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    is_admin BOOLEAN NOT NULL,
    gender TEXT NOT NULL,
    birth DATE
);



CREATE TABLE Categories (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE Products (
    id SERIAL PRIMARY KEY, 
    ame TEXT NOT NULL UNIQUE,
    price INTEGER,
    categories_id INTEGER ,
    isActive BOOLEAN NOT NULL
);

alter table Products 
    add constraint fk_Products_Category
    foreign key (Categories_id) 
    REFERENCES Categories (id);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL UNIQUE,
    time TEXT
);

CREATE TABLE Cart (
    id SERIAL PRIMARY KEY, 
    users_id INTEGER,
    products_id INTEGER,
    quantity INTEGER,
    price INTEGER  
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
  number INTEGER,
  users_id integer
);

alter table Phones 
    add constraint fk_Phones_Users
    foreign key (Users_id) 
    REFERENCES Users (id);


CREATE TABLE Products_Ordered 
( 
  id SERIAL PRIMARY KEY,
  order_id integer,
  products_id integer,
  quantity integer,
  price integer
);

alter table Products_Ordered 
    add constraint fk_products_ordered_orders
    foreign key (Order_id) 
    REFERENCES Orders (id);

alter table Products_Ordered 
    add constraint fk_products_ordered_products
    foreign key (products_id) 
    REFERENCES Products (id);