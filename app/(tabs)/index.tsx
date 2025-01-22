import {View, Text, StyleSheet} from 'react-native';

const app = ()=>{
  return <View style={styles.container}>
    <Text style={styles.text}>Hello World!</Text>
  </View>
}

export default app;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
     
  },
  text : {
    margin : 100,
    color : 'white',
    fontSize : 22,
    fontWeight : 'bold',
    textAlign : 'center'
  }
})