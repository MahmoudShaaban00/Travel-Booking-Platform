import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import ConfirmEmail from './Components/ConfirmEmail/ConfirmEmail';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import UserContextProvider from './Context/UserContext';
import AdminContextProvider from './Context/AdminContext';
import Categories from './Components/Dashboard/Categories/Categories';
import Events from './Components/Dashboard/Event/Events';
import Cars from './Components/Cars/Cars';
import AirportTaxis from './Components/AirportTaxis/AirportTaxis';
import Hotels from './Components/Hotels/Hotels';
import Airplane from './Components/Airplane/Airplane';
import BookContextProvider from './Context/BookContext';
import Profile from './Components/Profile/Profile';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import Books from './Components/Books/Books';
import ProtectedRoutedUser from './Components/ProtectedRouted/ProtectedRoutedUser';
import ProtectedRoutedAdmin from './Components/ProtectedRouted/ProtectedRoutedAdmin';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Login /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'confirmemail', element: <ConfirmEmail /> },
        { path: 'forgetpassword', element: <ForgetPassword /> },

        { path: 'home', element: <ProtectedRoutedUser><Home /></ProtectedRoutedUser> },
        { path: 'cars', element:<ProtectedRoutedUser><Cars /></ProtectedRoutedUser>  },
        { path: 'airporttaxis', element:<ProtectedRoutedUser><AirportTaxis /></ProtectedRoutedUser>  },
        { path: 'hotels', element:<ProtectedRoutedUser><Hotels /></ProtectedRoutedUser>  },
        { path: 'airplane', element: <ProtectedRoutedUser><Airplane /></ProtectedRoutedUser> },
        { path: 'profile', element:<ProtectedRoutedUser><Profile /></ProtectedRoutedUser>  },
        { path: 'changepassword', element:<ProtectedRoutedUser><ChangePassword /></ProtectedRoutedUser>  },
        { path: 'books', element:<ProtectedRoutedUser><Books /> </ProtectedRoutedUser> },

        { path: 'categories', element:<ProtectedRoutedAdmin> <Categories /></ProtectedRoutedAdmin> },
        { path: 'events', element:<ProtectedRoutedAdmin><Events /></ProtectedRoutedAdmin>  },
        { path: 'dashboard', element: <ProtectedRoutedAdmin><Dashboard /></ProtectedRoutedAdmin> },

      ],
    },
  ]);


  return (
    <BookContextProvider>
      <UserContextProvider>
        <AdminContextProvider>
          <RouterProvider router={router} />
        </AdminContextProvider>
      </UserContextProvider>
    </BookContextProvider>
  );
}

export default App;
