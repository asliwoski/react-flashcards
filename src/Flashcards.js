import React, {Component} from "react";
import ReactHtmlParser from "react-html-parser";
import './Flashcards.css';

const backToFront = { front: true };

class Flashcards extends Component {

    state = {
        data: this.props.data,
        current: 0,
        front: true,
    };

    constructor(props){
        super(props);
    }

    canGoBack(){
        return this.state.current !== 0;
    }

    canGoForward(){
        return this.state.current !== this.state.data.length - 1;
    }

    back(){
        // if there's a previous card
        if(this.canGoBack()){
            // go to the previous card
            this.setState({ current: this.state.current - 1, ...backToFront });
        }else{
            // wrap back to the last card
            this.setState({ current: this.state.data.length - 1, ...backToFront });
        }
    }

    forward(){
        // if there's a next card
        if(this.canGoForward()){
            // go to the next card
            this.setState({ current: this.state.current + 1, ...backToFront });
        }else{
            // wrap back to the first card
            this.setState({ current: 0, ...backToFront });
        }
    }

    flip(){
        this.setState({ front: !this.state.front });
    }

    cardClasses(index){
        const shared = 'Flashcards--card ' + (this.state.front ? '' : 'Flashcards--card--back--active');
        return this.isCurrent(index) ? shared + ' Flashcards--card--current' : shared;
    }

    isCurrent(index){
        return index === this.state.current;
    }

    render(){
        return (
            <section>
                <header className='Flashcards--header'>Flashcards</header>
                <div className='Flashcards--card--container'>
                {this.props.data.map((item, index, arr) => (
                    <div
                        data-test="card-container"
                        key={index}
                        className={this.cardClasses(index)}
                        onClick={this.flip.bind(this)}>
                        <div
                            className="Flashcards--card--front"
                            data-test="card-front">
                            {ReactHtmlParser(item.name)}</div>
                        <div
                            className="Flashcards--card--back"
                            data-test="card-back">
                            {ReactHtmlParser(item.description)}</div>
                    </div>
                ))}
                <div>{this.state.current + 1}/{this.props.data.length}</div>
                </div>
                <button
                    className="Flashcards--controls--flip"
                    onClick={this.flip.bind(this)}
                    data-test="flip-button">
                    flip</button>
                <button
                    className="Flashcards--controls--back"
                    onClick={this.back.bind(this)}
                    data-test="back-button">
                    back</button>
                <button
                    className="Flashcards--controls--forward"
                    onClick={this.forward.bind(this)}
                    data-test="forward-button">
                    forward</button>
            </section>
        );
    }

}

export default Flashcards;