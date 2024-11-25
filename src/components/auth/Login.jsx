import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShootingStars from '../../styles/ShootingStars';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simula inicio de sesión exitoso
      localStorage.setItem('token', 'fake-token'); // Guarda un token falso
      navigate('/dashboard'); // Redirige al dashboard
    } catch (err) {
      setError('Credenciales inválidas.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <ShootingStars /> {/* Fondo animado */}
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md border border-gray-300 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Ingrese su usuario"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg ${
              isLoading ? 'bg-gray-400' : 'bg-purple-500 hover:bg-purple-600'
            } text-white font-semibold`}
            disabled={isLoading}
          >
            {isLoading ? 'Cargando...' : 'Iniciar sesión'}
          </button>
          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded-lg mt-4">
              {error}
            </div>
          )}
        </form>
        <p className="text-sm mt-4 text-center text-gray-700">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
