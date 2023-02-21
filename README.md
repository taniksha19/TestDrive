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
![image](https://user-images.githubusercontent.com/82774150/220444273-fbbe628a-b6e7-445a-b0a8-fcd41442c4eb.png)



Schema (Description of MySQL Tables)
1.	Login:
![image](https://user-images.githubusercontent.com/82774150/220444332-5af440d8-8857-435b-86cf-b1762ca42c69.png)


2.	customerdetails:

![image](https://user-images.githubusercontent.com/82774150/220444379-3f2594a9-9ba1-49b6-ace2-36c7003278b4.png)


3.	testdrive:
![image](https://user-images.githubusercontent.com/82774150/220444420-a061a96b-12a4-47c0-81c1-6e5f4ed59b1a.png)


4.	legacytestdrive:

![image](https://user-images.githubusercontent.com/82774150/220444447-9d761b32-c1d5-44af-9f63-237c3d5efe89.png)
 

5.	vehicle:
 ![image](https://user-images.githubusercontent.com/82774150/220444462-83f7c016-37e5-4cc6-ae25-b37ce4f53f20.png)


6.	executive:

![image](https://user-images.githubusercontent.com/82774150/220444488-b9a12574-3b92-43bf-a75c-8ef58f70abf3.png)
 

7.	exesch :

 
![image](https://user-images.githubusercontent.com/82774150/220444515-12621bf3-54a6-436a-a41f-7f2c9bc4a63b.png)

8.	vehsch :

 
![image](https://user-images.githubusercontent.com/82774150/220444541-a699a358-9ca0-4093-95f2-1e1bc8c8a6d3.png)

OUTPUT SCREENSHOTS:
1.	LOGIN PAGE FOR USER AND ADMIN

 
![image](https://user-images.githubusercontent.com/82774150/220444559-2c3a45c6-4d59-4a7f-a3df-78a3103a2499.png)

2.	USER REGISTRARTION

 ![image](https://user-images.githubusercontent.com/82774150/220444592-b748348e-5dae-496e-ac9c-ee15fc67bae4.png)


3.	CUSTOMER-HOME

![image](https://user-images.githubusercontent.com/82774150/220444609-92ec7952-cb00-483e-b524-471f61983353.png)



4.	CUSTOMER DASHBOARD- TRACK ACTIVE TEST-DRIVE

![image](https://user-images.githubusercontent.com/82774150/220444668-59087236-a7e6-4e69-9e59-3755c54f32e7.png)

5.	CUSTOMER DASHBOARD – PAST-TESTDRIVE

![image](https://user-images.githubusercontent.com/82774150/220444692-e647616a-2e4b-4922-be28-13a9b078d076.png)

6.	MANAGER HOME 
![image](https://user-images.githubusercontent.com/82774150/220444732-cc246b3d-a25d-4f7b-bce3-e909eb241bef.png)
 

7.	MANAGER DASHBOARD – VEHICLE AVAILABILITY

![image](https://user-images.githubusercontent.com/82774150/220444751-ffe001f4-d450-44cb-b71c-2067375f0052.png)

8.	MANAGER DASHBOARD – EXECUTIVE AVAILABILITY
![image](https://user-images.githubusercontent.com/82774150/220444796-f2c20283-fd8f-4659-9523-b6c39502d724.png)

 
9.	MANAGER PENDING TEST-DRIVE
![image](https://user-images.githubusercontent.com/82774150/220444818-75fda089-8ad5-4b35-a095-2a44fe51e646.png)


10.	MANAGER DASHBOARD – TESTDRIVE
![image](https://user-images.githubusercontent.com/82774150/220444861-ebb0bb7f-8721-4106-925b-d3a75b916a36.png)

 

11.	MANAGE EXECUTIVES
![image](https://user-images.githubusercontent.com/82774150/220444895-bd63d485-819e-49b8-aecd-d4cabab9d47b.png)


12.	MANAGER VEHICLES
![image](https://user-images.githubusercontent.com/82774150/220444927-341d93d4-5f37-4e25-bbe1-3504784b3db3.png)


FUTURE SCOPE:
7.	Feedback feature for the customers can be introduced in the system.
8.	Filter options on the confirmed test-drive data viewed by the manager can help dealership, categorize test-drive and act accordingly.
9.	Search and filter option can be added for the legacy test drive data viewed by manager which will help dealership extract information of their relevance and draw inferences beneficial for the business

CONCLUSION:
Test-drive management system as a problem statement for relational database mini project was implemented and it was able to interact with our relational database successfully. Thus, we learn how to design a relational database for a specific problem statement and to make an end to end application using this database.
