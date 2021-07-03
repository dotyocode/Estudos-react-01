import { Component } from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Button extends Component {

   

    render () {
        const {text, onClick} = this.props;

        return <button className="btn btn-primary " onClick={onClick}>{text}</button>
    };

}