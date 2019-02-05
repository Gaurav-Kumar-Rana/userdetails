import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './common/header';
import { apiCall } from './common/utility';
import BodyContailer from './common/bodycontainer';
import defaultWebSettings from './settings/websettings';

import {
  fetchUserProfileBegin,
  fetchUserProfileSucess, 
  fetchUserProfileFailure,
  fetchLangBegin,
  fetchLangSucess, 
  fetchLangFailure
} from './redux/action';

const mapStateToProps = (state) =>{
  return{
    loadingdata:state.loadingdata,
    sucessdata:state.sucessdata,
    errordata:state.errordata,
    loadinglangdata:state.loadinglangdata,
    sucesslangdata:state.sucesslangdata,
    errorlangdata:state.errorlangdata
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchUserProfileBegin : begin => dispatch(fetchUserProfileBegin(begin)), 
    fetchUserProfileSucess : sucess => dispatch(fetchUserProfileSucess(sucess)),
    fetchUserProfileFailure : error => dispatch(fetchUserProfileFailure(error)),

    fetchLangBegin : begin => dispatch(fetchLangBegin(begin)), 
    fetchLangSucess : sucess => dispatch(fetchLangSucess(sucess)),
    fetchLangFailure : error => dispatch(fetchLangFailure(error))
  };
};

class App extends Component {
  componentDidMount() {
    let user = 'default';

    this.props.fetchUserProfileBegin();
    /*User Details Api Call*/
    apiCall(`${user}`,this.props.fetchUserProfileSucess,this.props.fetchUserProfileFailure);

    /*Language Api Call */
    this.props.fetchLangBegin();
    apiCall(`${"string"}`,this.props.fetchLangSucess,this.props.fetchLangFailure);
  }

  render() {
    const { sucessdata, sucesslangdata } = this.props;   
    const settings = defaultWebSettings;
    return (
      <div className="App">
        {<Header metadata={ sucessdata } settings={settings}/>}
        {<BodyContailer metalangdata={ sucesslangdata } settings={settings}/>}
      </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
