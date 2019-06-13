import React, {Component} from 'react';
import Galery from './Galery';
import {Button} from 'reactstrap';
import './Stories.css';

export default class Stories extends Component {
  render() {
    return (
      <div className='stories-container'>
        <Button color='info' size='lg' href='StoryForm'>
          Share your story
        </Button>
        <Galery />
      </div>
    );
  }
}
