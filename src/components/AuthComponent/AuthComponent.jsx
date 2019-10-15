import React from "react";
import { connect } from 'react-redux';
import StepCredentials from './AuthSteps/StepCredentials';
import StepDetails from './AuthSteps/StepDetails';
import StepFinal from './AuthSteps/StepFinal';
import * as globalActions from '../../store/actions/globalActions';
import './AuthComponent.scss';

class AuthComponent extends React.Component {
    state = {
        step: 0,
    };

    handleSubmit = () => {
        if (this.state.step < 2) {
            this.setState({ step: this.state.step + 1 });
        }
    };

    handleStepBack = () => {
        this.setState({ step: this.state.step - 1 });
    };

    handleConfirm = (values) => {
        const payload = {
            date_of_birth: Math.floor(new Date(values.year, values.month - 1, values.day) / 1000), // timestamp
            email: values.email,
            password: values.password,
            gender: values.gender,
            ...(values.hearFrom && { how_hear_about_us: values.hearFrom }),
        };
        console.log(JSON.stringify(payload));
    };

    render () {
        const { step } = this.state;
        let stepView, stepBarWidth;

        switch (step) {
            case 0:
                stepView = <StepCredentials onSubmit={this.handleSubmit}/>;
                stepBarWidth = '33%';
                break;
            case 1:
                stepView = <StepDetails onSubmit={this.handleSubmit} stepBack={this.handleStepBack}/>;
                stepBarWidth = '66%';
                break;
            case 2:
                stepView = <StepFinal onSubmit={values => this.handleConfirm(values)}/>;
                stepBarWidth = '100%';
                break;
            default: break;
        }

        return (
            <div className="auth">
                <div className="auth-header">{step !== 2 ? 'Sign up' : 'Thanks!'}</div>
                <div className="auth-progress">
                    <div className="auth-progress__bar" style={{ width: stepBarWidth }}/>
                </div>
                {stepView}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        step: state.global.step,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStep: (step) => dispatch(globalActions.setStep(step)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);

