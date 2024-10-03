import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";

const URL = "http://localhost:3000/api/auth/register";

export const Register = () => {

    const [user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(user),
            });
    
            const responseData = await response.json();
    
            if (!response.ok) {
                console.error("Registration failed:", responseData);
                return;
            }

            storeTokenInLS(responseData.token);
    
            console.log("Registration successful:", responseData);

            //token save ho rha
            storeTokenInLS(responseData.token);

            setUser({ username: "", email: "", phone: "", password: "" });
            navigate("/login");
        } catch (error) {
            console.error("Register error:", error);
        }
    };
     

    return (
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/src/images/seo.png" alt="Registration" width="500" height="500" />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration Form</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" placeholder="Username" id="username" required autoComplete="off" value={user.username} onChange={handleInput}/>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" placeholder="Email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}/>
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" name="phone" placeholder="Phone" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput}/>
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" placeholder="Password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}/>
                                </div>

                                <br />

                                <button type="submit" className="btn btn-submit">Register Now!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    );
}; 
