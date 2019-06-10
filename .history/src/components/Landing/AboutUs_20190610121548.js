import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, Button} from 'reactstrap';
//import {SocialIcon} from 'react-social-icons';
import './Welcoming.css';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Card className='card-container card--expand'>
          <CardImg
            className='my-card-image'
            src='https://www.visitberlin.de/system/files/styles/visitberlin_bleed_header_visitberlin_mobile_1x/private/image/regierungsviertel01_DL_PPT_0.jpg?h=77a3658e&itok=vNPB4omE'
            alt=''
          />

          <CardBody className='card-body-wrapper'>
            <CardText className='card-text'>We are ...</CardText>
            <CardText>
              <p>
                a community of Berlin’s new commer who are looking forward to a
                better life and seeking new career or new job position.
              </p>
            </CardText>
            <Button className='' href='/Stories'>
              Review some of our stories
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
