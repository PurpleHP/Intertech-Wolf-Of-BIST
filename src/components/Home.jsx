import './Home.css';
import NavbarComponent from './Navbar.jsx';
import Menu from './Menu.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import ContactForm from './ContactForm.jsx';

function App() {
  return (
    <div className="App" id='home'>
      <NavbarComponent></NavbarComponent>
      <Menu>
            <h1>Menu Content</h1>
            <p>This is the content inside the Menu.</p>
            <div className='flex'>
                <Card>
                   Bankacilik
                   <Card to="/login"></Card>
                </Card>
                <Card>
                    Borsa
                </Card>
            </div>
            <h1>Menu Content</h1>
            <div className='flex'>
                <Card>
                    
                </Card>
                <Card>
                    
                </Card>
            </div>
            <div className='flex'>
                <Card>
                    
                </Card>
                <Card>
                    
                </Card>
            </div>
            <div className='flex'>
                <Card>
                    
                </Card>
                <Card>
                    
                </Card>
            </div>
            <div className='flex'>
                <Card>
                    
                </Card>
                <Card>
                    
                </Card>
            </div>
      </Menu>
      <div id='contact'>
      <ContactForm></ContactForm>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
