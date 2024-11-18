import React, { useState } from 'react';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';

    const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/auth/login', { email, password });
          localStorage.setItem('token', response.data.token);
          navigate('/');
        } catch (err) {
          console.error(err);
        }
      };

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-h1 font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block text-body mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-body mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field w-full"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-full">Login</button>
          </form>
        </div>
      );
    };

    export default Login;
