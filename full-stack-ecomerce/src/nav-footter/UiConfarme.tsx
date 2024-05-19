'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Img from '../app/carousel/Img'
import React from 'react';
import { useAppSelector } from '@/Golobal-Redux/hooks';
import { RootState } from '@/Golobal-Redux/Store';
const CheckoutForm = () => {
  const data :any = useAppSelector((state: RootState) => state.Buy);
  const price=data.notes.reduce((acc:number,product:any)=>{
    acc+=(product.id.price*product.quantite)
      return acc
    },0)
const [firstName, setfirstName] = useState("");
const [lastName, setlastName] = useState("");
const [email, setEmail] = useState("");
const [code_promo, setcode_promo] = useState("");
const [numiro_client,setnumiro_client]=useState("");
const [ city,setcity]=useState("");
const [State,setState]=useState("");
const [Address,setAddress]=useState("");
const [Title,setTitle]:any=useState([]);
const [ color,setcolor]:any=useState([]);
const [ size,setsize]:any=useState([]);
const [id,setid]:any=useState([]);
const [priceTotal,setpriceTotal]:any=useState([])
const [card_shoping,setcard_shoping]:any=useState({title:Title,id:id,priceT:priceTotal});
  const router=useRouter()
  const handleSubmit = async (e:any) => {
    e.preventDefault();
if(!Title.length&&!id.length&&!priceTotal.length)
 {   data.notes.map((product:any)=>{
     Title.push(product.id.title);
     id.push(product.id.id);
     priceTotal.push(price);
    })}
    try {
      const res = await fetch("http://localhost:3000/api/information_Shopping_client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({firstName,lastName, email,numiro_client,city ,State,Address,card_shoping}),
      })
      if (res.ok) {
        const form = e.target;
        form.reset();
        alert("thank you for shopping")
        router.push('/')
      } else {
        console.log("User registration failed.");
      }
    }  catch(error){
        console.log(error)
      }}
     
  return (
  
    <div className="container">
      <main>
        <div className="py-5 text-center">
            <div className="d-block mx-auto "style={{width:"100px", height:"80px" }}  >
  
          </div>
          <h2>Confarme your shopping Cart</h2>
         </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
          
                <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{data.notes.length}</span>
            </h4>
            
            <ul className="list-group mb-3">
         
            {  data.notes.map((product:any)=>(
                          <>
              <li className="list-group-item d-flex justify-content-between lh-sm">
          
                <div>
               
                  <h6 className="my-0">{product.id.title.slice(0,10)}</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">{product.id.price}</span>
              </li>
              </>
))}
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small></div>
 
                <span className="text-success">−$5</span>
              </li>


              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${price}</strong>
              </li>
            </ul>
         
            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" onChange={(e) => setcode_promo(e.target.value)}/>
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder=""  required  onChange={(e) => setfirstName(e.target.value)}/>
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" required onChange={(e) => setlastName(e.target.value)}/>
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">Username</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="username" placeholder="Username" required />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com"  onChange={(e) => setEmail(e.target.value)}/>
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required  onChange={(e) => setAddress(e.target.value)}/>
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="nimiro" className="form-label">numiro <span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" id="nimiro" placeholder="Apartment or suite"onChange={(e) => setnumiro_client(e.target.value)} />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select className="form-select" id="country" required onChange={(e) => setState(e.target.value)} >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">State</label>
                  <select className="form-select" id="state" required onChange={(e) => setcity(e.target.value)}>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="zip" placeholder="" required />
                  <div className="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="same-address" />
                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
              </div>

              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="save-info" />
                <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                  <label className="form-check-label" htmlFor="credit">Credit card</label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="debit">Debit card</label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="paypal">PayPal</label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" placeholder="" required />
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">Credit card number</label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                  <div className="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleSubmit}>Continue to checkout</button>
            </form>
          </div>
        </div>
      </main>
</div>

  );
}

export default CheckoutForm;