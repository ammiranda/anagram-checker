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

        this.checkAnagrams = this.checkAnagrams.bind(this);
        this.stringChange = this.stringChange.bind(this);
    }

    checkAnagrams(e) {
        e.preventDefault();
        this.setState({
            showAnswer: true,
            areAnagrams: areAnagrams(this.state.stringOne, this.state.stringTwo)
        });
    }

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