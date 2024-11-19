import profil from "../../assets/profile-pic.png";
import { info } from "../../data/info.js";
import Contacts from "./Contact.js";
import React, { useState } from 'react';

function Aside() {
 
    const [isSidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
      setSidebarActive(!isSidebarActive);
    };

  return (
    <aside className={`sidebar ${isSidebarActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={profil} alt={info.name} width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={info.name}>
            {info.name}
          </h1>

          <p className="title">{info.job}</p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar} data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <Contacts />

        <div className="separator"></div>

        <ul className="social-list">
          {info.social.map( 
            (social) => (
                <li className="social-item" key={social.id}>
                <a href={social.url} className="social-link" target="_blank">
                  <ion-icon name={social.icon}></ion-icon>
                </a>
              </li>
            )
          )}
        </ul>
      </div>

    </aside>
  );
}

export default Aside;
