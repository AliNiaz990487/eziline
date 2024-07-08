import { FaSearch } from "react-icons/fa";
import "./Search.css";

export default function Search(props) {
    return (
        <div className="search-wrapper">
            <div className="search">
                <FaSearch className="icon" />
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    )
}