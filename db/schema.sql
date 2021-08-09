DROP DATABASE IF EXISTS techblog_db;
CREATE DATABASE techblog_db;


-- SELECT user.name AS Name, post.name AS Title, post.description AS Body, post.date_created AS Date, post.user_id AS Author, comment.content AS Comment, comment.date_created FROM post JOIN comment ON post.user_id = user.id;

-- SELECT employee.first_name AS First, employee.last_name AS Last, current_role.title AS Title, current_role.salary AS Salary, department.department_name AS Department, CONCAT(manager.first_name, " ", manager.last_name) AS Manager FROM employee JOIN current_role ON employee.current_role_id = current_role.id JOIN department ON current_role.department_id = department.id LEFT JOIN employee Manager ON manager.id = employee.manager_id;