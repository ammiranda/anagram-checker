import React, { Component } from 'react';
import classNames from 'classnames';
import '../css/AnagramChecker.css';
import { areAnagrams } from '../utils/utils';

class AnagramChecker extends Component {
    constructor() {
        super();
        this.state = {
            stringOne: '',
            stringTwo: '',
            showAnswer: false,
            areAnagrams: false
        };

        // Scoping non-react lifecycle methods to the component's scope
        this.checkAnagrams = this.checkAnagrams.bind(this);
        this.stringChange = this.stringChange.bind(this);
    }

    /**
     * Method that fires on the form submission that runs the anagram check on the current string values
     * that lie in state. Also updates showAnswer to true so the alert message container will be visible.
     * @param {Event} e 
     */
    checkAnagrams(e) {
        e.preventDefault();
        this.setState({
            showAnswer: true,
            areAnagrams: areAnagrams(this.state.stringOne, this.state.stringTwo)
        });
    }

    /**
     * Method that updates the string values for either stringOne or stringTwo in the component's state
     * @param {Event} e - Event object from an onChange event relating to either of the text inputs
     */
    stringChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
            showAnswer: false
        });
    }

    render() {
        const showAnswer = this.state.showAnswer;
        const areAnagrams = this.state.areAnagrams;

        return (
            <div className="container col-sm-12 anagram-container">
                <form role="form" onSubmit={this.checkAnagrams.bind(this)} className="form-horizontal">
                    <h2>Anagram Checker</h2>
                    <div className={classNames({'hide': !showAnswer}, "form-group")}>
                        { areAnagrams 
                            ? <div className="alert alert-success">
                                <strong>Congrats!</strong> The strings are anagrams of each other!
                              </div> :
                              <div className="alert alert-danger">
                                  <strong>Sorry!</strong> The strings are not anagrams of each other!
                              </div>
                        }
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">String One:</label>
                        <div className="col-sm-8">
                            <input type="text" for="stringOne" className="form-control" name="stringOne" onChange={this.stringChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">String Two:</label>
                        <div className="col-sm-8">
                            <input type="text" for="stringTwo" className="form-control" name="stringTwo" onChange={this.stringChange} />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary submit-button" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AnagramChecker;