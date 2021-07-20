#LeafGrowInputComponentTestWithCypress.io
This repository contains the code to test input component using cypress.io

#Prerequisites
.Node
.Cypress
.An IDE or Terminal
.Chrome Browser

#Project Structure
The input component is tested. NumericalInputChecking folder is created.
In Integration folder, test cases for the input components are created in .js file which is named as *TestCasesForInputComponent.spec.js*

#Project Path:

NumericalCheckingInput Folder --> cypress --> integration --> TestCasesForInputComponent.spec.js


#Build Project
1. Clone Repository
2. git clone https://github.com/AK-124/LeafGrowInputComponentTest
3. Build Project
   $ npm install
   $ npm run build 

3. Open & run Cypress runner for Scripts execution
   $ npm install cypress-pipe -D
   $ node_modules/.bin/cypress open
   $ npm run cypress

#NOTE:
1. All test cases are given in one TestCasesForInputComponent.spec.js FILE. 
2. There are 7 test cases and all test steps were intended to be written in separate.js files 
3. But there was some error occurring with the assertion while using the similar test steps.
4. Due to time constraint, I added different test cases with their test steps in one file. 


#Run Tests
After step3, the Cypress runner will launch and you can run .spec.js  "named as *TestCasesForInputComponent.spec.js*" test files from the Cypress launched interface
![image](https://user-images.githubusercontent.com/86361958/126312568-8951bb39-5f38-4019-a3ca-843c644cfd94.png)

#Test Result:
![image](https://user-images.githubusercontent.com/86361958/126312764-5b972d92-170b-4f98-9c76-d7d1418d2462.png)




 
