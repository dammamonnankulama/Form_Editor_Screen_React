import React,{useState} from 'react';
import './EmailValidationForm.css';

function EmailValidationForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        setError(validateEmail(e.target.value) ? '' : 'Invalid email format.');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            if (validateEmail(email)) {
                alert('Email is valid!');
            } else {
                setError('Please enter a valid email address.');
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="email-validation-form">
            <form onSubmit={handleSubmit}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                            className={`input-field ${error ? 'error' : ''}`}
                        />
                        <button 
                            type="submit" 
                            disabled={!validateEmail(email)}
                            className={`submit-button ${validateEmail(email) ? 'active' : 'disabled'}`}
                        >
                            Submit
                        </button>
                        {error && <p className="error-message">{error}</p>}
                    </>
                )}
            </form>
        </div>
    );
}

export default EmailValidationForm;