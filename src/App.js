import { Outlet, useRoutes } from 'react-router-dom';
const App = () => {
  let routes = useRoutes([
    { 
      path: '/', 
      element: <div>Hello Index</div> 
    },
    { 
      path: 'games', 
      element: <Games />,
      children: [
      { 
        path: '', 
        element: <div>Games Index</div>
      },
      { 
        path: ':id', 
        element: <div>Game Details</div>
      }
    ]
  }
]);
  return routes;
}
export default App
const Games = () => {
  return (
    <div className="Games">
      <div>This is the Games pages</div>
      <Outlet />
    </div>
  );
}
