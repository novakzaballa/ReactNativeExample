/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import listMock from './listmock';

const List = props => {
  const [param, setparam] = useState('');
  const filter = () => {
    return listMock.filter(x => x.elem === param);
  };
  const listf = filter()
    return (
    <>
      <StatusBar barStyle="dark-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.engine}>
            <Text style={styles.footer}>List</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={text => setparam({text})}
              value={param}
            />
          </View>

          <View style={styles.body}>
            {listf.map((x, i) => (
              <View key={i}>
                <Text>{x.elem}</Text>
                <Text>{x.elem2}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default List;
