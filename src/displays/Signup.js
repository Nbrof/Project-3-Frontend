import React from "react";


const Signup = (props) => {

    const { signups } = props


    const loaded = () => (
        <div style={{textAlign: "center"}} className="'image-layout">
        {signups.map((signup) => (
            <article key={signup._id}>

                <p>{signup.email}</p>
                <p>{signup.email}</p>
                <p>{signup.email}</p>
                <p>{signup.pass}</p>
                


                {/* EDIT button */}
                <button className="edit" onClick={() => {
                    props.selectSignup(signup)
                    props.history.push("/edit")
                }}>
                    EDIT
                </button>
                
                {/* DELETE button */}
                <button className="delete" onClick={() => {
                    props.deleteLSignup(signup)
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



      export default Signup;