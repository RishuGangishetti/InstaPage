import React from 'react';

const Home=()=>
{
    return(
        <div className="home">
            <div className="card home-card">
                <div>virat</div>
                <div className="card-image">
                    <img src={require('./assets/1.jpg')}/>
                </div>
                <div classname="card-content">
                    <h6>Title</h6>
                    <p>This is amazing post!!!</p>
                    <input type="text" placeholder="Add a comment"/>
                </div>
            </div>

            <div className="card home-card">
                <div>virat</div>
                <div className="card-image">
                    <img src={require('./assets/2.jpg')}/>
                </div>
                <div classname="card-content">
                    <h6>Title</h6>
                    <p>This is amazing post!!!</p>
                    <input type="text" placeholder="Add a comment"/>
                </div>
            </div>

            <div className="card home-card">
                <div>virat</div>
                <div className="card-image">
                    <img src={require('./assets/3.jpg')}/>
                </div>
                <div classname="card-content">
                    <i class= "material-icons" style={{color:"red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>This is amazing post!!!</p>
                    <input type="text" placeholder="Add a comment"/>
                </div>
            </div>
        </div>
    )
}
export default Home;