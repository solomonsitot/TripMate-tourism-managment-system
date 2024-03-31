import "./bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import User from "./components/User/User";
import AdminScreen from "./pages/AdminScreen/AdminScreen";
import HomeScreen from "./pages/UserScreens/HomeScreen";
import Hotels from "./pages/AdminScreen/Hotels";
import Agents from "./pages/AdminScreen/Agents";
import Blogs from "./pages/AdminScreen/Blogs";
function App() {
  return (
    <div className="app-wrapper"><Routes>
    <Route path="/">
      <Route path="" element={<HomeScreen />} />
      {/* <Route path="seeblogs" element={<Blogs />} /> */}
      {/* <Route path="seeHotels" element={<Hotels />} /> */}
      {/* <Route path="seeAgents" element={<Agents />} /> */}
    </Route>
    <Route path="/Admin">
      <Route path="" element={<AdminScreen />} />
      <Route path="seeblogs" element={<Blogs />} />
      <Route path="seeHotels" element={<Hotels />} />
      <Route path="seeAgents" element={<Agents />} />
    </Route>
  </Routes></div>
  );
}

export default App;
