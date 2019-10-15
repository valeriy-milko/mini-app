let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

const checkAge = (year, month, day) => {
    const y = parseFloat(year) + 18;
    const m = parseFloat(month) - 1;
    const d = new Date(y, m, day);
    return d <= new Date();
};

const authValidate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.trim().length < 6) {
        errors.password = 'Password should contain at least 6 symbols'
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password'
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Password doesn\'t match'
    }
    if (values.year && ((values.year % 400 == 0 || values.year % 100 != 0) && values.year % 4 == 0)) {
        monthLength[1] = 29;
    } else {
        monthLength[1] = 28;
    }
    if (!values.year || !values.month || !values.day) {
        errors.day = 'Please enter your date of birth'
    } else if (!checkAge(values.year, values.month, values.day)) {
        errors.day = 'You must be older'
    } else if (values.day > 0 && values.month && values.day > monthLength[values.month - 1]) {
        errors.day = 'Incorrect date'
    }
    if (!values.sex) {
        errors.sex = 'Select your gender'
    }

    return errors
};

export default authValidate;
