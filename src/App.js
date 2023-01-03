import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {routes} from "./modules/routes";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="WrapperCart">
        <BrowserRouter>
          <Routes>
            {routes.map(({path, element: Element, exact}, index) => (
              <Route
                key={index}
                exact={exact}
                path={path}
                element={<Element/>}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
