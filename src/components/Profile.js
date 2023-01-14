import React from 'react';

const Profile=()=>
{
    return(
        <div style={{maxWidth:"1200px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px" ,height:"160px",borderRadius:"80px"}} src={require('./assets/1.jpg')}/>
                </div>
                <div>
                    <div>
                        <h4>virat.kohli</h4>
                        <button className="button1">Follow</button>
                        <button className="button1">Message</button>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>1,499 posts</h6>
                        <h6>231M followers</h6>
                        <h6>262 following</h6>
                    </div>
                </div>
            </div>
            <div align="center" >
                    <button className="button2">POSTS</button>
                    <button className="button2">REELS</button>
                    <button className="button2">TAGGED</button>
            </div>
            <div className="gallery">
                <img className="item" src={require('./assets/2.jpg')}/>
                <img className="item" src={require('./assets/3.jpg')}/>
                <img className="item" src={require('./assets/4.jpg')}/>
                <img className="item" src={require('./assets/5.jpg')}/>
                <img className="item" src={require('./assets/6.jpg')}/>
                <img className="item" src={require('./assets/7.jpg')}/>
                <img className="item" src={require('./assets/8.jpg')}/>
                <img className="item" src={require('./assets/9.jpg')}/>
                <img className="item" src={require('./assets/10.jpg')}/>
            </div>
        </div>
    )
}
export default Profile;