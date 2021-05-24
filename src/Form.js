import React from "react";

const Form = (props) => {

const [formData, setFormData] = React.useState(props.icecream);

const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(formData);
    props.history.push("/");
};

const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value});
};

return (
    <form onSubmit={handleSubmit}>
        <input
            placeholder="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
        />

        <input
            placeholder="type"
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
        />

        <input
            placeholder="dairy"
            type="text"
            name="dairy"
            value={formData.dairy}
            onChange={handleChange}
        />

        <input
            placeholder="toppings"
            type="text"
            name="toppings"
            value={formData.toppings}
            onChange={handleChange}
        />

        <input
            placeholder="description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
        />

        <input
            placeholder="img"
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
        />

        <input
            placeholder="price"
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
        />

        <input
            placeholder="rating"
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
        />

    

        <input type="submit" value={props.label} />


    </form>
)

}




export default Form