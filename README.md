# Convergence Coding Challenge

This project have the following screens for users to register and log in to an app.

### Steps to run the project

To run the project on local, install node and npm. Then follow the follwoing command

1. Clone the project from `git clone https://github.com/vishakhaChaudhary/convergence-coding-challenge`

2. Once clone is successfully, then install all the dependencies using the below command

`npm install`

3. All the packages will be installed then run the command in the project directory on your local

`npm run local`

This will run the app on [http://localhost:3000]. Open, (http://localhost:3000) to view it in your browser.

4. Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run build`
### `npm run start`

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Code Splitting

The project consist of three modules:

1. User
2. Dashboard
3. Home

1. User: This module is divided into two modules `Register` and `Login`. The `react-bootstrap` is used to create the page and form. Also, to validate the fields `yup` package is used.

2. Dasboard: This module listed the logged in user details

3. Home: This is the default page, it is loaded when there is no user is registered or logged in. It consist of two button Sign-Up and Sign-In. Bu clicking on it user can easily redirect to the following page.

### Project Task

Screen 1: _New User or Existing User_
    - If a new User, redirect to the registration screen.
    - The existing User needs to go to the login screen.
# Navigate to this screen if no User is in session.

Screen 2: _Registration screen_
# Email field with validation
a. Email validity check
b. required check
# Password with validation
a. min of 6 char. max 12
b. contain min 2 alphabets.
c. It should not have special characters.

_Note_: 
# recheck password field should match the password
# gender choice field male or female
# all fields are required, show validation error on submit
# show success and navigate to the login screen
# store password in Local storage for later verification

Screen 3: _Login screen_
# User to enter email and password, with all basic validation
# Mock network like delay, and validate the email and password
# During the wait, disable the login button and show the loader inside
the button.

# On success, navigate to Screen 4
# On failure, clear the fields and offer an error message to retry
Screen 4: _Dashboard screen_
