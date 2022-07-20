import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Components/Header/header';
import store from './configureStore';
import AllMission from './Components/Missions/AllMission';
import Rockets from './Components/Rockets/Rockets';
import ProfileContainer from './Components/Profile/Profile';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <hr />
          <div className="content">
            <Routes>
              <Route path="/" element={<AllMission />} />
              <Route path="/Rockets" element={<Rockets />} />
              <Route path="/Profile" element={<ProfileContainer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
