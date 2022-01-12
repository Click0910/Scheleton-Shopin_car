import { Component } from "react";

const style = {
    title: {
        margingBottom: '30px'
    }
}

class Title extends Component {

    render () {
        return(
            <h1 style={style.title}>Store</h1>
        )
    }

}

export default Title

