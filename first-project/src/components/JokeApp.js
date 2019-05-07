import React, { Component } from 'react';
// import '../css/App.css';
import Joke from './Joke';
import jokesData from './../data/jokesData'

class JokeApp extends Component {
  render() {
      const jokesComponents =jokesData.map(joke => {
        return (
            <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
        )
      });
      return (
      <div>
          {jokesComponents}
          {/*<Joke*/}
              {/*question = 'Why did the developer quit his job?'*/}
              {/*punchLine = 'Because he needed arrays :)'*/}
          {/*/>*/}
          {/*<Joke*/}
              {/*question = 'A vampire walks into a bar and asks for hot water'*/}
          {/*/>a*/}
          {/*<Joke*/}
              {/*question = 'Why did tortoise fall'*/}
              {/*punchLine = 'Because of porridge'*/}
          {/*/>*/}
          {/*<Joke*/}
              {/*question = 'Who is your goat'*/}
              {/*punchLine = 'I dont know who but I know where'*/}
          {/*/>*/}
          {/*<Joke*/}
              {/*punchLine = 'You want to be taken out every weekend, you be dustbin?'*/}
          {/*/>*/}
      </div>
    );
  }
}

export default JokeApp;
