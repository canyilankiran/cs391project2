import React, {useState} from 'react';
import './LoginPage.css';
import {useHistory} from "react-router-dom";
import './elements.css';
import {Form,Button} from "react-bootstrap";
import axios from "axios";

function LoginPage() {
    const history = useHistory();
    const [state, setState] = useState({
        username: "",
        password: "",
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        axios({
            method: 'get',
            url: "http://localhost:3000/posts"
        }).catch(error => {
            console.log(error)
        }).then(response => {
            var success = false;
            for (var i = 0; i < response.data.length; i++) {
                // alert(response.data[i].username)
                if (response.data[i].username === state.username && response.data[i].password === state.password)
                    success = true;
            }
            if (success) {
            window.sessionStorage.setItem("current-session", state.username);
            history.push("/entry");
        }
            else
                alert('Wrong password or No user with these information');

        })
    }

    function redirectToRegister() {
        history.push("/register");
    }

    return (
        <div className="container">
            <Form className="loginForm" onSubmit={handleSubmitClick}>
                <p className="signmsg" align="center">Sign In</p>
                <Form.Group className="form-group text-center">
                    <label htmlFor="exampleInputEmail1"/> {/*boşluk hissi için gerekli*/}
                    <Form.Control type="username"
                                  className="textfields"
                                  id="username"
                                  aria-describedby="usernameHelp"
                                  placeholder="Enter your username"
                                  value={state.username}
                                  onChange={handleChange}
                                  required
                                  minLength="6"
                    />
                </Form.Group>
                <Form.Group className="form-group text-lg-center">
                    <label htmlFor="exampleInputPassword1"></label>
                    <Form.Control type="password"
                                 className="textfields"
                                  id="password"
                                  placeholder="Enter your password"
                                  value={state.password}
                                  onChange={handleChange}
                                  required
                                  minLength="6"
                    />
                </Form.Group>

                <div className="form-check">
                </div>
                <Button variant
                    type="submit"
                    className="buttons"
                >Login
                </Button>

                <div id="new_register" align="center" className="newAccount">
                    <label htmlFor="newAccount" className="blackText">If you are not registered, </label>
                    <span className="newAccount" id="newAccount" onClick={() => redirectToRegister()}>Create an Account Now</span>
                </div>
            </Form>
        </div>

    )
}


export default LoginPage;