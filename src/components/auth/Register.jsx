import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShootingStars from '../../styles/ShootingStars';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simula registro exitoso
      setMessage('Usuario registrado exitosamente.');
      setUsername('');
      setPassword('');
    } catch (err) {
      setError('Error al registrar usuario.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <ShootingStars /> {/* Fondo animado */}
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md border border-gray-300 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Registro</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="w-full py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
          >
            Registrarse
          </button>
          {message && <div className="bg-green-100 text-green-700 p-2 mt-4 rounded-lg">{message}</div>}
          {error && <div className="bg-red-100 text-red-700 p-2 mt-4 rounded-lg">{error}</div>}
        </form>
        <p className="text-sm mt-4 text-center text-gray-700">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/" className="text-blue-500 hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
