import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Components/Landing';
import Blog from './Components/Blog/Blog';
import Discover from './Components/Discover/Discover';

const AppRoutes = () => {
	const router = createBrowserRouter([
        { path: '/', element: <Landing /> }, 
        { path:'Blog', element: <Blog /> },
        { path:'discover', element: <Discover /> },
    ]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
