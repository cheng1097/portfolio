import {mycontact } from "../../data/mycontact.js";

const Contacts = () => {
  return (
    <ul className="contacts-list">
      {mycontact.map((item) => (
        <li className="contact-item" key={item.id}>
          <div className="icon-box">
            <ion-icon name={item.icon}></ion-icon>
          </div>

          <div className="contact-info">
            <p className="contact-title">{item.title}</p>

            {item.component()}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;