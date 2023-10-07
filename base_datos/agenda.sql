CREATE database db_agenda;
USE db_agenda;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255)
);


INSERT INTO contacts (name, phone, email) VALUES 
  ('Nombre1', '123456789', 'nombre1@example.com'),
  ('Nombre2', '987654321', 'nombre2@example.com'),
  ('Nombre3', '555555555', 'nombre3@example.com');
  
  SELECT * FROM contacts;
