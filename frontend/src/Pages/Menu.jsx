import React, { useState } from "react";
import { API } from '../api';
import Set from "./Set";

function Menu() {

  const [message, setMessage] = useState("");
  const [cart, setCart] = useState({});
  const [bill, setBill] = useState([]);
  const [total, setTotal] = useState(0);

  const updateCart = (name, price, qty) => {
    setCart(prev => ({
      ...prev,
      [name]: { price, qty }
    }));
  };

  const handleSubmit = async () => {

    let billItems = [];
    let totalAmount = 0;

    for(let item in cart){
      const {price, qty} = cart[item];

      if(qty > 0){
        billItems.push(`${item} x ${qty} = ₹${price * qty}`);
        totalAmount += price * qty;
      }
    }

    setBill(billItems);
    setTotal(totalAmount);

    try {
      await API.post("/order", {
        items: billItems.join(", "),
        total: totalAmount
      });

      setMessage("Order placed successfully!");
    } catch {
      setMessage("Error placing order");
    }
  };

  return (
    <div>

      <div className='menu'>
        <br/><br/>
        <h2>Drinks</h2>

        <div className='a'>
          <div className='b'>
            <img src='https://goqii.com/blog/wp-content/uploads/shutterstock_1024718095-1024x682.jpg' alt=''/>
            <h3>Masala Tea</h3>
            <h4>₹15</h4>
            <Set onChange={(qty)=>updateCart("Masala Tea",15,qty)} />
          </div>

          <div className='b'>
            <img src='https://www.mistymountain.in/cdn/shop/articles/when_to_drink_green_tea_for_weight_loss_1024x576.webp?v=1769165908' alt=''/>
            <h3>Green Tea</h3>
            <h4>₹15</h4>
            <Set onChange={(qty)=>updateCart("Green Tea",15,qty)} />
          </div>

          <div className='b'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDb2bcdwcWVSP6B0ZkLUYDft1sj4OoMhXjJQ&s' alt=''/>
             <h3>Lemon Tea</h3>
            <h4>price ₹ 15/-</h4>
            <Set onChange={(qty)=>updateCart("Lemon Tea",15,qty)} />
          </div>
        </div>
         <div className='a'>
          <div className='b'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5reG38UN7rO0wdbO73TfbzNc_HC100uaRQ&s' alt=''/>
             <h3>Iced Tea</h3>
            <h4>price ₹ 15/-</h4>
            <Set onChange={(qty)=>updateCart("Iced Tea",15,qty)} />
          </div>
          <div className='b'>
             <img src='https://www.foodandwine.com/thmb/V1OEgtLQGUv_w2Fvm40WMLsJ4rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indulgent-Hot-Chocolate-FT-RECIPE0223-fd36942ef266417ab40440374fc76a15.jpg' alt=''/>
             <h3>Hot Chocolate</h3>
            <h4>price ₹ 20/-</h4>
            <Set onChange={(qty)=>updateCart("Hot Chocolate",20,qty)} />
          </div>
          <div className='b'>
             <img src='https://png.pngtree.com/png-clipart/20250221/original/pngtree-an-apple-juice-png-image_20491741.png' alt=''/>
             <h3>fresh Apple jucie</h3>
            <h4>price ₹ 25/-</h4>
            <Set onChange={(qty)=>updateCart("fresh Apple jucie",25,qty)} />
          </div>
        </div>
        <div className='a'>
          <div className='b'>
             <img src='https://png.pngtree.com/png-clipart/20250103/original/pngtree-fresh-orange-fruit-juice-clipart-illustration-with-transparent-background-png-image_19988837.png' alt=''/>
             <h3>fresh orange jucie </h3>
            <h4>price ₹ 25/-</h4>
            <Set onChange={(qty)=>updateCart("fresh orange jucie",25,qty)} />
          </div>
          <div className='b'>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlxwop3XvUhKV3iHwUBrMlgl5it40t5cnKg&s' alt=''/>
             <h3>Chocolate Milkshake</h3>
            <h4>price ₹ 30/-</h4>
            <Set onChange={(qty)=>updateCart("Chocolate Milkshake",30,qty)} />
          </div>
          <div className='b'>
             <img src='https://livinghealthywithchocolate.com/wp-content/uploads/2016/02/Paleo-Strawberry-Milkshake-dairy-free-sugar-free-gluten-free.jpg' alt=''/>
             <h3>Strawberry Milkshake</h3>
            <h4>price ₹ 30/-</h4>
            <Set onChange={(qty)=>updateCart("Strawberry Milkshake",30,qty)} />
          </div>
        </div><br/>
        <h2>Snacks</h2>

        <div className='a'>
          <div className='b'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5mxPW-2W_xvjQBjAAn4Go4OGQVlTpCAU4nA&s' alt=''/>
            <h3>Veg Sandwich</h3>
            <h4>₹30</h4>
            <Set onChange={(qty)=>updateCart("Veg Sandwich",30,qty)} />
          </div>

          <div className='b'>
            <img src='https://www.cookwithkushi.com/wp-content/uploads/2018/04/best_grilled_margherita_cheese_sandwich_recipe.jpg' alt=''/>
             <h3>Grilled cheese sandwich</h3>
            <h4>price ₹ 40/-</h4>
            <Set onChange={(qty)=>updateCart("Grilled cheese sandwich",40,qty)} />
          </div>
          <div className='b'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUanni34nh7mG-2DNxEZzek3uhPrcdVHMBA&s' alt=''/>
             <h3>Club sandwich</h3>
            <h4>price ₹ 50/-</h4>
            <Set onChange={(qty)=>updateCart("Club sandwich",50,qty)} />
          </div>
        </div>
<div className='a'>
          <div className='b'>
            <img src='https://images.themodernproper.com/production/posts/2022/Homemade-French-Fries_8.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1662474181&s=50bccc38a736ef0e0a6e261ad23378f4' alt=''/>
             <h3>French fries</h3>
            <h4>price ₹ 45/-</h4>
            <Set onChange={(qty)=>updateCart("French fries",45,qty)} />
          </div>
          <div className='b'>
            <img src='https://static01.nyt.com/images/2018/12/11/dining/as-garlic-bread/as-garlic-bread-googleFourByThree-v2.jpg' alt=''/>
             <h3>Garlic bread</h3>
            <h4>price ₹ 25/-</h4>
            <Set onChange={(qty)=>updateCart("Garlic bread",25,qty)} />
          </div>
          <div className='b'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpCMCouPSDZqvpv2IMhuxCY8plDIEnexGtQ&s' alt=''/>
             <h3>veg burger</h3>
            <h4>price ₹ 50/-</h4>
            <Set onChange={(qty)=>updateCart("veg burger",50,qty)} />
          </div>
        </div><br/>
        <h2>Cakes</h2>
        <div className='a'>
          <div className='b'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODGlekQYeGa8C0439M6uBI1Jx-EYLUr3TrA&s' alt=''/>
             <h3>Chocolate cake</h3>
            <h4>price ₹ 75/-</h4>
            <Set onChange={(qty)=>updateCart("Chocolate cake",75,qty)} />
          </div>
          <div className='b'>
            <img src='https://static01.nyt.com/images/2024/06/04/multimedia/Red-Velvet-Cake-twcf/Red-Velvet-Cake-twcf-mediumSquareAt3X.jpg' alt=''/>
             <h3>red velvet cake</h3>
            <h4>price ₹ 80/-</h4>
            <Set onChange={(qty)=>updateCart("red velvet cake",80,qty)} />
          </div>
          <div className='b'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBIPFxQLy6CyJD_zy9jweokseBM-DjpJs5A&s' alt=''/>
             <h3>cheesecake</h3>
            <h4>price ₹ 70/-</h4>
            <Set onChange={(qty)=>updateCart("cheesecake",70,qty)} />
          </div>
        </div>
        <div className='a'>
          <div className='b'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSSyBvhNnKZ9D1Rgj-6_WHMXFlR1HE7jkCA&s' alt=''/>
             <h3>brownie with ice cream</h3>
            <h4>price ₹ 70/-</h4>
            <Set onChange={(qty)=>updateCart("brownie with ice cream",70,qty)} />
          </div>
          <div className='b'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUI4CNO8u1DGvVKaNpzz_fXbaU3xaVw0T7og&s' alt=''/>
             <h3>Cupcake</h3>
            <h4>price ₹ 30/-</h4>
            <Set onChange={(qty)=>updateCart("Cupcake",30,qty)} />
          </div>
          <div className='b'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4cneuLWC6c6dNxa_93NLwHFUFeNIExxjrQ&s' alt=''/>
             <h3>cookies</h3>
            <h4>price ₹ 15/-</h4>
            <Set onChange={(qty)=>updateCart("cookies",15,qty)} />
          </div>
        </div><br/>
      </div>

      <button onClick={handleSubmit}>Submit</button>

      <h3>{message}</h3>

      <h2>Bill</h2>

      {bill.map((item,index)=>(
        <p key={index}>{item}</p>
      ))}

      <h3>Total: ₹{total}</h3>

    </div>
  );
}

export default Menu;