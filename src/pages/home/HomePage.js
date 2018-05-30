import React, { Component } from 'react';
import './HomePage.css';
import { connect } from 'react-redux';
import {loadMessages} from '../../actions/MessageAction';

class HomePageComponent extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1>HomePage</h1>
        <ul>
          {this.props.messages.map(((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            );
          }))}
        </ul>
      </div>
    );
  }
  componentWillMount () {
    this.props.loadMessages()
  }
}

const mapStateToProps = state => {
  return {
    messages: state.message.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMessages: () => {
      dispatch(loadMessages())
    }
  }
}

const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent)

export default HomePage;
