import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";





function Navbar(){

const [showMediaIcons, setShowMediaIcons] = useState(false);

    return(
        <>
<div className = 'navb'> 
<nav className="navbar0">
<NavLink to="/"><div className="brand-img"> </div></NavLink>
<NavLink to= "/"><div className="brand-name">INNOVACIO <span className='blk'>BLOCKCHAIN</span></div></NavLink>
        

        <div className={
                      showMediaIcons ? "mobile-menu-link" : "navbar"
        }>

<div className="dropdown">
    <button className="dropbtn">COIN DEVELOPMENT
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    <NavLink to="/coin">Coin/Token Development</NavLink>
      {/* <a href="#">IDO Development Services</a> */}
      <NavLink to="/ico">ICO Development</NavLink>
      <NavLink to = "/stable">Stable Coin Development</NavLink>
      {/* <a href="#">White Paper Development</a> */}
      <NavLink to="/sec_token">Security Token Development</NavLink>
      {/* <a href="#">Security Token Marketing</a> */}
      <NavLink to="/asset_token">Asset Tokenization</NavLink>

    </div>
  </div>

<div className="dropdown">
  <NavLink to="/wallet"><button>CRYPTO WALLET</button></NavLink>
</div>

  <div className="dropdown">
    <button className="dropbtn">CRYPTO EXCHANGE
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      {/* <a href="#">White Label Exchange</a> */}
      <NavLink to ="/hybrid">Hybrid Cryptocurrency Exchange Development</NavLink>
      <NavLink to ="/marginex">Margin Trading Exchange</NavLink>
      {/* <a href="#">Derivatives Exchangne Development</a> */}
      <NavLink to="p2p">P2P Exchange Platform</NavLink>
      <NavLink to="/sec_ex">Security Exchange Development</NavLink>
      <NavLink to="/dex">Decentralized Exchange Development</NavLink>
      {/* <a href="#">Market Making Services</a> */}
    </div>
  </div>


  <div className="dropdown">
    <button className="dropbtn">DEFI
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    <NavLink to="/defi">DEFI Solutions</NavLink>
      {/* <a href="#">DeFi Wallet Development</a> */}
      {/* <a href="">DeFi Yield Farming Development</a> */}
      <NavLink to="/Staking">DEFI Staking Platform</NavLink>
      {/* <a href="#">DeFi Lending and Borrowing</a> */}
      {/* <a href="#">dApp Development Services</a> */}
      {/* <a href="#">DeFi Lottery Platform Development</a> */}

    </div>
  </div>


  <div className="dropdown">
    <button className="dropbtn">NFT
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    <NavLink to="/nft-dev">NFT DEVELOPMENT</NavLink>
      {/* <a href="#">NFT Marketplace Development</a>
      <a href="#">NFT Gaming Platform Development </a>
      <a href="#">Semi Fungible Token Development </a> */}

    </div>
  </div>


  <div className="dropdown">
<NavLink to="/nftGames"><button>CRYPTO GAMING</button></NavLink>
    </div>    

  
  <div className="dropdown">
   <button className="dropbtn">BLOCKCHAIN <i className="fa fa-caret-down"></i> </button>
    <div className="dropdown-content">
      <NavLink to="/blockchain">Use Case</NavLink>
      {/* <a href="#">Enterprise Blockchain</a>
      <a href="#">Smart Contact</a>
      <a href="#">P2P Lending Platform</a>
      <a href="#">Binance Smart Chain Development Services</a>
      <a href="#">Polkadot Smartchain Development</a> */}

    </div>
  </div>
  <div className="dropdown">
  <NavLink to = "/blog"><button>BLOG</button></NavLink>
</div>

  <div className="dropdown">
    <button className="dropbtn">INNOVACIO<i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <NavLink to="/about">About Us</NavLink>
      {/* <a href="#">Media</a>
      <a href="#">Contact Us</a>
      <a href="#">We are Hiring</a> */}
      <NavLink to="/life">Life at Innovacio</NavLink>

    </div>
  </div>
</div>
        <div className='reach'>
        <a href="https://wa.me/9007271601" target ="_sultan"><button>REACH US</button></a>
        </div>
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>

    </nav>
</div>


        </>

    )
}

export default Navbar;