import React from 'react';
import './AboutMeItems.css';

function AboutMeItems(){
    return (
        <div className='about_container'>
            <div className='about_text'>
                <img src="/images/Profile/profile.png" alt="profile" />
                <br />
                <h2>Hi, this is Yichen.</h2>
                <p>
                    <h3>I am a Volunteer Developer working for University at Buffalo, Division of Behavioral Medicine.</h3> 
                    <br />
                    My duty includes maintaining these three websites: 
                    <br />
                    <br />
                    <a 
                    href="https://buffalobehavioralmedicine.org/" 
                    rel="noopener noreferrer" 
                    target='_blank'
                    >
                        <button>Division of Behavioral Medicine</button>    
                    </a>
                    <br />
                    (Developed by WordPress)
                    <br />
                    <br />
                    <a 
                    href="https://revolution.med.buffalo.edu/" 
                    rel="noopener noreferrer" 
                    target='_blank'
                    >
                    <button>Division of Behavioral Medicine Revolution Database</button>  
                    </a>
                    <br />
                    (Developed by Drupal7, username and password needed)
                    <br />
                    <br />
                    <a 
                    href="https://mamrt.med.buffalo.edu/" 
                    rel="noopener noreferrer" 
                    target='_blank'
                    >
                        <button>MAMRT - Mobile Audio Manager and Response Tracker</button>
                    </a>
                    <br />
                    (username and password needed)
                </p>
                 
                <p>
                    <h3>My favorite programming language is Python and JavaScript.</h3>
                    <br />I made an image cropper tool to help me upload web manga in the required size. You can check it in my GitHub:
                <br />
                <br />
                <a 
                    href="https://github.com/yichenfromhyrule" 
                    rel="noopener noreferrer" 
                    target='_blank'
                    >
                        <button>Yichen's GitHub</button>
                </a>
                </p>

                <p>
                    I like playing games, like Animal Crossing: New Horizons, The Legend of Zelda: Breath of the Wild, Fate/Grand Order.
                    <br />
                    <br />
                    I also like doing digital painting. I am making a web manga on Webtoon. You can access it through this button. 
                    <br />
                    <br />
                    <a 
                    href="https://www.webtoons.com/en/challenge/decision/list?title_no=520631" 
                    rel="noopener noreferrer" 
                    target='_blank'
                    >
                        <button>Webmanga - 'Decision'</button>
                    </a>
                </p>
            </div>
            
        </div>
    );
}

export default AboutMeItems;