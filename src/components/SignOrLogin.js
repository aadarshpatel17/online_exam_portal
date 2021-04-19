import React from 'react'
import image from './img.jpg'
import SignupPage from './SignupPage'
import LoginPage from './LoginPage'

const SignOrLogin = (props) => {
    return (
        <div className="signup-page">
            <div className="signup-left">
                <h1>Become a React Developer</h1>
                <p>
                    Try Out this sample test to test your
                    knowledge about ReactJS. Signup here.
                </p>
                { props.status ? <SignupPage /> : <LoginPage /> }
            </div>
            <div className="signup-right">
                <img className="text-warning img img-fluid" src={image} alt="student-img" />
            </div>
        </div>
    )
}

export default SignOrLogin
