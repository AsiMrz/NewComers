import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import './SmallCard.css';

const SmallCard = (props) => {
  const imgStyle = {
  maxHeight: 140,
  maxWidth: 140,
  marginLeft: 35,
  marginTop:10,
  borderRadious: 8,
   }
  return (
    <div>
      <Card className="avatar-card">
        <CardImg src={props.basics.picture} alt={props.basics.name}/>
        <CardBody>
          <CardTitle className="avatar-title" >{props.basics.name}</CardTitle>
          </div>


        </CardBody>
      </Card>
    </div>
  );
};

export default SmallCard;
