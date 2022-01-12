import { Component } from "react";

const style = {
    btn: {
        backgroundColor: "#0A283E",
        color: "white",
        padding: "15px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }
}

class Button extends Component {

    render() {
        return(
            <button style={style.btn} {...this.props} />
        )
    }

}

export default Button