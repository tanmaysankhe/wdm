import home from './images/home.png';
import './css/Homepage.css'; 

function Homepage(props) {
    return (
        <div>
            <div className='container'>
                <div className='heading'>Diaz</div>
                <span className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae turpis massa sed elementum tempus egestas. Curabitur gravida arcu ac tortor dignissim convallis aenean. Sagittis purus sit amet volutpat consequat mauris nunc. Libero id faucibus nisl tincidunt eget. Nibh nisl condimentum id venenatis a. Velit sed ullamcorper morbi tincidunt ornare massa eget. Commodo ullamcorper a lacus vestibulum sed arcu non. Nunc lobortis mattis aliquam faucibus purus.
                </span>
                <span>
                <img style={{display:"inline", height:"300px", width:"500px", marginLeft:"70px"}} src={home} alt="Logo" />
                </span>
                            
            </div>
        </div>
    );
}

export default Homepage;
