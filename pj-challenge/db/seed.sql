-- CREATE TABLE pj_users(
-- users_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(100) NOT NULL, 
-- last_name VARCHAR (100) NOT NULL, 
-- email VARCHAR (200) NOT NULL, 
-- password VARCHAR (200) NOT NULL, 
-- is_admin BOOLEAN DEFAULT false
-- )
 

-------------------------------------------------------------------------------


-- CREATE TABLE pj_product
-- (
-- id SERIAL PRIMARY KEY,
-- name VARCHAR(200),
-- image_url TEXT,
-- description TEXT,
-- price NUMERIC
-- );

-- ALTER TABLE pj_product
--   RENAME COLUMN id TO product_id;



-------------------------------------------------------------------------------

-- CREATE TABLE pj_orders
-- (
-- orders_id SERIAL PRIMARY KEY,
-- quantity INT[],
-- total DECIMAL,
-- delivered BOOLEAN DEFAULT false,
-- address TEXT,
-- city VARCHAR(300),
-- state VARCHAR(30),
-- zip_code INT,
-- notes TEXT[],
-- product_id INTEGER REFERENCES pj_product(product_id),
-- users_id INTEGER REFERENCES pj_users(users_id)
-- );

-- ALTER TABLE pj_orders
-- ADD COLUMN items_ordered TEXT