import { useState } from "react";
import "./styles.css";

export default function App() {
  var [costprice, updateCostPrice] = useState("");

  var [quantity, updatequantity] = useState("");

  var [sellingPrice, updatesellingPrice] = useState("");

  var [msg, updateMsg] = useState("");

  function takeCurrentPrice(event) {
    var sP = event.target.value;

    updatesellingPrice(sP);
  }
  function takeQuantity(event) {
    var quant = event.target.value;

    updatequantity(quant);
  }

  function takePurchasePricw(event) {
    var cP = event.target.value;
    updateCostPrice(cP);
  }

  function calculatePrice() {
      sellingPrice = Number(sellingPrice);
      costprice = Number(costprice);
      quantity = Number(quantity);
      if (sellingPrice > 0 & costprice > 0 & quantity > 0) {
      if (sellingPrice > costprice) {
        var profit = sellingPrice - costprice;

        var result = profit * quantity;
        //console.log(result);
        var profitPercentage = (profit / costprice) * 100;

        var roundedPper = Math.round(profitPercentage, 3);
        // console.log(profitPercentage);
        var profitlResult = `ohh you gained ${result} and percentage is ${roundedPper}`;
        updateMsg(profitlResult);
      } else {
        var loss = costprice - sellingPrice;
        var lossPercentage = (loss / costprice) * 100;

        var roundedPer = Math.round(lossPercentage, 3);

        result = loss * quantity;
        var lossResult = `ohh you lost ${result} and percentage is ${roundedPer}`;

        updateMsg(lossResult);

        //console.log(lossPercentage);
      }
    } else {
      updateMsg("Please give valid details");
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Stock Market</h1>
        <label>Purchased Price</label>
        <input type="text" onChange={takePurchasePricw} />
        <label>Quantity</label>
        <input type="text" onChange={takeQuantity} />
        <label>Enter Current price</label>
        <input type="text" onChange={takeCurrentPrice} />

        <button onClick={calculatePrice}>Check your Status</button>
        <h2>{msg}</h2>
      </div>
    </div>
  );
}
