import React from 'react';
import './App.css';
import App from './App';
import { connect } from 'react-redux';
import {filterWeek, filterKey} from './redux/card-reducer'

class AppContainer extends React.Component{
  render() {
    return(
      <App data={this.props.data}
      keyValue={this.props.keyValue}
      filterWeek={this.props.filterWeek}
      filterKey = {this.props.filterKey}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.card.card,
    keyValue: state.card.keyValue
  }
}

export default connect(mapStateToProps,{
  filterWeek,
  filterKey
})(AppContainer);
