import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Main from './pages/main/main.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Achievements from './pages/Achievements/Achievements.jsx';
import StoryItem from './components/StoryItem/StoryItem.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/story/:id",
    element: <StoryItem />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
