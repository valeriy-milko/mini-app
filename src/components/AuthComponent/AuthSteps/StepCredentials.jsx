import React from "react";
import { Field, reduxForm } from 'redux-form';
import validate from '../authValidate';
import renderField from '../../../utils/renderField'

const StepCredentials = props => {
    const { handleSubmit, invalid } = props;
    return (
        <form className="auth-form step" onSubmit={handleSubmit}>
            <Field
                name="email"
                type="text"
                component={renderField}
                label="E-mail"
            />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
            />
            <Field
                name="confirmPassword"
                type="password"
                component={renderField}
                label="Confirm password"
            />
            <button type="submit" className={`auth-confirm ${invalid ? 'disabled' : ''}`} >Next</button>
        </form>
    );
};

export default reduxForm({
    form: 'auth',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(StepCredentials);

