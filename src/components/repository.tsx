import React from "react";
import { db } from "../index";
import { onSnapshot, collection } from "firebase/firestore";
import Card from "./detailCard";
import { Link } from "react-router-dom";

interface state {
  products: any;
  loading: boolean;
}

class Repository extends React.Component<{}, state> {
  constructor({}) {
    super({});
    this.state = {
      products: [],
      loading: true,
    };
  }
  componentDidMount() {
    const myProducts = onSnapshot(
      collection(db, "Product"),
      (snapshot) => {
        const productList = snapshot.docs.map((item: any) => {
          return item.data();
        });
        console.log("PRODUCTS:", productList);
        this.setState({
          products: productList,
          loading: false,
        });
      },
      (err) => {
        console.log("ERROR:", err);
      }
    );
  }

  render() {
    const { products, loading } = this.state;
    return (
      <>
        <h1>REPOSITORY</h1>
        <hr />
        <div>
          {!loading
            ? products.map((item: any) => {
                return <Card prod={item} />;
              })
            : "Loading"}
        </div>
        <div>
          <hr />
          <Link to={"/"}>GO BACK</Link>
        </div>
      </>
    );
  }
}
export default Repository;
