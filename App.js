import * as React from 'react';
import {  View, StyleSheet ,ScrollView} from 'react-native';
import { Constants } from 'expo';


import ImageView from './components/ImageView';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  componentWillMount() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'4a9d00a0-2063-4f7f-a56e-00e73f7da42e'
      },
    }).then(res => res.json())
      .then((result) => {
        this.setState({
          images: result
        })
      },
        (error) => {
          console.log(error);
        });

        

  }
  render() {
          

    return (
      
        <View style={styles.container}>

        <ScrollView style={styles.scroller}>
                    {
                        this.state.images.map((item, index) => (

                        <ImageView uri={item.url} id={item.id}/>

                    ))
                }
                </ScrollView>
            </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  scroller:{
      justifyContent:'center',
      alignItems: 'center'
      
    }
 
});
