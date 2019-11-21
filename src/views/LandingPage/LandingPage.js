import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import BarChart from './charts/BarChart';
import SectionPills from './other/SectionPills';
import MyComponent from './other/BlockSense';


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="EosETF"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Own every dApp on EOS through one token.</h1>
              <h4>
                EOS is full of amazing dApps, many of which will soon take over
                the world. Investing in every one of them is practically impossible.
                Acquire EosETF and
                rule the rest of EOS.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <div style={{"height":"30px"}}></div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} lg={6}>
          <BarChart />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={6}>
          <SectionPills />
          </GridItem>
          </GridContainer>
          <div style={{"height":"30px"}}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
