import React from 'react';

const defineClassType = (type) => {
    switch(type) {
        case 'number': return 'input--number';
        case 'radio': return 'input--radio';
        default: return '';
    }
};

const renderField = ({ input, label, type, checked, meta: { touched, error } }) => (
    <div className={`input input--default ${defineClassType(type)}`}>
        <input {...input} type={type} placeholder={type === 'number' ? label : ''} checked={checked}/>
        <span className="input-label">
            {type !== 'number' && label}
            {type !== 'radio' && touched && error && <span className="input-error">{error}</span>}
        </span>
    </div>
);

export default renderField;
