
CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
 id INTEGER not null auto_increment,
	nameBurger varchar(45),
    is_devoured BOOLEAN DEFAULT false,

 PRIMARY key(id)
)


