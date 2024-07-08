
import "./VisitButton.css";

export default function VisitButton(props){
    return <button className={props.btnStyle ? props.btnStyleClass : "visit-button"}>{props.buttonText}</button>
}