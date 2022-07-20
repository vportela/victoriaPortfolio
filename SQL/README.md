- postgres, mySQL, SQLite, mongoDB etc are relational database management systems.
Usually when people ask about what database youre using, they mean what management system.

- companies that offer databases:
  * Amazon (AWS)
  * IBM
  * Oracle
  * etc

- Database tables:
containers inside of the database that contains the information

  data lives inside of the table, which lives inside of the database.

- learning CRUD

-Terminal uses a bash SHELL but to write SQL you need to used a SQL shell.

Terminal commands for SQL: (bash)
- psql: get into a postgress shell 
- brew services: gives us a list of our active services
- brew services start [name of the service/application]
- brew services stop [postgresql]

- sql commands:
```sql

-- specifically in the postgress shell
-- backslash is specifically sql \ 
\l -- gives us list of databases
\q --quits postgres and puts you back in the bash shell
\du -- shows all users
\c -- changes which database we are in/connects to a database
\dt -- shows your tables
-- all the above is postgress specific 

CREATE DATABASE insertname; -- the ; must be present, otherwise it wont work.
DROP DATABASE insertname; -- this deletes the database with the name you wrote.
CREATE TABLE person (first_name VARCHAR(255)NOT NULL, age integer NOT NULL, is_happy bool);
ALTER TABLE person ADD last_name VARCHAR(255)NOT NULL; -- how you can add a column to an existing table
SELECT * FROM insertname; -- this is how you select inside the table
SELECT * FROM insertname WHERE something = 'something'; -- (or any other condition) get only data that
  meets this condition
UPDATE insertname SET something = something WHERE something = something;
ex. UPDATE person SET first_name = 'sally' WHERE age = 26;
- = can mean different things depending on context. in the above example, the = in first_name  = 'sally'
is assigning value while age = 26 is creating a condition because it comes after the WHERE keyword
DELETE FROM insertname WHERE something = something;
ex. DELETE FROM person WHERE age = 12;

CREATE TABLE post(id INTEGER PRIMARY KEY, name VARCHAR(255), content TEXT, 
  user_id INTEGER, CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES "user"(id));
  - the above example is making a new table for posts that has a foreign key for the user. so 
    you indicate this by writing the CONSTRAINT key word followed by a name (in this case fk_user or foreign key user)
    the key word FOREIGN KEY(the name of the foreign key) which references the table(column)
 
 Tables need to be related to each other using primary and foreign keys. 
 make use of the 3 basic relationship types
  - one to one
  - one to many
  - many to many

```

POSTGRESQL video notes: 

what is postgres? 
- it is a relational database: which is referring to the math under the hood that makes the database work.
- in this case, it is using relational algebra. 
- sql stands for structured query language.
- POSTICO - gives a nice visual UI for writing SQL, good for beginners. 
- the convention for SQL is to CAPS key words and snake case everything else (things that you name yourself)
- VARCHAR(255) is a text column that has a constraint on size (how long text can be) the number is the max length
- if you try to name a table with what is technically a keyword like "user" or "table", you need to wrap
it in double quotes. so instead of user or table it will be written as "user" or "table".
- you should not pluralize tables. the table should be called *user* not *users* 


# homework:
### CRUD person rows
- Create (multiple persons)
  - ```INSERT INTO person (first_name, last_name, is_happy, age) VALUES ('victoria', 'portela', true, 26);```
- try giving null to cols that aren't nullable (this should not work)
  - yup did not work lol
- creating rows with disordered cols
  - ```INSERT INTO person (last_name, is_happy, age, first_name) VALUES ('inChrist', true, 25, 'brother');```
- creating rows without specifying the cols
  - ```INSERT INTO person VALUES ('big', 45, false, 'meowmeow'); -- works as long as its in the same order as table```
- create multiple rows in 1 single command
  - ```INSERT INTO person VALUES ('big', 22, true, 'meowstopholis'), ('small', 22, false, 'beepboop');```
### READ
- give me all persons in the table
  - ```SELECT * FROM person;```
#### getall persons with certain conditions:
- everyone who's is_happy is NOT null
  - ```SELECT * FROM person WHERE is_happy IS NOT NULL;```
- everyone who's is_happy IS null
  - ```SELECT * FROM person WHERE is_happy IS NULL;```
- everyone who is older than 21
  - ```SELECT * FROM person WHERE age > 21;```
- everyone who's first_name is Victoria
  - ```SELECT * FROM person WHERE first_name = 'victoria';```
### UPDATE
  - updating a specific row's first_name
    - ```UPDATE person SET first_name = 'bobby' WHERE last_name = 'beepboop';```
    - // last_name
    - ```UPDATE person SET last_name = 'lil-man' WHERE first_name = 'victoria';```
    - // age
    - ```UPDATE person SET age = '27' WHERE last_name = 'lil-man';```
    - // is_happy
    - ```UPDATE person SET is_happy = true WHERE age = 22;```
  - updating multiple cols in a single row once
  - udpating multiple cols in MULTIPLE rows once
### DELETE
  - delete row
  - by first_Name
- ```DELETE FROM person WHERE first_name = 'bobby';```
  - by last_name
  - ```DELETE FROM person WHERE last_name = 'meowmeow';```
  - delete ALL rows in the table
  - ```DELETE FROM person;```
  - delete all rows who's age is bigger than 59


-- CRUD on person's columns
- UPDATE:
  -- add a new column to the existing table (ex: add an ID col)
  -- rename an existing column. Ex: is_happy = is_hungry
  --  make a col NULLABLE (first_name)
  -- make a col NOT nullable (is_happy)
  -- (hard) change the data type of an existing col. Ex: change is_happy (bool) to a varchar(255)
  -- Delete:
  - delete an entire col