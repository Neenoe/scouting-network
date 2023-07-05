import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Components/Landing';
import Blog from './Components/Blog/Blog';
import Discover from './Components/Discover/Discover';
import Login from './Components/Login';

const AppRoutes = () => {
	const router = createBrowserRouter([
        { path: '/', element: <Landing /> }, 
        { path:'Blog', element: <Blog /> },
        { path:'Discover', element: <Discover /> },
        { path:'Login', element: <Login /> },
    ]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
