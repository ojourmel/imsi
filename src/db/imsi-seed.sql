-- @author ojourmel
-- basic test values


SELECT insertrole("composer");
SELECT insertrole("author");
SELECT insertrole("arranger");
SELECT insertrole("publisher");

SELECT insertrole("composition");
SELECT insertrole("collection");

INSERT INTO creator(name, dob, dod) VALUES ("John Doe", "1900-01-01", "2000-01-01");
INSERT INTO creator(name, dob, dod) VALUES ("Jane Doe", "1950-01-01", NULL);
INSERT INTO creator(name) VALUES ("Evil Corp");


INSERT INTO creation(title, year) VALUES ("Hello World", "1920-01-01");
INSERT INTO creation(title, year) VALUES ("GoodBye World", "1980-01-01");
INSERT INTO creation(title, year) VALUES ("Thoughts of the World", "2000-01-01");

INSERT INTO creationrole VALUES (1, 5);
INSERT INTO creationrole VALUES (2, 5);
INSERT INTO creationrole VALUES (3, 6);

INSERT INTO creationcollection VALUES (3, 1);
INSERT INTO creationcollection VALUES (3, 2);

INSERT INTO creationcreatorrole VALUES (1, 1, 1);
INSERT INTO creationcreatorrole VALUES (2, 1, 1);

INSERT INTO creationcreatorrole VALUES (3, 1, 1);
INSERT INTO creationcreatorrole VALUES (3, 2, 2);
INSERT INTO creationcreatorrole VALUES (3, 2, 3);

INSERT INTO creationcreatorrole VALUES (3, 3, 4);
