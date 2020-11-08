import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import WordItem from '../components/Worditem';
import { connect } from 'react-redux';

 class Word extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <FlatList
          data={this.props.words}
          extraData={this.props.words}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) => (
            <WordItem item={item}
            />
          )}
        />
      </View>
    );
  }
}
const mapStateToProps = state =>{
  return { words: state.words}
}
export default connect (mapStateToProps)(Word)

