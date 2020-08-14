# General info
Introducing Patient Progress, an app that would provide
automated updates about the patient’s recovery directly to the verified emergency contact, with date and time stamps.

Patient Progress was designed with the assumption that the patient-related medical data will be collected from existing NHS APIs and displayed on the interactive feed. However, for our hackathon demo, we created our own REST API which populates the feed with fictional patient data. 

We modelled the data partially on the needs of our users, however, still bearing in mind what kind of data the NHS could realistically own and allow to be relayed though our mobile application. 

The patient data include the following fields: full name, NHS number, date of birth, sex, ward, nurses assigned, list of all diagnosis along with their severity and a snapshot of physiological data which is frequently updated (temperature, current medication, heart rate, oxygen levels and overall patient’s wellness).

The nurse data include the following fields: full name, ward, ward number, NHS number and the patients assigned.

The API itself has two publicly available end points, the first one being ```api/patients``` which returns all medical data available for all registered patients and the second one being ```api/patients/<nhs_number>``` which return all data previously mentioned associated with a patient with a particular NHS number, including the most up-to-date snapshot of physiological data which is displayed on our feed.

The Patient Progress REST API itself has no HTML interface and returns raw JSON data which the React Native app displays. The project is hosted on Heroku, under the Free Tier subscription model.

# Prerequisities
```
$ npm install -g expo-cli
```

# Setup
## To view this project 
* Download the Expo app on your mobile device. 
* The project can be viewed in Expo by scanning the QR code provided in the link (works for Android only). 
* iOS users cannot view the project in Expo, due to Apple's review guidelines. 
* If you're using an iOS device or you currently cannot access a mobile device, the project can be viewed in browser on <a href="https://expo.io/@juel07/patient-progress-app">this link</a> or as a Vimeo video <a href="https://vimeo.com/447799138">here</a>.

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
* Python
* Django & Django REST
* PostgreSQL
* Heroku (Free Tier)

# Authors
* Juel B
* Katarina Z 
* Safiya J
* Tolu A 

# Questions & Answers

### 1. How do you verify?
Patient Progress will use an ID verification process to determine the identity of a first-time user. This will include taking a photo of an ID and taking a short video. Our app will use a two-step verification process with returning users to ensure the app is being used by the appropriate user. Additionally, patient Progress is GDPR (General Data Protection Regulation) compliant and strives to be a world leader in patient security.

### 2. How would the app break any bad news to the family?
When a user is setting up a connection, they would be prompted with a set of questions that would personalise their experience. This includes the option of being notified of the death of a relative through their feed. This would not replace the appropriate call from a doctor or nurse but would accompany it so that users who opt-in could see the details on their timeline. This gives users options and allows them to access data should they wish to do so.

The app also includes a ‘Help & Support’ page. Since this solution is holistic, users who go through bereavement would be notified of various help and support that they can access within the app.

### 3. How would this app help a huge range of people? 
Health-related issues affect people of all ages, abilities and backgrounds. Therefore, this app would need to be accessible to all. Future updates will include an integrated voice assistant, language options, voice recognition and a web-based version to cater to those who do not have access to smartphones or have visual or hearing impediments. 

In the post-COVID landscape, this can prove useful for in-patents wanting to update their families or relatives unable to see loved ones. As our project is in work in progress, we aim to tackle these challenges every step of the way.

### 4. What the data from the NHS would look like?
* NHS numbers
* Patient info (name, address, DOB, nurse assigned, gender)
* Observation chart information (temp, blood pressure, weight, saturation levels, heart rate, etc.)

### 5. How do you guarantee consent if a user is not of a sane mind or unconscious? (This falls into an ethics/moral question)
* Doctor or nurse makes the decision 
* Carers/support workers/nursing home

### 6. Is there a way to ensure that people don't "spam" call the call ward feature?
On the call ward page, the user of the app is only allowed to make a call if the patient is in critical condition. Upon pressing the ‘call ward button, the user is prompted with a pop-up that states to only call the ward if there is an urgent matter due to the NHS being very busy. In addition, the user will be limited to 2 calls per patient, per day.

If the patient is not in critical condition then they have the option to book a timeslot for the ward to call them.

### 7. How do you protect accounts?
* User accounts would be protected by enforcing password policies.
* User input end-to-end encryption
* Two-step authentication process
* Security updates
* There is a possibility of using Blockchain to protect records and accounts

### 8. What is the minimum data needed to operate without collecting more than you need & being intrusive?
Patient info (name, address, DOB, emergency contact). 