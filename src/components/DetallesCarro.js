import { Component } from "react";

const style = {
    detallesCarro: {
        backgroudColor: "#fff",
        position: "absolute",
        marginTop: 25,
        boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
        borderRadius: "5px",
        width: "300px",
        right: "50px"
    },

    ul: {
        margin: 0,
        padding: 0
    },
    producto: {
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 20px",
        boderBottom: "1px solid #aaa"
    }
}

class DetallesCarro extends Component {

    render() {
        const { carro } = this.props
        console.log(carro)
        return(

            <div style={style.detallesCarro}>
                <ul style={style.ul}>
                    {carro.map( x => <li style={style.producto} key={x.name}>
                        <img alt={x.name} src={x.img} width="50px" height="32px" />

                    {x.name} <span>{x.cantidad}</span>
                    </li> )}
                </ul>
            </div>
        )
    }

}

export default DetallesCarro