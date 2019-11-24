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
        brand="EOSETF"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Read more about EOSETF.</h1>
              <h4>
                How does it work? Can I try?
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <div style={{"height":"30px"}}></div>
        <h3 style={{"color":"black"}}>
        Interact with the dApp by logging in with the eosetftestac account and setting up the network in Scatter.</h3> <br></br>
<p style={{"color":"black"}}>
        "active":<br></br>
        "privateKey":"5JwuyP4MmLnp1HSrgbkPm5FcKVbkD5tX8Ea9zNAgmV3ENo68dif"<br></br>
        "publicKey":"EOS4yhvurw2TGvwLZcdYESbHPmbCfnMWjGqE6wn37RiV1wczHXp5x"<br></br>
<div style={{"height":"40px"}}></div>

              blockchain:'eos',<br></br>
              chainId:'5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',<br></br>
              host:'api.kylin.alohaeos.com',<br></br>
              port:443,<br></br>
              protocol:'https'<br></br>
        </p>
          <div style={{"height":"30px"}}></div>
        </div>
      </div>

    </div>
  );
}
