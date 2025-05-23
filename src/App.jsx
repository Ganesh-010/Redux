
import Product from './Components/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Dashboard from './Components/Dashboard'; // ✅ Fix spelling
import Cart from './Components/Cart';
import RootLayout from './Components/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} /> {/* ✅ Corrected from RouteProvider */}
    </div>
  );
}

export default App;
