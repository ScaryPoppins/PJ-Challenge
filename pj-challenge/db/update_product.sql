UPDATE pj_product SET
name = $2, 
image_url = $3,
description = $5,
price = $6

WHERE product_id = $1;