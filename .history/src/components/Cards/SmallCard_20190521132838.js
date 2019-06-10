import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import PopUpButton from "./PopUpButton";
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
        <CardImg src={props.basics.picture} style={imgStyle} alt={props.basics.name}/>
        <CardBody>
          <CardTitle className="avatar-title" >{props.basics.name}</CardTitle>
          <CardSubtitle className="avatar-subtitle">{props.favorite_programming_languages}</CardSubtitle>
          <div className="icons">
            {props.basics.profiles.map(profile => (
              <SocialIcon fill="#ee8989" url={profile.url} />
            ))}
            <PopUpButton {...props}/>
          </div>


        </CardBody>
      </Card>
    </div>
  );
};

export default SmallCard;
