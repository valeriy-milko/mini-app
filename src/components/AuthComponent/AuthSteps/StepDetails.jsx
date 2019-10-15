import React from "react";
import { Field, reduxForm } from 'redux-form';
import validate from '../authValidate';
import renderField from "../../../utils/renderField";

const minMaxNormalize = max => value => {
    let v;
    let result = value > max;
    if (value <= 0) return false;

    if(result === false) {
        v = value;
    }
    return v;
};

const renderError = ({meta: {touched, error}}) => {
    return touched && error ? <div className="input-error out">{error}</div> : false
};

const hearAboutOptions = ['From friend', 'From facebook ads', 'Found by myself'];


const StepDetails = props => {
    const { handleSubmit, invalid, stepBack } = props;
    return (
        <form className="auth-form step condensed" onSubmit={handleSubmit}>
            <div className="auth-field__wrapper">
                <div className="auth-field__title">
                    Date of birth
                </div>
                <div className="auth-field__inline">
                    <Field
                        name="day"
                        type="number"
                        normalize={minMaxNormalize(31)}
                        component={renderField}
                        label="DD"
                    />
                    <Field
                        name="month"
                        type="number"
                        normalize={minMaxNormalize(12)}
                        component={renderField}
                        label="MM"
                    />
                    <Field
                        name="year"
                        type="number"
                        normalize={minMaxNormalize(new Date().getFullYear())}
                        component={renderField}
                        label="YYYY"
                    />
                </div>
            </div>
            <div className="auth-field__wrapper">
                <Field name="sex" component={renderError} />
                <div className="auth-field__title">
                    Gender
                </div>
                <div className="auth-field__inline">
                    <Field
                        name="sex"
                        type="radio"
                        component={renderField}
                        label="Male"
                        value="male"
                    />
                    <Field
                        name="sex"
                        type="radio"
                        component={renderField}
                        label="Female"
                        value="female"
                    />
                    <Field
                        name="sex"
                        type="radio"
                        component={renderField}
                        label="Unspecified"
                        value="unspecified"
                    />
                </div>
            </div>
            <div className="auth-field__wrapper">
                <div className="auth-field__title">
                    Where did you hear about us?
                </div>
                <div className="auth-field__inline">
                    <div className="input input--select">
                        <Field
                            name="hearFrom"
                            component="select">
                            <option value="">Select</option>
                            {hearAboutOptions.map(option => (
                                <option value={option} key={option}>
                                    {option}
                                </option>
                            ))}
                        </Field>
                    </div>
                </div>
            </div>
            <div className="auth-back" onClick={stepBack}>Back</div>
            <button type="submit" className={`auth-confirm ${invalid ? 'disabled' : ''}`} >Next</button>
        </form>
    );
};

export default reduxForm({
    form: 'auth',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(StepDetails);
