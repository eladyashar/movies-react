import './App.css';
import Navbar from '../common/components/navbar/Navbar';
import {Outlet} from "react-router-dom";

function App() {
  return (
            <div id="body">
              <Navbar/>
                <main>
                   <Outlet/>
                </main>
                <footer>
                    <p>&copy; 2024 CineMatch</p>
                </footer>
          </div>
  );
}

export default App;
