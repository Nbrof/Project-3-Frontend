import React from "react";


const Login = (props) => {

    const { logins } = props


    const loaded = () => (
        <div style={{textAlign: "center"}} className="image-layout">
        {logins.map((login) => (
            <article key={login._id}>

                <p>{login.email}</p>
                <p>{login.pass}</p>
                


                {/* EDIT button */}
                <button className="edit" onClick={() => {
                    props.selectLogin(login)
                    props.history.push("/edit")
                }}>
                    EDIT
                </button>
                
                {/* DELETE button */}
                <button className="delete" onClick={() => {
                    props.deleteLogin(login)
                }}>
                    Delete
                </button>

            </article>
        ))}
        </div>
        )

        const loading = () => 
        <img src="https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,w_317/v1621295527/loading-time-tips_lrphoz.jpg" alt="loading"/>
        // <h1>Loading</h1>
        return logins.length > 0 ? loaded() : loading()
      };



      export default Login;