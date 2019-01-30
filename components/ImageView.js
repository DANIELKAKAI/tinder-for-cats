import React, { Component } from 'react'
import { Text,Image, View, Button,AppRegistry ,StyleSheet,AsyncStorage} from 'react-native'



export default class ImageView extends Component {

    constructor() {
    super();
    this.state = {
      status: null
    }
  }

    Like(id){
        let key =  id;
        AsyncStorage.setItem(key,'like');
        this.setState({status:'liked'});
    }

    disLike(id){
        let key =  id;
        AsyncStorage.setItem(key,'dislike');
        this.setState({status:'disliked'});
    }

    render() {
        return (
            <View style={styles.grid}>
                <Image
                    source={{
                        uri:this.props.uri
                    }}
                    style={styles.image}
                />
                <Text>
                {this.state.status}
                </Text>

                <View style={styles.container}>
                <Button
                    onPress={this.Like.bind(this,this.props.id)}
                    title="Like"
                    color="blue"
                    type="outline"
                />

                <Button
                    onPress={this.disLike.bind(this,this.props.id)}
                    title="Dislike"
                    color="red"
                    type="outline"
                />
                </View>

            </View>
        );
    }
}




const styles = StyleSheet.create({
    image:{
        height:200,
        width:200
    },
    container: {
        flexDirection:'row',
        height:50,
        alignItems:'center'
    },
    grid:{
      marginBottom:50,
      alignItems:'center'
    }
   
   
});



