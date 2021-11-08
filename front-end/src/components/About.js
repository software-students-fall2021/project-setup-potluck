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
            <p class="intro"> Gummies jujubes bear claw I love sweet gingerbread. Gummies marzipan I love chocolate powder carrot cake. Fruitcake lollipop dragée wafer sugar plum halvah. Jujubes carrot cake marzipan wafer topping brownie candy dessert pie. Toffee chocolate jujubes muffin sesame snaps fruitcake. Chocolate cake lollipop cupcake pastry danish chocolate cake tootsie roll bear claw cotton candy.
                Shortbread liquorice sugar plum jelly beans pudding. Marshmallow danish I love I love tiramisu sesame snaps apple pie. Carrot cake sesame snaps danish cupcake croissant candy. Pudding fruitcake cotton candy macaroon icing gummi bears jelly. Muffin lemon drops halvah candy lollipop fruitcake biscuit biscuit wafer. Jelly-o jelly marshmallow gummies lemon drops gingerbread.
                Cupcake pastry cake oat cake cotton candy gingerbread.</p>
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
        
                    <img src="../team/wajahat.jpg"></img>
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
                        
                        <span><a href="https://www.linkedin.com/in/jin-hyeong-kim-38959b221/" target="_blank">
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