import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Heropage from "../Components/Heropage/Heropage";
import LoadingButton from "../Components/Mysignupbutton/Button";
import { Carousel } from "react-bootstrap";
import Carouselhero from "../Components/Carouselhero/Carouselhero";
import MuiNavbar from "../Components/MuiNavbar/MuiNavbar";
import { Login } from "@mui/icons-material";
import Tony from "../Components/MuiNavbar/Tony";

const Homepage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Header /> */}
      <MuiNavbar />
      <Heropage />
      <LoadingButton />
      {/* <Carouselhero /> */}
      <Tony />
    </div>
  );
};

export default Homepage;
