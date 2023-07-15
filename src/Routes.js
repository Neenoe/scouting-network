import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Components/Landing';
import Blog from './Components/Blog/Blog';
import Discover from './Components/Discover/Discover';
import PlayerProfile from './Components/Player-profile/PlayerProfile';
import ScoutProfile from './Components/Scout-profile/ScoutProfile';

const AppRoutes = () => {
	const router = createBrowserRouter([
        { path: '/', element: <Landing /> }, 
        { path:'Blog', element: <Blog /> },
        { path:'Discover', element: <Discover /> },
        { path:'ScoutProfile', element: <ScoutProfile /> },
        { path:'PlayerProfile', element: <PlayerProfile /> },
        
    ]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
