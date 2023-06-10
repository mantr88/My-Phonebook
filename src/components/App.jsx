import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'Pages/Home';
import SharedLayout from './SharedLayout/SharedLayout';

// 1. Переробити редюсери authSlice на build-case

const Register = lazy(() => import('../Pages/Register'));
const Login = lazy(() => import('../Pages/Login'));
const Contacts = lazy(() => import('../Pages/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
