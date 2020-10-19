// @vendors
import React from 'react'
import './styles.scss'

// @hooks
import useInput from 'hooks/useInput'

// @components
import Input from 'components/input'

export function UserRegister () {
    const {
        errorMessage: userNameErrorMessage,
        setErrorMessage: setUserNameErrorMessage,
        value: username,
        setValue: setUsername
    } = useInput({ required: true })

    const {
        errorMessage: surnameErrorMessage,
        setErrorMessage: setSurnameErrorMessege,
        value: surname,
        setValue: setSurname
    } = useInput({ required: true })

    const {
        errorMessage: identificationErrorMessage,
        setErrorMessage: setIdentificationErrorMessage,
        value: identification,
        setValue: setIdentification
    } = useInput({ required: true, type: 'number' })

    const {
        errorMessage: birthdateErrorMessage,
        setErrorMessage: setBirthdateErrorMessage,
        value: birthdate,
        setValue: setBirthdate
    } = useInput({ required: true, type: 'date' })

    const {
        errorMessage: emailErrorMessage,
        setErrorMessage: setEmailErrorMessage,
        value: email,
        setValue: setEmail
    } = useInput({ required: true, type: 'email' })

    const {
        errorMessage: githubnameErrorMessage,
        setErrorMessage: setGithubnameErrormessage,
        value: githubname,
        setValue: setGithubname
    } = useInput({ required: true })

    const handleCancel = () => {
        // onCancel()
        setUserNameErrorMessage('')
        setSurnameErrorMessege('')
        setIdentificationErrorMessage('')
        setGithubnameErrormessage('')
        setBirthdateErrorMessage('')
        setEmailErrorMessage('')
        setUsername('')
        setSurname('')
        setBirthdate('')
        setIdentification('')
        setEmail('')
        setGithubname('')
    }

    return (
        <div className="register-page">
            <div className="register-form-container">
                <form className="register-form">
                    <div className="register-form__title">Register User</div>
                    <Input
                        className="register-form__username"
                        errorMessage={userNameErrorMessage}
                        onChange={setUsername}
                        placeholder="User name"
                        required
                        value={username}
                    />
                    <Input
                        className="register-form__surname"
                        errorMessage={surnameErrorMessage}
                        onChange={setSurname}
                        placeholder="Surname"
                        required
                        value={surname}
                    />
                    <Input
                        className="register-form__identification"
                        errorMessage={identificationErrorMessage}
                        onChange={setIdentification}
                        placeholder="Identification"
                        required
                        value={identification}
                    />
                    <Input
                        className="register-form__email"
                        errorMessage={emailErrorMessage}
                        onChange={setEmail}
                        placeholder="Email"
                        required
                        type="email"
                        value={email}
                    />
                    <Input
                        className="register-form__email"
                        errorMessage={githubnameErrorMessage}
                        onChange={setGithubname}
                        placeholder="Github name"
                        required
                        value={githubname}
                    />
                    <Input
                        className="register-form__birthdate"
                        errorMessage={birthdateErrorMessage}
                        placeholder="Birth date"
                        onChange={setBirthdate}
                        required
                        type={'date'}
                        value={birthdate}
                    />
                    <button
                        className="register-form__submit-button"
                        type="submit"
                    >
                        Register User
                    </button>

                    <button
                        className="register-form__cancel-button"
                        onClick={handleCancel}
                        type="button"
                    >
                        Cancel
                    </button>

                </form>
            </div>
        </div>
    )
}
