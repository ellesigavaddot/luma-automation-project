
module.exports = [
    {
        missingField : "First Name",
        firstname: " ",
        lastname : "Brown",
        email : "test+4@gmail.com",
        password: "Password1!",
        confirmPassword: "Password1!",
        errorMessage: "This is a required field."
    },
    {
        missingField : "Last Name",
        firstname : "Janet",
        lastname: " ",
        email : "test+5@gmail.com",
        password: "Password1",
        confirmPassword: "Password1!",
        errorMessage: "This is a required field."
    },
    {
        missingField : "Email",
        firstname : "Brown",
        lastname : "Testy",
        email : " ",
        password: "Password1",
        confirmPassword: "Password1!",
        errorMessage: "This is a required field."
    },
    {
        missingField : "Password",
        firstname : "Brown",
        lastname : "Testy",
        email : "test+6@gmail.com",
        password: " ",
        confirmPassword: "Password1!",
        errorMessage: "This is a required field."
    },
    // {
    //     missingField : "Confirm Password",
    //     firstname : "Brown",
    //     lastname : "Testy",
    //     email : "test+7@gmail.com",
    //     password: "Password1",
    //     confirmPassword: "",
    //     errorMessage: "This is a required field."
    // },
    {
        missingField : "Confirm Password with Mismatched Password",
        firstname : "Brown",
        lastname : "Testy",
        email : "test+8@gmail.com",
        password: "Password1",
        confirmPassword: "Password",
        confirmErrorMessage: "Please enter the same value again."

    }


]