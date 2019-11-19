import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from './Button.js';
// @material-ui/icons
import Dashboard from "@material-ui/icons/WorkOutline";
import Schedule from "@material-ui/icons/AccountBalance";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Buy EosIndex",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <small>
                          <b>Buy a fund</b>
                        </small>
                        <br />
                        <small>
                          Do you want to take part of EOS growth? Want to own
                          the biggest dApps? blahblah.
                        </small>
                        <br />
                        <small>
                          Click and blah blah.
                        </small>
                        <br />
                        <Button type="button" color="info">Get EosIndex</Button>
                      </span>
                    )
                  },
                  {
                    tabButton: "Make EosIndex",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <small>
                          <b>Create a fund</b>
                        </small>
                        <br />
                        <small>
                          You can create a fund and sell it.
                        </small>
                        <br />
                        <Button type="button" color="info">Make Fund</Button>
                      </span>
                    )
                  }
                ]}
              />

  );
}
