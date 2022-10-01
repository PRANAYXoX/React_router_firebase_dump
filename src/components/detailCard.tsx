import React from "react";

interface propType {
  prod: {
    Item: any;
    Price: any;
    Quantity: any;
    Category: any;
  };
}

class Card extends React.Component<propType, {}> {
  render() {
    const { Item, Price, Quantity, Category } = this.props.prod;

    return (
      <>
        <div>
          <h3>NAME :{Item.toUpperCase()}</h3>
          <h4>CATEGORY :{Category}</h4>
          <h5>PRICE :{Price}</h5>
          <h6>QUANTITY :{Quantity}</h6>
          <h5>
            <b>TOTAL INVESTMENT :{parseInt(Quantity) * parseInt(Price)}</b>
          </h5>
        </div>
        <hr />
      </>
    );
  }
}

export default Card;
