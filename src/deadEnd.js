import React from 'react';
import {Redirect} from 'react-router-dom';

class DeadEnd extends React.Component {
  render(){
    return (<Redirect to='/play'/>);
  }
}
export default DeadEnd;
