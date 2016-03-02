require('styles/Main.styl');
import React from 'react';
import PhoneSimulator from './PhoneSimulator';
import ScreenParameters from './main/ScreenParameters';


class AppComponent extends React.Component {
  render() {
    console.log(this.props.actions)
    return (
      <div className='index'>
        <div className='container'>
          <ScreenParameters actions={this.props.actions} phone={this.props.phone}/>
          <div className='row'>
            <div className='col-lg-6'>
              <PhoneSimulator/>
            </div>
          </div>
        </div>
        <div className='notice'>Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
