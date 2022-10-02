ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';

grant all on *.* to 'root'@'%';

flush privileges;

use nodedb;

CREATE TABLE IF NOT EXISTS People (
  id bigint primary key NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);