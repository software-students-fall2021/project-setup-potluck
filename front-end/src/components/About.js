import "../styles/About.css"
import "../App.css"

const About = () => {
    return (
        <div>
            <div class="about-section">
                <h1>About Us</h1>
            </div>
            
            <div class="what-PL">
            <h2 class="WhatisPL"> What is PotLuck?</h2>
            <p class="intro"> The idea of the project stemmed from our personal experience as students of a school that does not necessarily provide for the easiest access to different student communities. In other words, most students find themselves in a bustling city with very little opportunities to make friends. Even if students find others to occupy themselves with, it is never guaranteed that a students’ surrounding environment will cater to the specific dietary needs/preferences/wants of any respective individual. 
                With Potluck, most, if not all, of these issues are addressed in that an individual can find the most affordable restaurants (or even better, the ingredients and steps to preparing these dishes for themselves) without the need to have to directly ask others or even meet anybody in-person! 
                These posts may help students find restaurants where prices are more affordable OR a guide on how to prepare high-end dishes at home!
</p>
            </div>
            
            <h2 class="TeamTag" style={{fontFamily:'Bebas Neue, cursive'}}> Our Team</h2>
            
            <div class="row">
                <div class="column">
                    <div class="card">
        
                    <img src="../team/wajahat.jpg"></img>
                    <div class="container">
                        <h2 class="name">Wajahat Mirza </h2>
                        <p class="title">NYU Abu Dhabi</p>
                        {/* <p class="para">[short description]</p> */}
                        <p class="email">mwm356@nyu.edu
                            <span><a href="https://www.linkedin.com/in/wajahat-mirza/" target="_blank">
                            <img class="linkedin" src="../LI-In-Bug.png" width="30" height="30"></img>
                            </a></span>
                        </p>
                    </div>
                    </div>
                </div>


                <div class="column">
                    <div class="card">
        
                    <img src="../team/christian.jpg"></img>
                    <div class="container">
                        <h2 class="name">Christian </h2>
                        <p class="title">NYU CAS</p>
                        {/* <p class="para">[short description]</p> */}
                        <p class="email">cbw307@nyu.edu
                            <span><a href="https://www.linkedin.com/in/christian-w-229194127" target="_blank">
                            <img class="linkedin" src="../LI-In-Bug.png" width="30" height="30"></img>
                            </a></span>
                        </p>
                    </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
        
                    <img src="../team/lauren.jpeg"></img>
                    <div class="container">
                        <h2 class="name">Lauren </h2>
                        <p class="title">NYU CAS</p>
                        {/* <p class="para">[short description]</p> */}
                        <p class="email">lkg282@nyu.edu
                             <span><a href="https://www.linkedin.com/in/lauren-gatesman/" target="_blank">
                            <img class="linkedin" src="../LI-In-Bug.png" width="30" height="30" ></img>
                            </a></span>
                        </p>
                    </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
        
                    <img src="../team/lee.jpeg"></img>
                    <div class="container">
                        <h2 class="name">Seunggun Lee</h2>
                        <p class="title">NYU CAS</p>
                        {/* <p class="para">[short description]</p> */}
                        <p class="email">sl6369@nyu.edu
                            <span><a href="https://www.linkedin.com/in/seunggunlee" target="_blank">
                            <img class="linkedin" src="../LI-In-Bug.png" width="30" height="30"></img>
                            </a></span>
                        </p>
                    </div>
                    </div>
                </div>

                

                <div class="column">
                    <div class="card">
        
                    <img src="../team/jin.jpeg"></img>
                    <div class="container">
                        <h2 class="name">Jin Kim
                        </h2>
                        <p class="title">NYU CAS</p>
                        {/* <p class="para">[short description]</p> */}
                        <p class="email">jhk742@nyu.edu
                        
                        <span><a href="https://www.linkedin.com/in/jin-hyeong-kim/" target="_blank">
                        <img class="linkedin" src="../LI-In-Bug.png" width="30" height="30" ></img>
                        </a></span>
                        
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

       
    )
}

export default About