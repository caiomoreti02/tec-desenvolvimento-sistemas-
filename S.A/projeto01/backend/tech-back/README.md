CREATE TABLE equipamentos (
    ->     id VARCHAR(36) PRIMARY KEY,
    ->     nome VARCHAR(100) NOT NULL,
    ->     categoria VARCHAR(100) NOT NULL,
    ->     numeroDeSerie INT NOT NULL,
    ->     status VARCHAR(50) NOT NULL,
    ->     dataDeAquisicao VARCHAR(50) NOT NULL
    -> );

    INSERT INTO equipamentos
    -> (id, nome, categoria, numeroDeSerie, status, dataDeAquisicao)
    -> VALUES
    -> ('1', 'Notebook Dell Inspiron', 'Notebook', 1001, 'Em uso', '2025-01-15'),
    -> ('2', 'Mouse Logitech M170', 'Mouse', 2001, 'Disponvel', '2025-02-10'),
    -> ('3', 'Monitor Samsung 24', 'Monitor', 3001, 'Em uso', '2025-03-05');

    SELECT * FROM equipamentos;

    