import React, {Component} from 'react';
import Galery from './Galery';
import {Button} from 'reactstrap';

export default class Stories extends Component {
  render() {
    return (
      <div>
        <Button href='StoryForm'>Share your story</Button>
        <Galery />
      </div>
    );
  }
}
