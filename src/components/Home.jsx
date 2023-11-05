import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className='home' id="home">
    <main>
      <h1>TechFront</h1>
      <p>Solution to all your problems</p>
    </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
          We are your one and only solution to tech problems you face 
          every day. We are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
      </div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}} >
          <AiFillGoogleCircle />
          <p>Google</p>
          </div>
          <div style={{animationDelay:"0.5s"}} >
          <AiFillAmazonCircle />
          <p>Amazon</p>
          </div>
          <div style={{animationDelay:"0.7s"}} >
          <AiFillYoutube />
          <p>Youtube</p>
          </div>
          <div style={{animationDelay:"0.9s"}} >
          <AiFillInstagram />
          <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  );
}

export default Home;