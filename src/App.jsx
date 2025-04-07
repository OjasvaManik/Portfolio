import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function App() {
    const [activeTab, setActiveTab] = useState();
    const location = useLocation();

    useEffect(() => {
        let tab = localStorage.getItem("activeTab");

        // If there's no stored tab, pick based on URL
        if (!tab) {
            switch (location.pathname) {
                case '/':
                case '/home':
                    tab = 'home';
                    break;
                case '/skills':
                    tab = 'skills';
                    break;
                case '/certifications':
                    tab = 'certifications';
                    break;
                case '/projects':
                    tab = 'projects';
                    break;
                case '/about':
                    tab = 'about';
                    break;
                default:
                    tab = ''; // or null, up to you
            }
            localStorage.setItem("activeTab", tab);
        }

        setActiveTab(tab);
    }, [location.pathname]);

    const handleTabChange = (tab) => {
        localStorage.setItem("activeTab", tab);
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="flex-center top-bar mb-4">
                <Link onClick={() => handleTabChange('home')}
                      to={'/home'}
                      className={`${activeTab === 'home' ? '' : ''} texts`}>
                    ojasva manik
                </Link>
            </div>
            <div className={'flex justify-around items-center'}>
                <Link to={'/home'}>
                    <button onClick={() => handleTabChange('home')}
                            className={`${activeTab === 'home' ? 'btn-active' : ''} texts`}>
                        home
                    </button>
                </Link>
                <Link to={'/skills'}>
                    <button onClick={() => handleTabChange('skills')}
                            className={`${activeTab === 'skills' ? 'btn-active' : ''} texts`}>
                        skills
                    </button>
                </Link>
                <Link to={'/certifications'}>
                    <button onClick={() => handleTabChange('certifications')}
                            className={`${activeTab === 'certifications' ? 'btn-active' : ''} texts`}>
                        certifications
                    </button>
                </Link>
                <Link to={'/projects'}>
                    <button onClick={() => handleTabChange('projects')}
                            className={`${activeTab === 'projects' ? 'btn-active' : ''} texts`}>
                        projects
                    </button>
                </Link>
                <Link to={'/about'}>
                    <button onClick={() => handleTabChange('about')}
                            className={`${activeTab === 'about' ? 'btn-active' : ''} texts`}>
                        about
                    </button>
                </Link>
            </div>
            <Outlet />
        </div>
    )
}

export default App;
