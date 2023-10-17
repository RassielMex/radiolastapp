import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import TrackItem from './TrackItem';

const TouchableTrackItem = () => {
  return (
    <TouchableHighlight>
      <TrackItem />
    </TouchableHighlight>
  );
};

export default TouchableTrackItem;

const styles = StyleSheet.create({});
