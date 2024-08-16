CREATE DATABASE api1;
\c api1;
CREATE TABLE categorys (
    id SERIAL PRIMARY KEY,
    name TEXT
);
CREATE TABLE phones (
    id SERIAL PRIMARY KEY,
    name TEXT,
    price INT,
    descripton TEXT,
    category_id INT REFERENCES categorys(id)
);

