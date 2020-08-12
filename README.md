# General info
Introducing Patient Progress, an app that would automate the process of updating the emergency contacts of a patient with the development of the patient in quarantine.

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
* Tolu Akintan 

# Questions & Answers

## 1. Is there a way to ensure that people don't "spam" call the call nurse/request update feature?
On the call nurse page, the user of the app is only allowed to make a call if the patient is in critical condition. Upon pressing the ‘call nurse’ button, the user is prompted with a pop-up that states to only call the nurse if there is an urgent matter due to the NHS being very busy. In addition, the user will be limited to 2 calls per patient, per day.

If the patient is not in critical condition then they have the option to book a timeslot for the nurse to call them. The ‘request an update feature’ could potentially include a drop-down list of more specific updates to choose from (e.g. oxygen levels, temperature, weight). This would mean the response is automated, resulting in the nurses having less work to do.

## 2. What would requesting an update on a patient look like?
This feature is to allow users to request a specific update e.g. the current oxygen levels. Since the feed updates in real-time users would automatically be informed of the most recent changes. This feature’s unique use is to allow users to have the option of requesting an update on a different vital that they are interested in.

## 3. How would the app break any bad news to the family?
When a user is setting up a connection, they would be prompted with a set of questions that would personalise their experience. This includes the option of being notified of the death of a relative through their feed. This would not replace the appropriate call from a doctor or nurse but would accompany it so that users who opt-in could see the details on their timeline. This gives users options and allows them to access data should they wish to do so.

The app also includes a ‘Help & Support’ page. Since this solution is holistic, users who go through bereavement would be notified of various help and support that they can access within the app.

## 4. How would this app help a huge range of people? 
Health-related issues affect people of all ages, abilities and backgrounds. Therefore, this app would need to be accessible to all. Future updates will include an integrated voice assistant, language options, voice recognition and a web-based version to cater to those who do not have access to smartphones or have visual or hearing impediments. 

In the post-COVID landscape, this can prove useful for in-patents wanting to update their families or relatives unable to see loved ones. As our project is in work in progress, we aim to tackle these challenges every step of the way.

## 5. What the data from the NHS would look like?
* NHS numbers
* Patient info (name, address, DOB, Next of kin information, gender)
* Observation chart information (temp, blood pressure, weight, saturation levels, heart rate)


## 6. How do you guarantee consent if a user is not of a sane mind or unconscious? (This falls into an ethics/moral question)
* Doctor or nurse makes the decision 
* Carers/support workers/nursing home


## 7. How do you verify?
Patient Progress will use an ID verification process to determine the identity of a first-time user. This will include taking a photo of an ID and taking a short video. Our app will use a two-step verification process with returning users to ensure the app is being used by the appropriate user. Additionally, patient Progress is GDPR (General Data Protection Regulation) compliant and strives to be a world leader in patient security.

## 8. How do you protect accounts?
* User accounts would be protected by enforcing password policies.
* User input end-to-end encryption
* Two-step authentication process
* Security updates
* There is a possibility of using Blockchain to protect records and accounts

## 9. What is the minimum data needed to operate without collecting more than you need & being intrusive?
Patient info (name, address, DOB, Next of kin information). 