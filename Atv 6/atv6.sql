create database atv6;
use atv6;

create table tasks(
	taskID int not null auto_increment,
    taskTask varchar(255) not null,
    
    Primary Key(taskID)
);

select * from tasks;