import React from "react";
import { reduxForm } from 'redux-form';
import doneImage from '../../../assets/img/complete+done+green+success+valid+icon-1320183462969251652.png';
import validate from '../authValidate';

const StepFinal = props => {
    const { handleSubmit } = props;
    return (
        <div className="auth-form step">
            <div className="auth-done">
                <img src={doneImage} alt=""/>
                <div className="btn btn--default" onClick={handleSubmit}>
                    Go to dashboard
                </div>
            </div>
        </div>
    );
};

export default reduxForm({
    form: 'auth',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(StepFinal);
