
import VisitButton from "../../ui/VisitButton/VisitButton.jsx";

import "./Form.css";

export default function Form(props) {
    return (
        <form action="">
            <label htmlFor="">
                Name
                <input type="text" />
            </label>
            <label htmlFor="">
                Phone
                <input type="text" />
            </label>
            <label htmlFor="">
                Email
                <input type="email" name="" id="" />
            </label>
            <label htmlFor="">
                Write Message
                <textarea name="" id=""></textarea>
            </label>
            <VisitButton buttonText="Send Message"/>
        </form>
    )
}