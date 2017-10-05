import React, { Component } from 'react';
import './AnagramChecker.css';

class AnagramChecker extends Component {
    constructor() {
        super();
    }

    checkAnagrams(e) {
        e.preventDefault();
        alert('mooo');
    }

    render() {
        return (
            <form>
                <h2>Anagram Checker</h2>
                <p>
                    <label>String One:</label>
                    <input type="text" ref="stringOne" />
                </p>
                <p>
                    <label>String Two:</label>
                    <input type="text" ref="stringTwo" />
                </p>
                <button type="submit" onSubmit={this.checkAnagrams.bind(this)}>
                    Submit
                </button>
            </form>
        )
    }
}

export default AnagramChecker;