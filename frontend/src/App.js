import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import GameNotFound from './pages/GameNotFound';
import Root from './components/Root';

// Add react-router-dom imports
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root />} >
    <Route index element={ <HomePage /> } />
    <Route path=':id' element={ <GamePage /> } />
    <Route path='game-not-found' element={ <GameNotFound /> } />
  </Route>
));

function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router={appRouter} />
  );
}

export default App;
