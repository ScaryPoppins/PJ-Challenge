INSERT INTO pj_product
(name, image_url, description, price)

VALUES($1, $2, $3, $4);

SELECT * FROM pj_product;