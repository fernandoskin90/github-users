// @vendors
import { useCallback, useState } from 'react'

// @utils
import { validateEmail } from 'utils/format'

const specialTypes = ['email']

export default function useInput ({
    required,
    type
} = { required: false, type: 'text' }) {
    const [value, setValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleOnChange = useCallback((newValue) => {
        let clearedNewValue = newValue

        if (type === 'email') {
            const isEmailValid = validateEmail(newValue)
            setErrorMessage(isEmailValid ? '' : 'invalid mail')
        } else if (type === 'number') {
            clearedNewValue = newValue.replace(/\D/g, '')
        } else {
            setErrorMessage('')
        }

        if (required && !newValue) {
            setErrorMessage('This field is required')
        }
        if (
            !specialTypes.includes(type) &&
            ((required && !!newValue) || !required)
        ) {
            setErrorMessage('')
        }

        setValue(clearedNewValue)
    }, [required, type])

    return {
        errorMessage,
        setErrorMessage,
        setValue: handleOnChange,
        value
    }
}
