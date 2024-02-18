import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./Dashboard.css";
import GoToTopButton from '../src/components/GotoTopButton'; 
// import './App.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="app">
      <Sidebar /> 
      <Feed searchQuery={searchQuery} />
      <Widgets searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* Add a button to go back to top of page */}
      <GoToTopButton/>     
    </div>
  );
};

export default Home;
