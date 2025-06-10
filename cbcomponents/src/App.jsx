import React from "react";
import Navbar from "./assets/components/Navbar/Navbar";
import Randomclr from "./assets/components/Randomcolor/Randomclr";
import Randomtelugu from "./assets/components/RandomTeluguquotes/Randomtelugu";
import Randomtheme from "./assets/components/Randomtheme/Randomtheme";
import { Route, Routes } from "react-router-dom";
import Signup from "./assets/components/Signup/Signup";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/randomcolor" element={<Randomclr />} />
          <Route path="/randomteluguquotes" element={<Randomtelugu />} />
          <Route path="/randomtheme" element={<Randomtheme />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    );
  }
}
export default App;