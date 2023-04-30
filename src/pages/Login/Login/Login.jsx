import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    // const navigate = useNavigate()
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/category/0";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true });
                // navigate('/category/0')
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <Container className='w-25 mx-auto'>
            <h4>Please Login</h4>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

                <Form.Group>
                    Don't have an account? <Link to='/register'>Register</Link>
                </Form.Group>

                <Form.Text className="text-muted">
                    his
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;