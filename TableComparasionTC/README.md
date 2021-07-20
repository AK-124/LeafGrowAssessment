#001-TCComparingTwoTablesspecWithCypress.io 
This repository contains the code to compare the two tables using cypress.io

#Prerequisites 
.Node 
.Cypress 
.An IDE or Terminal .Chrome Browser

#Project Structure:
The two tables are compared. TableComparasionTC folder is created. 
In Integration folder, test cases for these two table are created in .js file which is named as ComparingTwoTablesspec.js

#Project Path: 
LeafGrowAssessment Folder --> cypress --> integration -->001-TCComparingTwoTablesspec.js

#Build Project
1. Clone Repository

2. git clone https://github.com/AK-124/LeafGrowInputComponentTest

3. Build Project $ npm install $ npm run build

4. Open & run Cypress runner for Scripts execution $ npm install cypress-pipe -D $ node_modules/.bin/cypress open $ npm run cypress

************************************************************************************
#NOTE:

I have compared the two tables value. And this way, after applying assertion, I Can safely say these tables are same as the data matches. It is in ComparingTwoTablesspec.js FILE.
The edit and delete button was not working and thereforw, I was unable to check the test cases around these buttons.

*************************************************************************************
#Run Tests After step3, the Cypress runner will launch and you can run .spec.js "named as TestCasesForInputComponent.spec.js" test files from the Cypress launched interface image
![image](https://user-images.githubusercontent.com/86361958/126371715-406db804-9956-4c67-b32a-762d2bde1693.png)


#Test Result:

Comparasion Last name successfull of the two tables:
![image](https://user-images.githubusercontent.com/86361958/126372373-24755e6a-3477-44d8-b551-0ba580174a42.png)

Comparasion of the other values of these two tables:
![image](https://user-images.githubusercontent.com/86361958/126372781-6ed10e2d-9faa-43df-af65-8dacd81c8b03.png)



