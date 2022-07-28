import home from './images/home.png';
import './css/Homepage.css'; 

function About(props) {
    return (
        <div>
            <div className='container'>
                <div className='heading'>About us</div>
                <span className='description'>
                    Diaz Sifontes is a very rich family in South America. They have a lot of land on Margarita Island. Most of the land has not gone through the appropriate heritage, Up to now, this site is made up to 275 families. The purpose of this site is to manage the Family’s property, projects. Trials, groups, etc. We need to find out what percentage goes to each family when a property is sold. 
                </span>
                <span>
                    <img style={{display:"inline", height:"300px", width:"500px", marginLeft:"70px"}} src={home} alt="Logo" />
                </span>
                            
            </div>
        </div>
    );
}

export default About;
