import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './elements.css';
import './LoginPage.css';
import axios from 'axios';
import {findRenderedDOMComponentWithClass} from "react-dom/test-utils";
import {Form,Button} from "react-bootstrap";
// import {API_BASE_URL} from './jsonApi.js';

function RegisterPage() {
    const history = useHistory();
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
        surname: "",
        sNumber: "",
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setUser(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    function redirectBackToLogin() {
        history.push("/login");
    }
    const handleRegister = (e) => {
        e.preventDefault();
        axios({
            method: 'get',
            url: 'http://localhost:3000/posts',
        }).catch(error => {
            alert(error)
        }).then(response => {
            var success = true;
            for (var i = 0; i < response.data.length; i++) {
                // alert(user.username)
                if (response.data[i].username === user.username || response.data[i].email === user.email)
                    success = false;
            }
            if (success) {
                const data = {
                    "username": user.username,
                    "password": user.password,
                    "email": user.email,
                    "name": user.name,
                    "surname": user.surname,
                    "sNumber": user.sNumber,
                }
                let success2 = false;
                axios.post("http://localhost:3000/posts", data, undefined).then(function (response) {
                    const status = response.status;
                    if(status >=200){
                        success2 = true;
                    }
                    if (success2) {
                        alert("Successful registration")
                        redirectBackToLogin()
                    }else{
                        alert("There has been an issue in the registration progress")
                    }
                }).catch(function (error) {
                    alert(error)
                });

            }else{
                alert("Username or email is already been used by a user.")
            }
        })
    }
        return(
                <div className="container">
                    <Form className="registerForm" onSubmit={handleRegister}>
                        <p className="signmsg" align="center">Register</p>
                        <Form.Group className="form-group text-center">
                            <label htmlFor="exampleInputUsername"/> {/*boşluk hissi için gerekli*/}
                            <Form.Control  type="username"
                                   className="textfields"
                                   id="username"
                                   aria-describedby="usernameHelp"
                                   placeholder="Enter your username"
                                   value={user.username}
                                   required
                                   minLength="6"
                                   onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="form-group text-lg-center">
                            <label htmlFor="exampleInputPassword"/>
                            <Form.Control type="password"
                                   className="textfields"
                                   id="password"
                                   placeholder="Enter your password"
                                   required
                                   minLength="6"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="form-group text-lg-center">
                            <label htmlFor="exampleInputEmail"/>
                            <Form.Control type="email"
                                   className="textfields"
                                   aria-describedby="emailHelp"
                                   id="email"
                                   placeholder="Enter your email"
                                   required
                                   minLength="6"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <div className="form-group text-lg-center">
                            <label htmlFor="exampleInputName"/>
                            <Form.Control type="name"
                                   className="textfields"
                                   id="name"
                                   placeholder="Enter your name"
                                   required
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>
                        <Form.Group className="form-group text-lg-center">
                            <label htmlFor="exampleInputPassword1"/>
                            <Form.Control type="surname"
                                   className="textfields"
                                   id="surname"
                                   placeholder="Enter your surname"
                                   required
                                value={user.surname}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="form-group text-lg-center">
                            <label htmlFor="exampleInputPassword1"/>
                            <Form.Control type="sNumber"
                                   className="textfields"
                                   id="sNumber"
                                   placeholder="Enter your student number"
                                   required
                                value={user.sNumber}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant ="primary"
                            type="submit"
                            className="buttons"
                        >Register
                        </Button>

                        <div id="new_register" align="center" className="newAccount">
                            <label htmlFor="newAccount" className="blackText">If you are already registered, </label>
                            <span className="newAccount" id="newAccount" onClick={() => redirectBackToLogin()}>Log in</span>

                        </div>
                    </Form>
                </div>

            )
}

export default RegisterPage;