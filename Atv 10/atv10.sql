create database atv10;
use atv10;

create table contacts(
	contactID int not null auto_increment,
	contactName varchar(255) not null,
    contactPhone int not null,
    
    Primary Key(contactID)
);