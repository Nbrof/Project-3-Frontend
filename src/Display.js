import React from "react";


const Display = (props) => {

    const { icecreams } = props


    const loaded = () => (
        <div style={{textAlign: "center"}} className="'image-layout">
        {icecreams.map((icecream) => (
            <article key={icecream._id}>

                <p>{icecream.name}</p>
                <p>{icecream.type}</p>
                <p>{icecream.dairy}</p>
                <p>{icecream.toppings}</p>
                <p>{icecream.description}</p>
                <p>{icecream.img}</p>
                <p>{icecream.price}</p>
                <p>{icecream.rating}</p>


                {/* EDIT button */}
                <button className="edit" onClick={() => {
                    props.selectIcecream(icecream)
                    props.history.push("/edit")
                }}>
                    EDIT
                </button>
                
                {/* DELETE button */}
                <button className="delete" onClick={() => {
                    props.deleteIceCream(icecream)
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
        return icecreams.length > 0 ? loaded() : loading()
      };



      export default Display;