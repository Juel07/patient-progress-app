# General info
A React Native project for a hackathon called CFG Hack from Home 2020. Introducing Patient Progress, an app that would automate the process of updating the emergency contacts of a patient with the development of the patient in quarantine.

# Prerequisities
```
$ npm install -g expo-cli
```

# Setup
## To view this project 
* Download the Expo app on your mobile device 
* If using an Android device, the app can be viewed by scanning the QR below 
<img src="assets/qrcode.png" height="200px">

* If you're using an Apple device or you currently cannot access a mobile device, the project can be viewed in browser on <a href="https://expo.io/@kate97z/patient-progress-app">this link</a> or as a Vimeo video <a href="https://vimeo.com/414062479">here</a>.

## To run this project, install it locally using Expo
```
$ cd patient-progress-app
$ expo start 
```
If viewing on a hardware emulator, we recommend choosing either of the following as your default device:
- Pixel 3,
- Pixel 3a XL,
- iPhone 6,
- iPhone 7,
- iPhone 8 

# Technologies
* Expo CLI 3.18.2
* React Native 0.62

# Authors
* Juel Braganza 
* Katarina Zaprazna 
* Sahuur Safiya Jama 
* Temi Olukoko 
* Tolu Akintan 

# Questions & Answers

## 1. Is there a way to ensure that people don't "spam" call the call nurse/request update feature?

On the call nurse page, the user of the app is only allowed to make a call if the patient is in critical condition. Upon pressing the ‘call nurse’ button, the user is prompted with a pop-up that states to only call the nurse if there is an urgent matter due to the NHS being very busy. In addition, the user will be limited to 2 calls per patient, per day.

If the patient is not in critical condition then they have the option to book a timeslot for the nurse to call them. The ‘request an update feature’ could potentially include a drop-down list of more specific updates to choose from (e.g. oxygen levels, temperature, weight). This would mean the response is automated, resulting in the nurses having less work to do.

## 2. What would requesting an update on a patient look like?

## 3. How would the app break any bad news to the family?

## 4. How would this app help a huge range of people? 

## 5. What the data from the NHS would look like?

## 6. How do you guarantee consent if a user is not of a sane mind or unconscious? (This falls into an ethics/moral question)

## 7. How do you verify?

## 8. How do you protect accounts?

## 9. What is the minimum data needed to operate without collecting more than you need & being intrusive?