import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetailsFileComponent from './components/products/productsDetailsFile.jsx';
import ProductCards from './components/products/productsCard.jsx';
import HeaderFileComponent from './components/layout/header/headerFile.jsx';


const route = createBrowserRouter([

{path: "/", element: <HeaderFileComponent />,
    children: [
     {path: "/", element: <ProductCards /> },   
    {path: "/product-detail/:product_id", element: <ProductDetailsFileComponent />},
]},


])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}/>  
)
