import Header from '../components/Header';
import Nav from '../components/Nav';

function MainLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <Nav />
                {children}
            </div>
        </div>
    );
}

export default MainLayout;
