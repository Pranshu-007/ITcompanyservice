import { useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message:"",
      });

      const [userdata,setUserdata] = useState(true);

      const {user} = useAuth();

      console.log("userdata -> ",!!userdata);
      console.log("user -> ",!!user);
      

      if(userdata && user){
        console.log("userdata and user are true");
        setContact({
          username: user.username,
          email: user.email,
          message: "",
        });
        setUserdata(false);
      }
    
      // let handle the input field value
      const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setContact({
          ...contact,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault(); 
        // alert(JSON.stringify(user)); // Convert object to string for alert
        console.log(contact);
    };

    return (
        <>
        <main>
          <section className="section-contact">
            <div className="content-contact container">
                <h1 className="main-heading">Contact Us</h1>
            </div>

            {/* main contact us page */}
            <div className="container grid grid-two-cols">
              <div className="contact-img">
                <img
                  src="/src/images/support.png"
                  alt="Contact Us"
                  width="400"
                  height="500"
                />
              </div>
              {/* contact form content actual  */}
              <div className="section-form">
              <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="off"
                      required
                      value={contact.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="off"
                      required
                      value={contact.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      type="textarea"
                      name="message"
                      id="message"
                      cols="20"
                      rows="1"
                      autoComplete="off"
                      required
                      value={contact.message}
                      onChange={handleInput}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
                
              </div>
            </div>
          </section>
        </main>
    </>
    );
};