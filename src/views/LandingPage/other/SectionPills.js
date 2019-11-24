import React, { Component } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from './Button.js';
// @material-ui/icons
import Dashboard from "@material-ui/icons/WorkOutline";
import Schedule from "@material-ui/icons/AccountBalance";
import List from "@material-ui/icons/List";
import Modal from './Modal';
import ModalBack from './ModalBack';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

import { connect } from 'react-redux';
import { UserAction } from '../../actions';
import { ApiService } from '../../services';



import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs2';

import {JsonRpc} from 'eosjs/dist/eosjs-jsonrpc';
import { Api} from 'eosjs/dist/eosjs-api';







const useStyles = makeStyles(styles);

export default function SectionPills() {

  connect(mapStateToProps, mapDispatchToProps);

  const classes = useStyles();
  return (
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Become AP",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <small>
                          <b>Become AP</b>
                        </small>
                        <br />
                        <small>
                          You can become Authorized Participant by either creating EOSETF by transferring the underlying tokens to the fund or by redeeming EOSETF and receiving the underlying tokens.
                        </small>
                        <br />
                        <Modal />
                        <ModalBack />
                      </span>
                    )
                  },
                  {
                    tabButton: "Buy EOSETF",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <small>
                          <b>Current status</b>
                        </small>
                        <br />
                        <small>
                        Currently the EOSETF token is deployed to Kylin Testnet as such purchase is impossible.
By deploying the token to the mainnet it would be possible to create one click solution to make a purchase order to on a <a href="https://newdex.io">decentralized exchange.</a>
                        </small>
                        <br />
                        <Button type="button" color="info" href="https://newdex.io">Go to Newdex.io</Button>
                      </span>
                    )
                  }
                ]}
              />

  );
}



const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser: UserAction.setUser,
}

// export a Redux-connected React component
//export default connect(mapStateToProps, mapDispatchToProps)
//;
