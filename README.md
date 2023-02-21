# TestDrive
A Test Drive Management System using React Js, Node Js and MySQL 
Title: Test Drive Management System
Problem Definition: 
Website for efficient Test drive management 
Learning Objectives: 
1.	Connectivity between SQL database and React JS as frontend UI using Node JS, Express.
2.	Implementation of SQL operations on real life database.
3.	Providing facilities to book test drive.
4.	Keeping records of bookings, customers, executives, and vehicles using admin privileges.
Learning Outcomes: 
Students will be able to understand and implement:
1.	Connectivity between SQL database and frontend UI using Node JS and Express JS.
2.	Implementation of SQL operations on real life database.
Abstract:
Our DBMS mini project idea to develop a Test-drive management system for a car dealership.  Our project aims to make the process of booking and managing test-drives more convenient for both the customers and the dealership’s test-drive manager. 
Since most of the dealerships still maintain a handwritten register and most of the communication is verbal and due to this documenting, the information for future use becomes cumbersome. 
	Our Test-drive management system makes this entire process more convenient by acting as bridge between customers and dealership authority as well as maintaining the real time status of a test-drive in a database.
Hardware Requirements:
Processor: Intel Dual Core ,i5 ,i7
Ram: 8 Gb
SSD: 512 Gb



Technologies Used:
            Frontend: React JS
            Backend: Node JS ,Express JS
            Database: MySQL

Software Requirements:
Operating System: Windows 11

Overall Description:
Our Test-drive management system consists of two user roles (customer, manager). Both the users after authorization gets to use features of the system relevant to their role.
Authentication:
a.	Login/logout system with basic authentication: Login is the default page in the portal. It ensures the usage of our portal by an authorized user only.
b.	Customers and manager get to use different functionalities after successful login.

User roles & their description
Manager:
1.	View Confirmed test-drives: Test-drives which are confirmed but not yet closed are visible to the manager through this functionality.
2.	Close Test-drive: This functionality allows the manager to close the test-drive and release the resources allocated to that test-drive after its successfully conduction.
3.	View Pending test-drives: This functionality allows the manager to view pending test-drives in the system which are yet to be confirmed by allocating a dealership executive to that test-drive.
4.	Check availability: It allows the manager to check the availability of the vehicle and executive on the mentioned date and chosen Time slot. 
5.	Legacy test-drives: This functionality allows the manager to view all the successfully conducted test-drives by the dealership through the system. Further dealership can draw useful conclusion beneficial for their business growth.
6.	Administration: This feature enables the manager to view currently present vehicles and executives in the dealership. With the changing staff and vehicle models manager will be able to add/update or delete vehicle models and executive from the system. 

Customer:
1.	View profile: After successful login customer can view information entered while registering into system.
2.	Book Test-drive: After selecting essential parameters like (booking date, Time Slot, and vehicle model) customer can book test-drive.
3.	Track Test-drive: This functionality enables the customer to view the status of currently active test-drives. Test-drive status (confirm or pending) is visible to customer along with the executive details of the dealership allocated for that particular test-drive. Customer is free to cancel test-drives at any point of time after booking irrespective of its status (confirm/pending).
4.	Past test-drives: A brief description of previously booked and successfully conducted test-drives by customer is also visible.

Er diagram 


Schema (Description of MySQL Tables)
1.	Login:

2.	customerdetails:

 

3.	testdrive:
 

4.	legacytestdrive:

 



5.	vehicle:

 

6.	executive:

 

7.	exesch :

 








8.	vehsch :

 




OUTPUT SCREENSHOTS:
1.	LOGIN PAGE FOR USER AND ADMIN

 







2.	USER REGISTRARTION

 

3.	CUSTOMER-HOME


 








4.	CUSTOMER DASHBOARD- TRACK ACTIVE TEST-DRIVE







5.	CUSTOMER DASHBOARD – PAST-TESTDRIVE












6.	MANAGER HOME 
 

7.	MANAGER DASHBOARD – VEHICLE AVAILABILITY









8.	MANAGER DASHBOARD – EXECUTIVE AVAILABILITY

 
9.	MANAGER PENDING TEST-DRIVE





10.	MANAGER DASHBOARD – TESTDRIVE

 

11.	MANAGE EXECUTIVES

 




12.	MANAGER VEHICLES

 

FUTURE SCOPE:
7.	Feedback feature for the customers can be introduced in the system.
8.	Filter options on the confirmed test-drive data viewed by the manager can help dealership, categorize test-drive and act accordingly.
9.	Search and filter option can be added for the legacy test drive data viewed by manager which will help dealership extract information of their relevance and draw inferences beneficial for the business

CONCLUSION:
Test-drive management system as a problem statement for relational database mini project was implemented and it was able to interact with our relational database successfully. Thus, we learn how to design a relational database for a specific problem statement and to make an end to end application using this database.
