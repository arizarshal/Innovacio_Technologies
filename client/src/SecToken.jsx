import React from 'react';
import AssetTokens from './AssetTokens';
import Navbar from './Navbar';
import Featnft from './Featnft';
import Faq from './Faq';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';



const SecToken = () => {
    return (
        <>
            <Navbar />

            {/* Security Token Development Front */}
            <div className="sec-token-front">
            <h1>Security Token Development</h1>
            <div className="sec-token-div">
            <div className="sec-token-img"> <video src="https://www.antiersolutions.com/wp-content/uploads/2021/08/STO.mp4" autoPlay muted loop /></div>
            <div className="sec-token-text">
            <h2>Future of fundraising is here. Amplify your project funding at a stellar pace with security token offerings.</h2>
            <a href="https://wa.me/9007271601" target ="_sultan"><button>TALK TO OUR EXPERTS</button></a>

            </div>

            </div>

            </div>

            <div className="sec-token-h">
<h3>Innovacio fuels the future of legal fundraising through strategic consulting and forward-thinking security token
development services. Your idea on the anvil is intelligently shaped into a perfect solution that facilitates market
penetration and engagement with potential investors. Our mission-driven approach drawn from our strength in
technology areas leads to meaningful business outcomes to nurture your growth.</h3>
            </div>

            {/* Types of STO */}

            <div className="types-sto">
            <h1>Types of STO Development Services</h1>
<div className="sto-types">

<div className="sto">
<div className="sto-img sto0"></div>
<h2>Equity Tokens</h2>
<p>Optimize best opportunities for fundraising with our design thinking-driven approach to equity token creation.</p>
</div>

<div className="sto">
<div className="sto-img sto1"></div>
<h2>Assets Tokens</h2>
<p>Ride the growth wave in the STO (Security Token Offering) market with asset tokenization to capture relevant market opportunities.</p>
</div>

<div className="sto">
<div className="sto-img sto2"></div>
<h2>Debts Tokens</h2>
<p>Leverage our peer-driven, result-oriented approach to tokenize debt instruments and attract more investors.</p>
</div>

</div>

            </div>




            {/* Types Of Assets Tokenisation */}

            <div className="asset-tko">
            <h1>Types of Asset Tokenisation</h1>
<AssetTokens />
            </div>


            {/* Security Token Offering Services */}
            
            <div className="sec-tok">
            <h1>Security Token Offering Services</h1>

            <div className="sec-tok-grid">

            <div className="sec-toks">
            <div className="sec-toks-img sec0"></div>
            <h2>Security Token Offering Development</h2>
            <p>A coherent roadmap to create a strategic plan navigates your security token development journey with Innovacio. We employ best approaches, practices and programs based on your business goals to help you extract business value from your idea. All essential aspects associated with STO, such as SEC regulations and smart contract development are diligently taken care of.</p>
            </div>


            <div className="sec-toks">
            <div className="sec-toks-img sec1"></div>
            <h2>Security Token Exchange Platform Development</h2>
            <p>Our security token development company follows end-to-end programmatic approach to build a secure, SEC-compliant exchange underpinned by features like modular architecture, powerful trade engine, high liquidity and smart contract integration. Members of our strongly cohesive teams accelerate your deployments and align activities with your goals to propel your business growth.</p>
            </div>


            <div className="sec-toks">
            <div className="sec-toks-img sec2"></div>
            <h2>STO Marketing</h2>
            <p>Cut through the noise with our multichannel marketing approach to stay ahead of the competition. Our fact-supported recommendations and in-depth understanding of competitive STO industry help you leverage the best opportunities in the market. The most effective communications coupled with the right marketing platforms command investors attention and influence their perceptions and behaviors.</p>
            </div>


            <div className="sec-toks">
            <div className="sec-toks-img sec3"></div>
            <h2>Tokenized Asset Offering Development</h2>
            <p>Asset tokenization is bringing trillions of dollars to the blockchain. Leverage our strategy-driven approach to lay a solid foundation for digital business transformation.</p>
            
            </div>

            </div>

            </div>

<div className="nft-feat">
<h1>Features of NFT Token Offerings</h1>
<Featnft />
</div>


<Faq />
<Blog />
<Contact />
<Footer />
        </>
    )
}

export default SecToken
