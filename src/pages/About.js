import React, { Component } from 'react';
import Andrea from '../images/andrea3.JPG'

class About extends Component {
    render() {
        return (
            <div>
                <h1 className="h-font">About Me</h1>
                <br></br>
                <div className="container">
                    <div>
                        <h3 className="h-font">I’m Andrea Moore and welcome to my blog!</h3>
                        <br></br>
                        <aside className="about-image">
                            <img src={Andrea} alt="Andrea" width="200px" height="250px" />
                        </aside>
                        <p className="about-text">I promote green cleaning, all things DIY, home cooked meals, and homemaking.
                        My website will serve as a creative outlet for more making, inspiration for all things at home and homemaking,
                        and contains blogs on all of my favorite things. Yes, even brown paper packages wrapped up in string!
                    </p>
                    </div>
                    <br></br>
                    <h4 className="h-font">A few more personable things about me</h4>
                    <br></br>
                    <p className="about-text">I’m a Christian housewife with 3 amazingly adorable dogs. Riker, Troi and Jadzia have been with my husband and I for almost 5 years.
                    Can you guess what show their names are from? I love to show them off so I’m sure you’ll see plenty photos of them soon! </p>
                    <p className="about-text">I deal with several health issues including Panhypopituitarism. I get sick a lot because of being immune compromised.
                    I’m 33 years old and have been in and out of the hospital for more times I can count on my fingers and toes.
                    If you have questions about my health or Panhypopituitarism in general feel free to ask me on the contact page. </p>
                    <p className="about-text">I love to draw and do anything creative!
                    I believe I gained this skill from my mother who also loves being creative and making.
                    I enjoy drawing traditionally and digitally, painting in several different mediums, doing DIYs, writing, sewing, cooking, baking, etc. </p>
                    <p className="about-text">In my free time I enjoy playing video games, watching anime, watching Hallmark and HGTV, and spending time with family.
                    Fruits Basket is my favorite anime. Every Christmas season I snuggle up on the couch with some hot chocolate to watch all the new Hallmark movies. </p>
                    <br></br>
                    <h4 className="h-font">Simply Moore Making</h4>
                    <br></br>
                    <p className="about-text">My goal for this blog is to help others while being productive and creative, sharing my love of natural and green alternatives as it relates to home and family.
                     I plan on writing at least one new blog a week, but during special events and holidays I may write more. </p>
                    <p className="about-text">I hope that you join me in my journey towards:
                        <ul>
                            <li>Great DIYS that you’ll want to add to you home or give as gifts</li>
                            <li>Sharing stories, scripture and Home Making tools</li>
                            <li>Providing Green living info for a safe home</li>
                            <li>Cooking up the best recipes to serve to friends and family</li>
                            <li>Sharing my favorite items, décor, etc. </li>
                        </ul>
                    I’m hoping to add a store on the website in the near future, but for now it's linked to my etsy page.
                    </p>
                    <p className="about-text">You can find me on Twitter, Instagram, Pinterest, Etsy, Facebook, YouTube, Twitch, and Discord. </p>
                    <p className="about-text">Love Always, </p>
                    <p className="about-text">Andrea</p>
                </div>
            </div>
        );
    }
}

export default About;