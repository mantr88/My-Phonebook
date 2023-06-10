import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/auth-operations';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/');
        toast('You succesfully logined!', {
          style: { backgroundColor: '#0b980b', color: '#212121' },
        });
      })
      .catch(() => toast.error('Error of login!'));
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <div>
          <Link to="/register">Go to Sign Up</Link>
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
