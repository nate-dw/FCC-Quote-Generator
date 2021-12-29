import React from 'react';
import ReactDOM from 'react-dom';

function Text(props) {
  return (
    <div>
      <h1 id='text'>{props.quote[0]}</h1>
      <h2 id='author'>{props.quote[1]}</h2>
    </div>
  )
}

function Newbtn(props) {
  return (
    <button onClick={props.onClick}>New Quote</button>
  )
}

function Tshare(props) {
  return (
    <div>
      <a id="tweet-quote" href="twitter.com/intent/tweet" class="twitter-share-button" data-text={props.quote[0] + ' - ' + props.quote[1]} data-show-count="false">Tweet</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: QuoteStorage[0],
    }
  }

  handleClick() {
    this.setState(
      {quote: QuoteStorage[Math.floor(Math.random()*5)]}
    )
  }

  render() {
    return (
        <div id="quote-box" style={{display: 'flex',
      justifyContent: 'center',margin: 'auto',
      width: '60%',
      border: '5px solid #FFFF00',
      padding: '10px'}}>
        <div>
          <Text quote={this.state.quote}/>
          <div id="new-quote">
          <Newbtn onClick={() => this.handleClick()}/>
        </div>
        <div>
          <Tshare quote={this.state.quote}/>
        </div>
        </div>
        
      </div>
     
      
    );
  }
  
}

const QuoteStorage = [['“Life shrinks or expands in proportion to one’s courage.”', 'Anais Nin'],
['“You must be the change you wish to see in the world.”', 'Mahatma Gandhi'],
[ '“What you do speaks so loudly that I cannot hear what you say.”','Ralph Waldo Emerson'],
['“Believe and act as if it were impossible to fail.”', 'Charles Kettering'],
[ '“The difference between ordinary and extraordinary is that little extra.”', 'Jimmy Johnson']]

ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);
