import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

function renderRow(_, data) {
  return <Text>{data}</Text>;
}

export default class App extends React.Component {
  dataProvider = new DataProvider((r1, r2) => r1 !== r2)
    .cloneWithRows(Array.from(new Array(500)).map((_, index) => index));

  layoutProvider = new LayoutProvider(
    () => 1,
    (_, dimensions) => {
      dimensions.height = 50;
      dimensions.width = 150;
    }
  );

  componentDidMount() {
    this.setState({
      test: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <RecyclerListView
          layoutProvider={this.layoutProvider}
          dataProvider={this.dataProvider}
          rowRenderer={renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch'
  },
});
