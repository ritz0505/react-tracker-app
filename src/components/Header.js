import PropType from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title,onAdd, showAdd }) => {

    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" && <Button color={showAdd ? "Red" : "Green"} text={showAdd ? "CLOSE" :"ADD"} onClick={onAdd}/>}
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker'
}

Header.PropType={
    title:PropType.string.isRequired,
}

export default Header
