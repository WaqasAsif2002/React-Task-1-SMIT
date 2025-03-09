// CardComponent.js
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

function CardComponent() {
  return (
    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/products/type/full-metal/full-metal/_jcr_content/root/responsivegrid/container_copy/teaser.casiocoreimg.jpeg/1696484105376/pc-w1920h816-notext.jpeg"
          style={{
            height: 270,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5">
            G-Shock
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
}

export default CardComponent;
