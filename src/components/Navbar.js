import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro"

const style = {
    nav: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100px",
        justifyContent: "space-between",
        position: "relative",
        padding: "0 50px",
        boxShadow: "0 2px 3px rgb(0,0,0,0.1)"
    }
}

class Navbar extends Component {
    
    render() {
        const {carro, esCarroVisible, carroVisible} = this.props
        return(
            <nav style={style.nav}>
                <Logo />
                <Carro 
                    carro={carro}
                    esCarroVisible={esCarroVisible}
                    mostrarCarro={carroVisible}

                />
            </nav>
        )
    }
}

export default Navbar