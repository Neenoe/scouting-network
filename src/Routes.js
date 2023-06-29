import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Components/Landing';

const AppRoutes = () => {
	const router = createBrowserRouter([
        { path: '/', element: <Landing /> }, 
        {}
    ]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
