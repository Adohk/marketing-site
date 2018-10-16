import React, { Component } from 'react';
import Logo from '../../logo-light2x.png';
import '../../App.css';
class JobsFooter extends Component {
  render(){
    return (
      <footer className="jobs-footer">
        <div>
          <div>
            <a href="http://vaius.group/">
              <img style={{height: 50, width: 'auto'}} alt="VAIUS LOGO" src={Logo}/>
            </a>
          </div>
        </div>
        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
          <p style={{color: '#fff', paddingBottom: 3,}}>© VAIUS Group, 2018</p>
        </div>
        <div>
          <div style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vaius.group/"><i style={{ fontSize: 40, color: 'white', padding: 5}} className="fa fa-facebook-official" aria-hidden="true"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="http://twitter.com/vaiusgroup"><i style={{fontSize: 40, color: 'white', padding: 5}} className="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/vaius-group/"><i style={{fontSize: 40, color: 'white', padding: 5}} className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
        </div>
      </footer>
    )
  }
}
export default JobsFooter;
