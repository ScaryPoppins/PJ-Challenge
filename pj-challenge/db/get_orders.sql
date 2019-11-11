SELECT  o.items_ordered, o.total, u.first_name, u.last_name, o.orders_id
FROM pj_users u 
JOIN pj_orders o ON u.users_id = o.users_id
WHERE o.users_id = $1;
