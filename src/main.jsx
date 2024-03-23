import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import JobDetail from './components/JobDetail/JobDetail';
import AppliedJobs from './components/appliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/job/:id",
        element: <JobDetail></JobDetail>,
        loader: () => fetch('jobs.json'),
      },
      {
        path:"/applied_jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json'),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
