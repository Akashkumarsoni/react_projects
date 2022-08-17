import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Contact from "./Contact";
import { products } from "./Data";
import SearchContent from "./SearchContent";
import Checkout from "./Checkout";
import contxtname from "./Contxt";


const App = () => {
  const [state,setState] = React.useState({
    cartvalues: [],
      additem: 0,
      emptycartar: [],
  })
const contxtobj = React.useContext(contxtname);

  const addtocart = (e) => {
    let cartarray;
    products.map((i) => {
      if (i.id === e.target.id) {
        var k = {
          id: i.id,
          name: i.name,
          price: i.price,
          pic: i.pic,
          quan: 1,
        };
        var d=-1
        state.cartvalues.forEach(a=>{
          d=d+1;
          if(a.id == k.id){
            k = {
              id: i.id,
              name: i.name,
              price: i.price,
              pic: i.pic,
              quan: Number(a.quan)+1,
            };
            state.cartvalues.splice(d,1)
            setState({
              ...state,
              cartarray: state.cartvalues
            })
          }
        })
        console.log(cartarray)
        cartarray = [...state.cartvalues, k];
        setState({
          ...state,
          cartvalues: cartarray,
        });
      }
    });

  }

  const emptycartarea = (v) => {
    setState({
      ...state,
      cartvalues: [],
    });
  };

  const deleteit=(e)=>{
    var pid = e.target.id;
    let l=-1;
    state.cartvalues.map(i=>{
      l=l+1;
      if(i.id == pid){
        state.cartvalues.splice(l,1)
        setState({
          ...state,
          cartvalues:state.cartvalues
        })
      }
    })

  }
    return (
      <>
        <Nav cartcount={state.cartvalues.length}/>
        <Routes>
          <Route path="/" element={<Home addtocartfunc={addtocart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                sendingToCart={state.cartvalues}
                emptyToCart={emptycartarea}
                deletethis={deleteit}
              />
            }
          />
          <Route path="/searched" element={<SearchContent addtocartfunc={addtocart} />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout empcart={emptycartarea} />}/>
        </Routes>
      </>
    );
}

export default App
