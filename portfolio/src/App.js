import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Services from './pages/Services.js';
import About from './pages/About.js';
import ContactMe from './pages/ContactMe.js';
import RootPage from './pages/RootPage.js';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/services', element: <Services /> },
      { path: '/about-me', element: <About /> },
      { path: '/contact-me', element: <ContactMe /> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App

