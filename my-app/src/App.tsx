import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Home from './components/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={<Home />} />
      
  
      
    
    </>

  )
)

function App() {
  
  return <RouterProvider router={router} />;

}

export default App;
