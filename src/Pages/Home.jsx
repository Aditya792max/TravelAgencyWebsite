import React from "react";
import "../Styles/Home.css";
import { FcRating } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

function Home() {
     return (
          <div className="home-container">

               {/* HERO SECTION */}
               <section className="hero">
                    <div className="hero-left">
                         <h1 className="hero-title">
                              THE ADVENTURE <br />
                              <strong style={{ color: "#007bff", fontWeight: 700 }}>BEGINS HERE !!!</strong>
                         </h1>
                         <p className="hero-sub">
                              Check out the ultimate global travel checklist with your travel
                              partner. Make unforgettable memories.
                         </p>
                         <div className="search-box">
                              <input type="text" placeholder="Where do you want to go?" />
                              <button>Search</button>
                         </div>

                         <div className="stats">
                              <div><h2>55+</h2><p>Destinations</p></div>
                              <div><h2>200+</h2><p>Tourists</p></div>
                              <div><h2>100+</h2><p>Hotels</p></div>
                         </div>
                    </div>

                    <div className="hero-right">
                         <div className="hero-img-circle">
                              <img src="./boat.jpg" alt="hero" />
                         </div>
                    </div>
               </section>

               {/* TOP PICKS */}
               <section className="top-picks">
                    <h2>This Week’s Top Picks</h2>
                    <div className="top-picks-box">
                         <div className="pick-card">
                              <img src="./indonasia.jpg" alt="" />
                              <div className="name-rate">
                                   <h3>Island Indonasia</h3>
                                   <h3>3.3 <FcLike className="rating-icon" /></h3>
                              </div>
                         </div>

                         <div className="pick-card">
                              <img src="./rajasthan.jpg" alt="" />
                              <div className="name-rate">
                                   <h3>Udaypur</h3>
                                   <h3>3.3 <FcLike className="rating-icon" /></h3>
                              </div>

                         </div>
                         <div className="pick-card">
                              <img src="./japan2.jpeg" alt="" />
                              <div className="name-rate">
                                   <h3>Japan</h3>
                                   <h3>3.3 <FcLike className="rating-icon" /></h3>
                              </div>
                         </div>
                         <div className="pick-card">
                              <img src="./italy.jpeg" alt="" />
                              <div className="name-rate">
                                   <h3>Italy</h3>
                                   <h3>3.3 <FcLike className="rating-icon" /></h3>
                              </div>
                         </div>
                    </div>
               </section >

               {/* FEATURES SECTION */}
               < section className="features" >
                    <div className="feature-card">
                         <h3>Sign Up</h3>
                         <p>Create your account for personalized recommendations.</p>
                    </div>

                    <div className="feature-card">
                         <h3>Worth of Money</h3>
                         <p>We compare over 1000+ destinations to get you the best value.</p>
                    </div>

                    <div className="feature-card">
                         <h3>Exciting Travel</h3>
                         <p>Enjoy amazing adventures tailored just for you.</p>
                    </div>
               </section >

               <section className="destinations">
                    <h2>Popular Destinations</h2>

                    <div className="scroll-container">
                         <div className="dest-grid scroll-content">

                              {/* ORIGINAL LIST */}
                              <div className="pick-card">
                                   <img src="./tbg.webp" alt="" />
                                   <div className="name-rate">
                                        <h3>Tropical Beach, Germany</h3>
                                        <h3>3.3 <FcLike className="rating-icon" /></h3>
                                   </div>
                              </div>

                              <div className="pick-card">
                                   <img src="./mbb.webp" alt="" />
                                   <div className="name-rate">
                                        <h3>Millenium Bridge, UK</h3>
                                        <h3>3.3 <FcLike className="rating-icon" /></h3>
                                   </div>
                              </div>

                              <div className="pick-card">
                                   <img src="./st.jpg" alt="" />
                                   <div className="name-rate">
                                        <h3>Sunset City, Thailand</h3>
                                        <h3>3.3 <FcLike className="rating-icon" /></h3>
                                   </div>
                              </div>

                              <div className="pick-card">
                                   <img src="./gca.webp" alt="" />
                                   <div className="name-rate">
                                        <h3>Grand Canyon, USA</h3>
                                        <h3>3.3 <FcLike className="rating-icon" /></h3>
                                   </div>
                              </div>

                              <div className="pick-card">
                                   <img src="./motf.avif" alt="" />
                                   <div className="name-rate">
                                        <h3>Museum Of The Future, Dubai</h3>
                                        <h3>3.3 <FcLike className="rating-icon" /></h3>
                                   </div>
                              </div>
                              <div className="pick-card">
                                   <img src="./cpny.jpeg" alt="" />
                                   <div className="name-rate">
                                        <h3>The Central Park, New York</h3>
                                        <h3>3.3 <FcLike className="rating-icon" /></h3>
                                   </div>
                              </div>

                              {/* DUPLICATE (for seamless infinite scroll) */}
                              {/* COPY EXACT SAME BLOCK AGAIN */}
                         </div>
                    </div>
               </section>

               {/* SHORT STORY */}
               < section className="story" >
                    <div className="story-left">
                         <div className="story-grid">
                              <img src="./myImg1.jpeg" alt="" />
                              <img src="./myImg2.jpg" alt="" />
                              <img src="./myImg3.jpeg" alt="" />
                              <img src="./myImg4.jpeg" alt="" />
                         </div>
                    </div>

                    <div className="story-right">
                         <h2>Our Short Story</h2>
                         <p>
                              Our aim is to make global travel more personalized and seamless.
                              We achieve this through a network of professional travel agents.
                         </p>
                         <button>See More</button>
                    </div>
               </section >

               {/* TESTIMONIALS */}
               < section className="testimonials" >
                    <h2>Reviews:</h2>

                    <div className="scroll-container">
                         <div className="scroll-content">

                              <div className="name-rate">
                                   <div className="textBox">
                                        <h3>Arvind Makhija</h3>
                                        <h3>3.3 <FcLike className="rating-icon" /></h3>
                                        <h3>Loved the Experience!!!</h3>

                                   </div>
                              </div>
                              <div className="name-rate">
                                   <div className="textBox">
                                        <h3>Anand Bhanushali</h3>
                                        <h3>4.5 <FcLike className="rating-icon" /></h3>
                                        <h3>Amazing service and support!</h3>
                                   </div>
                              </div>
                              <div className="name-rate">
                                   <div className="textBox">
                                        <h3>Arvind Banerjee</h3>
                                        <h3>4.5 <FcLike className="rating-icon" /></h3>
                                        <h3>Loved the pricing of the products and the service!</h3>
                                   </div>
                              </div>

                              <div className="name-rate">
                                   <div className="textBox">
                                        <h3>Sunita Sharma</h3>
                                        <h3>4.8 <FcLike className="rating-icon" /></h3>
                                        <h3>Excellent customer service!</h3>
                                   </div>
                              </div>
                              <div className="name-rate">
                                   <div className="textBox">
                                        <h3>Rajesh Kumar</h3>
                                        <h3>4.7 <FcLike className="rating-icon" /></h3>
                                        <h3>Great value for money!</h3>
                                   </div>
                              </div>
                              <div className="name-rate">
                                   <div className="textBox">
                                        <h3>Priya Patel</h3>
                                        <h3>4.9 <FcLike className="rating-icon" /></h3>
                                        <h3>Exceptional travel experience!</h3>
                                   </div>
                              </div>
                              <div className="name-rate">
                                   <div className="textBox">
                                        <h3>Manoj Gupta</h3>
                                        <h3>4.6 <FcLike className="rating-icon" /></h3>
                                        <h3>Reliable and trustworthy!</h3>
                                   </div>
                              </div>
                              <div className="name-rate">
                                   <div className="textBox">
                                        <h3>Deepa Reddy</h3>
                                        <h3>4.7 <FcLike className="rating-icon" /></h3>
                                        <h3>Great attention to detail!</h3>
                                   </div>
                              </div>
                         </div>
                    </div>


               </section >

               {/* NEWSLETTER */}
               < section className="newsletter" >
                    <h2>Subscribe & Get The Latest News</h2>

                    <div className="newsletter-box">
                         <input type="email" placeholder="Enter your e-mail" />
                         <button>Subscribe</button>
                    </div>
               </section >

          </div >

     );
}

export default Home;