const constant = {
    EMAIL: "email",
    PASSWORD: "password",
    CONFIRM_PASSWORD: "confirm_password",
    DATE_OF_BIRTH: "dob",
    GENDER: "gender",
    SUCCESS: "success",
    WARNING: "warning",
    DANGER: "danger"
}

const cms = {
    label: {
        email: "Email Address",
        password: "Password",
        confirmPassword: "Confirm Password",
        dob: "Date of Birth",
        gender: "Gender",
        dashboard: "Dashboard",
        welcomeDashboard: "Welcome to Dashboard!",
        welcomeHome: "Hey, Welcome to our Web Page",
        homeInfo: "For more info, please Signup/SignIn to our website",
        pleaseSelect: "---Please Select---",
        signUp: "Sign-Up",
        login: "Login"
    },
    placeHolder: {
        email: "Enter email address",
        password: "Enter password",
        confirmPassword: "Re-enter your password"
    },
    button: {
        submit: "Submit",
        signUp: "Sign-Up",
        signIn: "Sign-In",
        register: "Register",
        login: "Login",
        loading: "Loading..."
    },
    message: {
        success: {
            register: "User registered successfully!",
            login: "User login successfully!"
        },
        error: {
            required: {
                email: "Email is required",
                password: "Password is required",
                confirmPassword: "Confirm Password is required",
                dob: "Date of Birth is required",
                gender: "Gender is required"
            },
            invalid: {
                email: "Invalid email!, Please enter valid email",
                password: "Invalid password!, Please enter password without special characters and spaces",
                confirmPassword: "Confirm Password should be match with the entered password",
                loginPassword: "Invalid Password! Please enter valid login password"
            },
            noUser: "No user registered, to proceed further please registered first",
            maxPasswordLength: "The password maximum length should be 12",
        }
    }

}

export {
    constant,
    cms
}