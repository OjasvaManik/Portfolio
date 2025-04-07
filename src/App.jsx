import { Link, Outlet, useLocation } from "react-router-dom";

function App() {
    const location = useLocation();

    // Cleanest way to map paths to active tab names
    const pathToTab = {
        "/": "home",
        "/home": "home",
        "/skills": "skills",
        "/certifications": "certifications",
        "/projects": "projects",
        "/about": "about"
    };

    const activeTab = pathToTab[location.pathname] || "";

    return (
        <div>
            <div className="flex-center top-bar mb-4">
                <Link to={'/home'} className={`texts`}>
                    ojasva manik
                </Link>
            </div>
            <div className={'flex justify-around items-center'}>
                <Link to={'/home'}>
                    <button className={`${activeTab === 'home' ? 'btn-active' : ''} texts`}>
                        home
                    </button>
                </Link>
                <Link to={'/skills'}>
                    <button className={`${activeTab === 'skills' ? 'btn-active' : ''} texts`}>
                        skills
                    </button>
                </Link>
                <Link to={'/certifications'}>
                    <button className={`${activeTab === 'certifications' ? 'btn-active' : ''} texts`}>
                        certifications
                    </button>
                </Link>
                <Link to={'/projects'}>
                    <button className={`${activeTab === 'projects' ? 'btn-active' : ''} texts`}>
                        projects
                    </button>
                </Link>
                <Link to={'/about'}>
                    <button className={`${activeTab === 'about' ? 'btn-active' : ''} texts`}>
                        about
                    </button>
                </Link>
            </div>
            <Outlet />
        </div>
    );
}

export default App;
