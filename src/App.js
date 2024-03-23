import React, { Suspense, useState, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

const Home = React.lazy(() => import('./pages/home'))
const Login = React.lazy(() => import('./pages/logins/login'))
const Register = React.lazy(() => import('./pages/registers/register'))
const Account = React.lazy(() => import('./pages/accounts/account'))
const Error = React.lazy(() => import('./pages/error'))
const Root = React.lazy(() => import('./components/root'))

const router = createBrowserRouter(
  [
    {
      path: '/', element:<Suspense fallback={<div>loading////</div>}><Root/></Suspense>,
      errorElement: <Suspense fallback={<div>loading////</div>}><Error/></Suspense>,
      children: 
      [
        {path: '/', element:<Suspense fallback={<div>loading////</div>}><Home/></Suspense>},
        {path: '/login', element:<Suspense fallback={<div>loading////</div>}><Login/></Suspense>},
        {path: '/account', element:<Suspense fallback={<div>loading////</div>}><Account/></Suspense>},
        {path: '/register', element:<Suspense fallback={<div>loading////</div>}><Register/></Suspense>},
      ]
    }
  ]
)

function App() {
  useEffect(() => {
    const checkFile = async () => {
      try {
        await import("./pages/accountInfo.json");
        router.navigate('/');
      } catch (err) {
        router.navigate('/login');
      }
    };

    checkFile();
  }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;