// import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./pages/home";
import Search from './pages/Search';
import Transaction from './pages/Transaction';
import Instructions from './pages/createSHG/Instructions';
import Form1 from './pages/createSHG/Form1';
import Form2 from './pages/createSHG/Form2';
import Login from './pages/auth/login';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          {/* {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="search" element={<Search />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="createSHG" element={<Instructions />} />
          <Route path="form1" element={<Form1 />} />
          <Route path="form2" element={<Form2 />} />
          <Route path="auth" element={<Auth />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
