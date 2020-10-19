// @vendors
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

// @styles
import './styles.scss'

export default function Input ({
    className,
    disabled,
    errorMessage,
    onChange,
    placeholder,
    required,
    type,
    value
}) {
    if (type !== 'date') {
        return (
            <div className={cx(
                'custom-input',
                { 'custom-input--error': !!errorMessage },
                className
            )}>
                <input
                    className="custom-input__textfield"
                    disabled={disabled}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder={`${placeholder}${required ? ' *' : ''}`}
                    type={type}
                    value={value}
                />
                <div className="custom-input__error-message">{errorMessage}</div>
            </div>
        )
    } else {
        return (
            <div className={cx(
                'custom-input',
                { 'custom-input--error': !!errorMessage },
                className
            )}>
                <span>{`${placeholder} *`}</span>
                <input
                    className="custom-input__textfield"
                    disabled={disabled}
                    onChange={(event) => onChange(event.target.value)}
                    type={type}
                    value={value}
                />
                <div className="custom-input__error-message">{errorMessage}</div>
            </div>
        )
    }
}

Input.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string.isRequired
}

Input.defaultProps = {
    className: '',
    errorMessage: '',
    disabled: false,
    required: false,
    type: 'text',
    placeholder: ''
}
