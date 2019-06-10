import React, {Component} from 'react';
import './Header.css';
//import SearchBar from './SearchBar';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
  NavLink,
} from 'reactstrap';
//import 'react-dropdown-tree-select/dist/styles.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    //logic for filter
    //parse all students and look in key projects->tech
    //create an array techList
    //upate array with all tech array.push(value.lowercase)
    //remove duplicates
    //create variable option= [{label: "" ,children:[]}]

    return (
      <div>
        <Navbar
          color='light'
          light
          expand='md'
          fixed='top'
          className='my-header'>
          <NavbarBrand className='my-brand' href='/Home'>
            Berlin Newcomers
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <div className='my-header-items'>
                <NavItem>
                  <NavLink href='/'>About us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/stories'>Stories</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/contact'>Contact</NavLink>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
