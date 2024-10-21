import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Navbar({ onSelectCategory }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navbaritem}
        onPress={() => onSelectCategory('coffee')}
      >
        <Text>Coffee</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navbaritem}
        onPress={() => onSelectCategory('fresh-produce')}
      >
        <Text>Fresh-</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navbaritem}
        onPress={() => onSelectCategory('bread-bakery')}
      >
        <Text>Bakery</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.navbaritem}
        onPress={() => onSelectCategory('dairy')}
      >
        <Text>Dairy</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
  },
  navbaritem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
  },
});
