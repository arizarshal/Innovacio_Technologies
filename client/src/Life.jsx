import React from 'react';
import Navbar from './Navbar';
import Blog from './Blog';
import Footer from './Footer';

const Life = () => {
    return (
        <>
           <Navbar /> 

           <div className="life-front"></div>

           <div className="life-front-text">
<div><h1>A Great, Lively, Innovative place to work</h1></div>
<div><p>Innovacio is an organization for the people organization and by the people. We strongly believe that together we can be the best there in the world of blockchain. We choose our team members diligently and give them reasons to stay as they grow. We aim to nurture lives and offer constant growth opportunities on both an IQ as well as EQ level.</p></div>
           </div>

           <div className='life-believe'>
           <h1>What we Believe</h1>
           <p>Our values serve as our guiding lights in every transformation that we make for our company and our clients.</p>
           <div className='believe-grids'>
<div className='believe-grid'>
<div className='believe-img bl-img0'></div>
<h3>Transparency</h3>
<p>Grounded in the value of open and honest communication, we operate in a completely transparent manner to ensure the success of our clients.</p>
</div>

<div className='believe-grid'>
<div className='believe-img bl-img1'></div>
<h3>Passion</h3>
<p>At Innovacio, we do everything with passion – for our clients and our organization. Our teams are driven by the enthusiasm and commitment to deliver exceptional services to our clients.</p>
</div>

<div className='believe-grid'>
<div className='believe-img bl-img2'></div>
<h3>Empowerment</h3>
<p>Innovacio is driven by the motto to deliver results. We encourage end-to-end ownership, responsibility and accountability, and adopt the right technologies to get the job done.</p>
</div>

<div className='believe-grid'>
<div className='believe-img bl-img3'></div>
<h3>Collaboration</h3>
<p>Our cross-capability experts share knowledge and work together as a team to achieve a common goal – for our clients and ourselves.</p>
</div>

<div className='believe-grid'>
<div className='believe-img bl-img4'></div>
<h3>Customer Focus</h3>
<p>We navigate our clients’ journeys toward being high-performance businesses and create long-term relationships by being responsive and consistently delivering value.</p>
</div>

<div className='believe-grid'>
<div className='believe-img bl-img5'></div>
<h3>Integrity</h3>
<p>We uphold the highest standards of governance and orchestrate business processes with moral and intellectual integrity.</p>
</div>
           </div>
<div className='believe-btn'>
<a href="https://wa.me/9007271601" target ="_sultan"><button>CONNECT ON WHATSAPP</button></a>
    <a href="skype:live:79dd6e12e4ec63cf?chat" target="_sultan"><button>CONNECT ON SKYPE</button></a>
</div>
           </div>

           <div className='spirit'>
                <div className='spirit-text'>
<h2>Our Spirit</h2>
<h3>To navigate the journey from thinking digital to being digital.</h3>
<p>Imbued with a spirit of entrepreneurship and innovation, we toil relentlessly to transform a vision into a meaningful outcome.</p>
<p>Tools like design thinking empower us to identify a problem, cognitive skills help discover solutions, and strategically-designed solutions serve as our beacons on the journey to steer towards the future.</p>
<p>At Innovacio, we bring profound, positive change with the creative freedom to ideate and ingenious tools to create.</p>
<a href="https://wa.me/9007271601" target ="_sultan"><button>TALK TO OUR EXPERTS</button></a>
                </div>
                <div className='spirit-img'></div>
           </div>

           <div className='diversity'>
           <div className='diversity-grid'>
<div className='diversity-img'></div>
<div className='diversity-text'>
    <h1>Diversity</h1>
    <h2>Highly motivated people focused to deliver meaningful outcomes</h2>
    <p>We believe that if an innovation has to cater to people from different walks of life, it should come from people from diverse backgrounds. This is why we have a team of over 150 highly motivated individuals from varied realms – with different interests,
skills and ideas – operating out of 5 countries.</p>
<a href="https://wa.me/9007271601" target ="_sultan"><button>TALK TO OUR EXPERTS</button></a>
</div>
</div>
           </div>

           <Blog />
           <Footer />
        </>
    )
}

export default Life
