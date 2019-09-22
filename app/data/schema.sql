DROP DATABASE IF EXISTS pokeTrainers_db;

CREATE DATABASE pokeTrainers_db;

USE pokeTrainers_db;

CREATE TABLE trainers (
    id INT AUTO_INCREMENT, 
    PRIMARY KEY (id),
    matchName VARCHAR(30),
    img VARCHAR(30),
    attr VARCHAR(30)
);

CREATE TABLE questions (
    id INT AUTO_INCREMENT, 
    PRIMARY KEY (id),
    question VARCHAR(300)
);
