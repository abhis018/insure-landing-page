import React from 'react';
import './Body.css';
import logo1 from './icon1.svg';
import logo2 from './icon2.svg';
import logo3 from './icon3.svg';

const Body = () => {
    return (
        <div className="body">
            <div className="header">
                <hr/>
                <h1 className="tag1">Humanizing your insurance.</h1>
                <p className="tag f7">
                    Get your life insurance coverage easier and faster. We blend our expertise 
                    and technology to help you find the plan that’s right for you. Ensure you 
                    and your loved ones are protected.
                </p>
                <button className="but pa2 grow mt3">VIEW PLANS</button>
            </div>
            <div className="header1">
                <hr/>
                <h1>We're different</h1>
                <div className="grid">
                    <div className="box">
                        <img className="pic" src={logo1}/>
                        <h4>Snappy Process</h4>
                        <p>Our application process can be completed in minutes, not hours. Don’t get 
                            stuck filling in tedious forms.</p>
                    </div>
                    <div className="box mr2">
                        <img className="pic" src={logo2}/>
                        <h4>Affordable Prices</h4>
                        <p className="pr5">We don’t want you worrying about high monthly costs. Our prices may be low, 
                            but we still offer the best coverage possible.</p>
                    </div>
                    <div className="box">
                        <img className="pic" src={logo3}/>
                        <h4>People First</h4>
                        <p className="pr5">Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                            sure you’re covered when you need it.</p>
                    </div>
                </div>
            </div>
            <div className="last">
                <h1 className="last1">Find out more about how we work</h1>
                <button className="ton b">HOW WE WORK</button>
            </div>
        </div> 
    )
}

export default Body;