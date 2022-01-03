import React from 'react'
import AssetTokens from './AssetTokens'
import ChooseUs from './ChooseUs'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar'
// import AOS from 'aos';
// import 'aos/dist/aos.css';


const AssetToken = () => {

    return (
        <>
           <Navbar /> 
           <div className="asset-front">
<div className="asset-front-img"></div>
<div className="asset-front-text">
<h1>Asset Tokenisation Services over blockchain</h1>
<p>Building Secure and Scalable Real World
Asset Backed Crypto Tokens</p>
<a href="https://wa.me/9007271601" target ="_sultan"><button>REQUEST A FREE DEMO</button></a>
</div>
           </div>

           <div className="asset-text">
<h1>Navigate Toward the Era of Asset Backed Tokenization</h1>
<p>Asset backed tokenization is the process of converting the value of any physical asset into a digital token
that can be traded over an exchange. Using Blockchain, the transfer of ownership and storage can be performed speedily
without any dependency on a centralized finance entity.</p>
           </div>

           {/* Digital Asset Tokenisation */}

           <div className="digital">
<div className="digital-text">
<h1>Digital Asset Tokenization: Unlocking New Possibilities</h1>
<p>Blockchain has an ambition to create a democratic financial environment wherein the subscribers such as investors, lenders and borrowers hold complete authority over their assets. With asset tokenization solutions, businesses have discovered a powerful channel to put underutilized or any illiquid assets to productive use.</p>
<p>Besides liquidating the abandoned assets, asset backed token development is an enormous industry brimming to dominate the way traditional finance operates. Finance institutions can directly gain the benefits of automated KYC and investor verification followed by seamless liquidation of assets. The process is scalable and in complete synchronization with the risk metrics attached.</p>
<p>As pioneers of building enterprise-grade dApps, Innovacio Solutions has been spearheading the new wave of Tokenomics. Working closely with finance corporates, our roadmap is designed in proximity with another giant economy in the making known as the DeFi (Decentralized Finance). Our asset tokenization experts bring on board exceptional expertise in asset tokenization platform development and the ripple effect caused by decentralization nuances.</p>
<div className="digital-text-btn">
<a href="https://wa.me/9007271601" target ="_sultan"><button>CONNECT ON WHATSAPP</button></a>
    <a href="skype:live:79dd6e12e4ec63cf?chat" target="_sultan"><button>CONNECT ON SKYPE</button></a>
</div>
</div>

<div className="digital-img"> </div>
           </div>

           {/* Capitalized Asset Backed Token */}
           <div className="cap-asset">
           <div className="cap-asset-h">
<h2>Asset tokenization platform development can be a convoluted affair that not only involves establishing an enterprise-grade infrastructure but also produces regulatory uncertainties. What makes it more complicated is the absence of any advisory standards and code of conduct for the digital assets development architecture.</h2>
           </div>
           <div className="cap-asset-h">
<h3>Innovacio addresses the complexities through strategic consulting in asset backed token development. Innovacio Solutions has empowered businesses in venturing into newer markets that collaborate with potential customers. With a razor-sharp focus on fortifying the platform against cybercrime, our ideation works in sync with the standards of the tokenized economy.</h3>
<h3>For over 5 years, we have built a vast portfolio of asset backed security token across tangible (patents, equity shares etc.), fungible (Gold, Silver etc.), non-fungible (Real Estate, Art pieces etc.) categories. Offering an overarching frictionless experience over Blockchain, the digital asset tokenization platform produces an intuitive experience for the investor with Automated Dividends, Holdings in another fund, Buyback rights and incentivizing.</h3>
           </div>


           </div>

           {/* Our Asset Token Offerings */}
           <div className="asset-tko">
<h1>Our Asset Tokenized Offerings</h1>
<h3>Whether physical or digital, it is possible to tokenize any asset on the Innovacio's framework. Over the years, we have helped businesses unlock
new avenues with tokenization of financial assets and make them trade able across digital platforms. With proven consulting across
a breath of Fungible & Non-Fungible assets, we provide end-to-end token lifecycle consulting for and not limited to -</h3>

<AssetTokens />
<h3>Learn how Innovacio helps in converting any asset into a digital token</h3>
<a href="https://wa.me/9007271601" target ="_sultan"><button>TALK TO OUR EXPERTS</button></a>
           </div>

           {/* Enterprise Benefit */}
           <div className="enterprise">
           <h1>Enterprise Benefit: Reasons for Digital Asset Tokenization</h1>
           <h3>Innovacio builds an end-to-end ecosystem for enterprises to unbolt enormous prospects from the rise of tokenomy. With our ready to
deploy white label asset tokenization platform, businesses can leverage the fortune to proffer Tokenization-as-a-service (TaaS)
to all their investors and asset owners. While the asset owners benefit from immutable records and transparent transactions, the platform owners
can widen their horizon by including tokens from all industries.</h3>
<div className="enterprise-grid">
<div className="entp">
     <div className="entp-img entp0"></div>
     <h2>High Liquidity</h2>
     <p>It qualifies illiquid assets for trade in secondary markets. The self-regulating protocol of Blockchain platforms empowers direct transfer of ownership within the compliance rules set by the smart contract. Such an opportunity to trade on regulated exchanges improves the liquidity.</p>
</div>

<div className="entp">
     <div className="entp-img entp1"></div>
     <h2>Faster and cheaper transactions</h2>
     <p>The automation done by Smart Contracts abbreviate the chances of manual validation thereby make the overarching transaction cycle faster, smarter and securer. High throughput rates on decentralized platforms fasten contract locking at drastically lower fees.</p>
</div>

<div className="entp">
     <div className="entp-img entp2"></div>
     <h2>Fractional Ownership</h2>
     <p>Enables investors to purchase a percentage of the tokenized asset. Tokenization makes the asset highly divisible for trading while empowering the small-medium scale investor to enter the market. It produces a more democratic ecosystem for anyone to sign up and purchase.</p>
</div>

<div className="entp">
     <div className="entp-img entp3"></div>
     <h2>Broader Investor Base</h2>
     <p>It results in a broader investor base to participate in the investment process. Tokenization of real world assets would open opportunities for a new set of investors and allow them to diversify their investment portfolio into assets that they could not afford previously.</p>
</div>

</div>

           </div>

           <div className="y-us">

<div className="y-us-h"><h1>Why Choose Us as Your NFT Token Development Company</h1></div>
<div className=" y-us-p"><p>By partnering with Innovacio, you can rely on a team of seasoned NFT developers with real-world experience creating success stories.</p></div>

           <ChooseUs />
           </div>
           <Blog />
           <Contact />
           <Footer />
        </>
    )
}

export default AssetToken
