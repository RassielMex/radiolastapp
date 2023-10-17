import {StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import TrackItem from './TrackItem';

const TouchableTrackItem = () => {
  return (
    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
      <TrackItem />
    </TouchableHighlight>
  );
};

export default TouchableTrackItem;

const styles = StyleSheet.create({});
