# Project Submission By Bhargav Murarisetty

### Hackathon Announcement Date: 21-Feb-2020 
##### I tried Learn JavaScript, NightWatchJS and Gained all possible knowledge that i could in last 4 days.

##### My primary focus was on simplicity, Ease of use Framework that Cover Todays Software Testing Needs. I tried to make it as generic and reusable as possible. In the worst case, you can use this as a learning guide for your projects.

### System and Software Requirements
1. Docker v17 and above.
2. Windows OS
3. Latest NodeJS Version
4. NightwatchJs V1.3.4
5. SonarQube [Binaries](https://www.sonarqube.org/downloads/)
6. Allure [Binaries](https://github.com/allure-framework/allure2/releases/tag/2.13.2)
7. Google Chrome V79 and Above [if you dont have latest v79 and above chrome installed, make sure to update NPM Dependency with respective chrome version, 'npm i chromedriver@SPECIFIC_VERSION --save-dev', Version Specific details can be found here(https://www.npmjs.com/package/chromedriver)]


<h2 align="center">Project Architecture</h2>

![](https://github.com/bhargavkumar-65/NightWatchHackathon/blob/master/Documentation/Sample%20HTML%20Reports/ProjectArchitecture.PNG)


## What Makes this Framework Unique?

> [**“Page Object Model”**](https://github.com/bhargavkumar-65/NightWatchHackathon/tree/master/page-objects)<br>
> — To Organize code

> [**“Docker Grid”**](https://github.com/bhargavkumar-65/NightWatchHackathon/tree/master/Docker_Files/Zalenium/yaml)<br>
> — For Parallel Executions on Docker Containers

> [**“SonarQube Integration"**](https://github.com/bhargavkumar-65/NightWatchHackathon/tree/master/Docker_Files/sonarqube/yaml)<br>
> — For Continuous Code Quality Checks

> [**“Custom Test Runner Commands"**](https://github.com/bhargavkumar-65/NightWatchHackathon/blob/master/package.json)<br>
> — Custom Commands in Package.Json for Ease of Run

> [**“Azure PipeLine"**](https://dev.azure.com/)<br>
> — Azure DevOps Pipeline Connection


### What All Custom Test RUN Commands are Created?
#### npm run 
    1. "test:vrt" : For Running Visual Regression Tests 
    2. "test:chrome" : For Running on Chrome Local Browser
    3. "zalenium:start" : Bring Zalenium UP on Port 4444
    4. "test:zalenium" : For Running on Docker Containers
    5. "zalenium:end" : Bring Zalenium DOWN
    6. "sonar:start" : Bring SONARQUBE UP
    7. "sonar:scan" : SCAN JAVASCRIPT Code for Quality Checks
    8. "sonar:end" : Bring SONARQUBE Down

### What All Custom POM Commands are Created?
		1. linkclick [ Re-Usable Click Function with .click assertion]
		2. verifylinks [ Re-Usable Click Function with .assert.attributeContains]
		3. verifytxt [ Re-Usable Click Function with .assert.containsText]
		4. entertext [ Re-Usable Click Function with .setValue assertion]

### What Tests are Covered Under This Repo?

1. UI Test Cases
2. Visual Regression TestCase
3. Cookie Validation TestCase
4. Cucumber TestCase
5. Continuous Integration TestCase using AzureDevops CI
6. Parallel Execution Test Case in Docker Containers

### What All External Integrations are Covered?

1. ZAELENIUM GRID [Grid on Docker Containers]
2. SONARQUBE [Code Quality Checks]
3. DOCKERS [For Zalenium, and SonarQube]
4. Allure Reports
5. Azure Devops Pipelines

## How To Run Tests
1. UI Only Tests : npm run test -- tests/TelusHome.js
2. Assertions Only Test : npm run test -- tests/assertions.js

## What is  Visual Regression Testing (VRT)?
a.k.a Human Eye Testing, VRT is user-interface(UI) testing by capturing the screenshots of web pages/UI and compare them with the original images (either historical baseline screenshots or reference images from live website)

#### What Visual Regression Testing is covered
* upon running command [npm run test:vrt] Scripts Will Perform Below
	* Download the logo of telus.com, Giraffee image on home screen and GetStarted Button Image
	* Once download is Complete it compares with BaseLine images which is captured in previous runs and Gives Us Result
	
* For More Info on Visual Regression Test Understanding Checkout the Video on this Repo Document Section. 

