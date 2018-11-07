import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './common/header';
import { apiCall } from './common/utility';
import BodyContailer from './common/bodycontainer';
import defaultWebSettings from './settings/websettings';

import {
  fetchUserProfileBegin,
  fetchUserProfileSucess, 
  fetchUserProfileFailure
} from './redux/action';

const mapStateToProps = (state) =>{
  return{
    loadingdata:state.loadingdata,
    sucessdata:state.sucessdata,
    errordata:state.errordata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchUserProfileBegin : begin => dispatch(fetchUserProfileBegin(begin)), 
    fetchUserProfileSucess : sucess => dispatch(fetchUserProfileSucess(sucess)),
    fetchUserProfileFailure : error => dispatch(fetchUserProfileFailure(error))
  };
};

class App extends Component {
  componentDidMount() {
    let user = 'default';
    this.props.fetchUserProfileBegin();
    apiCall(`${user}`,this.props.fetchUserProfileSucess,this.props.fetchUserProfileFailure);
  }

  render() {
    const { sucessdata } = this.props;
    const settings = defaultWebSettings;
    return (
      <div className="App">
        {<Header metadata={sucessdata} settings={settings}/>}
        {<BodyContailer settings={settings}/>}
      </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
