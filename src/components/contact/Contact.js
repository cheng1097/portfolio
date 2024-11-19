import { useState, useEffect } from "react";
import axios from "axios";
import Notification from "./Notification";


function Contact({ pageActive }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(null); // Pour gérer le message de notification

  const sendMail  = async () => {
    if (!fullname || !email || !objet || !message) {
      return;
    }
    if (!email.includes('@')) {
        return; 
    }

   try {
        const response = await axios.post("https://api-mail.visiotechsarl.com", {
          fullname: fullname,
          objet: objet,
          message: message,
          email: email,
        });
  
        if (response.data.message) {
         // alert(response.data.message); 
          // Message de succès
          setNotification({ type: "success", message: response.data.message });
          setFullname("")
          setEmail("")
          setObjet("")
          setMessage("")
        } else {
          //alert("Erreur: " + response.data.error);
          setNotification({ type: "error", message: response.data.error });
        }
        setTimeout(() => setNotification(null), 5000);

      } catch (error) {
        console.error("Erreur lors de l'envoi de l'email", error);
        //alert("Une erreur s'est produite.");
        setNotification({
            type: "error",
            message: "Une erreur s'est produite lors de l'envoi de l'email.",
          });
        setTimeout(() => setNotification(null), 5000);
      }
    
  };

  return (
    <article
      className={`contact ${pageActive == "contact" ? "active" : ""}`}
      data-page="contact"
    >
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

         {/* Afficher la notification si elle existe */}
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}

        {/*<form action="#" className="form" data-form>*/}

        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Nom complet"
            value={fullname}
            required
            data-form-input
            onChange={(e) => setFullname(e.target.value)}
          />

          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email"
            value={email}
            required
            data-form-input
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <input
          type="text"
          name="objet"
          className="form-input mt-4"
          placeholder="Objets"
          value={objet}
          required
          data-form-input
          onChange={(e) => setObjet(e.target.value)}
        />

        <textarea
          name="message"
          className="form-input"
          placeholder="Votre Message"
          value={message}
          required
          data-form-input
          onChange={(e) => setMessage(e.target.value)}
        >
          
        </textarea>

        <button
          className="form-btn"
          type="submit"
          data-form-btn
          onClick={sendMail}
        >
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>


       

        {/*</form>*/}
      </section>
    </article>
  );
}

export default Contact;
