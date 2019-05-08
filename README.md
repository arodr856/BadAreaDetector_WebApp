<div align="center"><img src="https://user-images.githubusercontent.com/25447970/57402985-6e844380-718d-11e9-8a7d-2bc3e871d2c7.png" width="200" height="200" align="middle"/> </div>

## Senior Design IBM Cloud Project

The purpose of the Bad Area Detector (BAD) is two-fold. Its main purpose is to increase public safety by delivering valuable crime statistics to authorized Department of Transportation (DoT) workers as well as local public safety officers. This in-turn will help to reduce traffic congestion by quickly notifying DoT workers of areas that have been blocked due to illegal activity. The drivers can then change their driving route in real time to avoid running into those areas. The second purpose of the BAD is to assist the local police in analyzing crime data with machine learning. This information can help officers plan beat routes and help determine patterns of infraction committed by local crime organizations.

The application was originally built on General Electric’s “Industrial Internet of Things” (IIoT) platform called Predix.io. However, due to unforeseen circumstances we have migrated the application to run on IBM’s IIoT platform called IBM Cloud. The project will use a Raspberry Pi to simulate police dispatch data to be sent to the Watson Service in the IBM Cloud. Once in the cloud, the information is sent to a Cloud Object Storage Database where it can then be pulled by an analytical service provided by IBM which will be used to analyze the crime data. Next, the information will be sent to the web-application which will process the information and display it to a user-friendly interface running on IBM’s servers.

## Downloading Project

<b>Step 1.</b> Setup a github or Sign in

Sign into your github account or click <a href="https://github.com/join">here</a> to create one.

<b>Step 2.</b> Fork the repository

  1. Click on the <b>"Fork"</b> button on the top-right corner of that page.      <img width="250" height="35" alt="Fork Image" src="https://user-images.githubusercontent.com/25447970/57405228-c1acc500-7192-11e9-8550-e5cd566f8245.PNG">

<b>Step 3.</b> Create a local clone of the forked repository
  1. Navigate to the forked repository. 
  2. Then under repository name, click <b>"Clone and Download"</b> button. <img width="314" alt="Clone" src="https://user-images.githubusercontent.com/25447970/57405698-f1100180-7193-11e9-9ba6-219572c317a2.PNG">
  3. In the Clone with HTTPs section, click <img width="22" alt="Copy" src="https://user-images.githubusercontent.com/25447970/57407971-531f3580-7199-11e9-8209-0ffa4d86d264.PNG">
 to copy the clone URL for the repository. 
   
   4. Open GitBash
  
5. Then type ```git clone```, and then paste your URL copied in Step 2. It will look like this, with your GitHub username instead of YOUR-USERNAME:

```git clone https://github.com/YOUR-USERNAME/BadAreaDetector_WebApp.git```

6. Press <b>Enter</b>. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/BadAreaDetector_WebApp.git
> Cloning into 'BadAreaDetector_WebApp'...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```


Now you have the repository on your local device.

## Install Dependencies 

<b>Step 1.</b> Navigate into the root directory of the project repository.

<b>Step 2.</b> Open PowerShell in the directory as shown:
  <img width="573" alt="PowerShell" src="https://user-images.githubusercontent.com/25447970/57409492-47ce0900-719d-11e9-8b69-66c7caa26c4f.PNG">

<b>Step 3.</b> In the PowerShell prompt, type the following: ```npm install```. Then wait for all libraries to install.

<b>Step 4.</b> In the PowerShell prompt, type the the following: ```cd client```.

<b>Step 5.</b> Then type: ```npm install``` once more. Then wait for all libraries to install.

You have now successfully installed all dependencies!

## Running BAD

<b>Step 1: </b> Navigate into the root directory of the project folder.

<b>Step 2: </b> In the path directory, type ```PowerShell npm run dev``` <img width="258" alt="PowerShell2" src="https://user-images.githubusercontent.com/25447970/57412674-4ce38600-71a6-11e9-8a5e-af296f536ba2.PNG">

## Compatible Browsers

Google Chrome (73.0.3683 or lower)

Firefox (65.0.2 or lower)

Microsoft Edge (44.17763 or lower)

Safari (12.1 or lower)
