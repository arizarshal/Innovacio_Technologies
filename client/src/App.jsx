import React,{useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import Navbar from './Navbar';
import Body from './Body';
import Nftdev from './Nftdev';
import Defi from './Defi';
import Coindev from './Coindev';
import Blockchain  from './Blockchain';
import Staking from './Staking';
import Wallet from './Wallet';
import Hybridex from './Hybridex';
import DexDev from './DexDev';
import Marginex from './Marginex';
import P2P from './P2P';
import SecEx from './SecEx';
import SecToken from './SecToken';
import AssetToken from './AssetToken';
import StableCoin from './StableCoin';
import Ico from './Ico';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import ScrollToTop from './ScrollToTop';
import Nftgames from './Nftgames';
import Life from './Life';
import About from './About';
import ProductListing from "./containers/ProductListing";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

// document.addEventListener('contextmenu', event => event.preventDefault());

const App = () => {
  // useEffect(() => {
  //   AOS.init();
  //        }, []);
             return (
               <Router>
      <Switch>
        <Route exact path="/">
        <ScrollToTop />
<Navbar />
<Body />
        </Route>
  
        <Route path="/nft-dev">
        <ScrollToTop />

        <Nftdev />
        </Route>
  
        <Route path="/defi">
          <Defi />
        </Route>
  
        <Route path="/coin">
          <Coindev />
        </Route>

        <Route path="/blockchain">
          <Blockchain />
        </Route>

        <Route path="/staking">
          <Staking />
        </Route>

        <Route path="/wallet">
          <Wallet />
        </Route>

        <Route path="/hybrid">
          <Hybridex />
        </Route>

        <Route path="/dex">
          <DexDev />
        </Route>

        <Route path="/marginex">
          <Marginex />
        </Route>

        <Route path="/p2p">
          <P2P />
        </Route>

        <Route path="/sec_ex">
         <SecEx />
        </Route>

        <Route path="/sec_token">
       <SecToken />
        </Route>

        <Route path="/asset_token">
       <AssetToken />
        </Route>

        <Route path="/stable">
<StableCoin />
        </Route>

        <Route path="/ico">
<Ico />
        </Route>
        <Route path="/nftGames">
<Nftgames />
        </Route>
      
        <Route path="/life">
<Life />
        </Route>
        <Route path="/about">
<About />
        </Route>
        <Route path="/blog" exact component={ProductListing}  />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>

      </Switch>
      </Router>
    );
  };
  
export default App;
