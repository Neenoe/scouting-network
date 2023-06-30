import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Components/Landing';
import Blog from './Components/Blog/Blog';

const AppRoutes = () => {
	const router = createBrowserRouter([
        { path: '/', element: <Landing /> }, 
        { path:'Blog', element: <Blog /> },
    ]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
