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
            <div className="col-sm-6">
                <form onSubmit={this.checkAnagrams.bind(this)} className="form-horizontal">
                    <h2>Anagram Checker</h2>
                    <div className={classNames({'hide': !showAnswer})}>
                        { areAnagrams 
                            ? <div className="alert alert-success">
                                The strings are anagrams of one another!
                              </div> :
                              <div className="alert alert-danger">
                                  The strings are not anagrams of each other!
                              </div>
                        }
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">String One:</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" name="stringOne" onChange={this.stringChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">String Two:</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" name="stringTwo" onChange={this.stringChange} />
                        </div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AnagramChecker;