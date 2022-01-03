import React from 'react';
import Navbar from './Navbar';
import Faq from './Faq';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

const Coindev = () => {
    return (
        <>
         <Navbar />   

         <div className="coin-front">
<h1>Cryptocurrency Coin Development Services</h1>
         <div className="coin-front-el">
<div className="coin-vid">
<video src="https://www.antiersolutions.com/wp-content/uploads/2021/08/Development.mp4" autoPlay muted loop />
</div>
<div className="coin-front-text">
<h2>Position your business for growth with the
future of digital transactions.</h2>
<a href="https://wa.me/9007271601" target ="_sultan"><button>TALK TO OUR EXPERTS</button></a>

</div>
         </div>
         </div>

         {/* Crytpto Development  */}
         <div className="crypto-dev">
         <h1>Cryptocurrency Development</h1>
         <p>Crypto coins are disrupting the global financial industry, reinventing the way we transact. Reducing the
settlement time, eliminating the middleman and boosting the security quotient, cryptocurrencies have
established themselves as a cornerstone of more secure, quick and transparent transactions. To leverage these
benefits of digital currencies, many start-ups and established organizations across the globe are venturing
into coin development, which has fueled the demand for cryptocurrency development services.</p>

         </div>

         {/* Types of Coins */}
         
         <div className="t-coins">
<h1>Types of Coins</h1>
<div className=" t-coins-sec">
<div className="t-coin">
<div className="t-coin-img tc-1"> </div>
<h1>Bitcoin</h1>
<p>The original coin, Bitcoin is a network driven by its participants, without any central authority. In its initial time, the currency faced certain resistance, but was gradually adopted by the people worldwide. Its idea was to eliminate double spending amounts, while waiting confirmations of the payments – a transaction becomes irreversible with the increasing number of verifications.</p>

</div>

<div className="t-coin">
<div className="t-coin-img tc-2"> </div>
<h1>Altcoins</h1>
<p>Altcoin refers to alternative coin. These projects emerge usually as a fork of another project or are created completely from scratch. They are more or less the improved versions of an existing project. Forks are of two types – the hard one is seen as a changing of the rules, which leads to creation of a completely new coin. The soft fork is somehow an updated feature of the currently existing coin.</p>

</div>

<div className="t-coin">
<div className="t-coin-img tc-3"> </div>
<h1>Tokens</h1>
<p>Tokens do not have their own blockchain; they are built on an already existing blockchain. Tokens can represent all kind of assets – from goods to a brand-new cryptocurrency. They are created by following a standard template on the particular platform, and distributed by ICOs (Initial Coin Offerings) and STOs (Security Token Offerings) – which are basically crowdfunding solutions for a new project.</p>

</div>

</div>
         </div>


         {/* Fork Existig Blockchain Protocol */}
<div className="fork-blk">
<div className="fork-blk-1">
<h1>COIN DEVELOPMENT </h1>
<p>Embrace digital transactions by harnessing Innovacio’s strategic coin development services to foster your business growth. Our global team of experts works with each client to help build intelligent strategies around effective use cases and implementation. We have real-world experience delivering comprehensive offerings – from ideation and coin development to launch and marketing - to our clients across a host of industries. Our in-depth knowledge coupled with our technical prowess accelerates and simplifies the Ethereum coin development process. </p>
<div className="fork-blk-1-img"></div>
</div>
<div className="fork-blk-2">
<h1>Fork Existing Blockchain Protocol </h1>
<p>Leverage existing, reliable open-source code to tap into the cryptocurrency ecosystem with your own crypto coin. Our purpose-driven approach empowers us to shape smart strategies and stimulate our activities to fork existing blockchains to create an entirely new protocol with different features, rules and use-cases. </p>
<div className="fork-blk-2-types">
    <div className="type-1">
    <p> Bitcoin fork</p>
    <p> Ethereum fork</p>
    <p> Litecoin fork</p>
    </div> 
    <div className="type-1">
    <p> Ripple fork</p>
    <p> NEO fork</p>
    <p> Stellar fork</p>
    </div> 

</div>
<h1>Create a New Blockchain </h1>
<p>Antier navigates your coin development journey by building a completely new blockchain from the beginning. Our blockchain developers, together with business analysts and project managers possessing deep domain expertise, devise a comprehensive, mission-driven approach to coin development. From choosing a consensus mechanism or the right blockchain platform that aligns with your business objectives to establishing blockchain’s internal architecture, we ensure efficient management at every step of crypto coin development. </p>
</div>


</div>

{/* Types of Tokens */}


<div className="t-tokens">
<div className="t-token-1">
<h1><span>Types of Tokens</span></h1>
<h1>Security</h1>
<p>Back your tokens up with a legal framework to gain essential competitive edge and raise funds quickly and securely.</p>

<h1>Utility</h1>
<p>Ride the growth wave in the ICO market with utility tokens to command investors’ attention and capture relevant market opportunities.</p>


<h1>Equity</h1>
<p>Capitalize on the fundraising opportunity with our design thinking-driven approach to equity token creation.</p>


<h1>Non-Fungible Token</h1>
<p>Launch your NFT tokens to represent ownership of unique items. Tokenize things like art, collectibles, games assets, and even real estate.</p>
<div className="tk-plt">
<h1>Token Issuance Platform</h1>

<div className="tokens-imgs">
    <div className="token-img">
    <div className="token-imgs tk-1"></div>
    <p>Ethereum</p>
     </div>

     <div className="token-img">
    <div className="token-imgs tk-2"></div>
    <p>EOS</p>

     </div>

     <div className="token-img">
    <div className="token-imgs tk-3"></div>
    <p>NEO</p>

     </div>

     <div className="token-img">
    <div className="token-imgs tk-4"></div>
    <p>Stellar</p>
     </div>

     <div className="token-img">
    <div className="token-imgs tk-5"></div>
    <p>Hyperledger</p>
     </div>


</div>
</div>

</div>

<div className="t-token-2">
<h1>TOKEN
DEVELOPMENT </h1>
<p>Amplify your fundraising opportunities by tokenizing your assets. Our blockchain engineers incorporate modern agile practices, design methodologies and technology agnostic approach to deliver a solution that puts you on the front line. Whether it is ERC20 token development or building a token on Binance Smart Chain, we align our services with your needs. </p>
<div className="t-token-2-img"></div>
</div>

</div>

<Faq />
<Blog />
<Contact />
<Footer />
        </>
    )
}

export default Coindev
