import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

function App() {

    const [activeTab, setActiveTab] = useState();
    useEffect(() => {
        const tab = localStorage.getItem("activeTab");
        setActiveTab(tab);
    }, []);

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
              {/*<Link to={'/experience'}>*/}
              {/*    <button onClick={() => handleTabChange('experience')}*/}
              {/*            className={`${activeTab === 'experience' ? 'btn-active' : ''} texts`}>*/}
              {/*        experience*/}
              {/*    </button>*/}
              {/*</Link>*/}
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

export default App
