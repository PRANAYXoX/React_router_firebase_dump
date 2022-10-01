import React from "react";
import { db } from "../index";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

class Form extends React.Component {
  addProduct = async () => {
    var category = document.getElementById("category") as HTMLInputElement;
    var item = document.getElementById("item") as HTMLInputElement;
    var qty = document.getElementById("quantity") as HTMLInputElement;
    var price = document.getElementById("price") as HTMLInputElement;
    console.log(category.value);
    if (item.value && qty.value && price.value && category.value) {
      await addDoc(collection(db, "Product"), {
        Category: category.value,
        Item: item.value,
        Price: price.value,
        Quantity: qty.value,
      })
        .then((docRef) => {
          console.log("Result:", docRef);
          category.innerHTML =
            "<option value=''><b>CATEGORY:-</b></option><option value='household'>HOUSEHOLD</option><option value='cosmetics'>COSMETICS</option>";
          item.value = "";
          qty.value = "";
          price.value = "";
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  };
  render() {
    return (
      <>
        <h1>FORM</h1>
        <div>
          <label>CATEGORY:</label>
          <select id="category" name="category">
            <option value="">
              <b>CATEGORY:-</b>
            </option>
            <option value="household">HOUSEHOLD</option>
            <option value="cosmetics">COSMETICS</option>
          </select>
        </div>
        <div>
          <label>ITEM</label>
          <input
            type={"text"}
            name={"Item"}
            placeholder="ITEM NAME..."
            id="item"
            required
          />
        </div>
        <div>
          <label>QUANTITY</label>
          <input
            type="number"
            name={"Quantity"}
            placeholder="QUANTITY..."
            id="quantity"
            required
          />
        </div>
        <div>
          <label>PRICE(Per Unit)</label>
          <input
            type="number"
            name={"Price"}
            placeholder="PRICE..."
            id="price"
            required
          />
        </div>
        <div>
          <button onClick={this.addProduct}>SUBMIT</button>
        </div>
        <hr />
        <hr />
        <div>
          <Link to={"/repository"}>CHECK REPOSITORY</Link>
        </div>
      </>
    );
  }
}

export default Form;
