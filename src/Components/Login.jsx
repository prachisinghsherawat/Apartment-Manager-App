import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export const Login = () => {

   const navigate = useNavigate()

    return(
        <div className='loginImg' >
            <Form className='form'>
                <h1>Login Here</h1><br />
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group><br />
  <Button onClick={()=>navigate("/")} id='submitBtn' type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}