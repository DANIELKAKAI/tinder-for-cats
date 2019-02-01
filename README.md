# Tinder for cats

In this project I've created a react native app which can be used to like and dislike cat 
images.<br/>
expo.io link: https://snack.expo.io/@danielkakai/tinder-for-cats 
<br/>

## Screenshot
![alt text](https://drive.google.com/open?id=1KiYXLuogL7Tv-kFarTkBOeowLPZB-CAJ)

## Qr code
![alt text](https://drive.google.com/open?id=1HL0WfMORV27xwpL6SDDngPd3Ux5-qpl0)

## How it works
<br/>

### Fetching cat images
Cat images are fetched using cats api then the state is updated in the `App.js` file.
```javascript

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

```

### Displaying the images
the images are displayed using the `ImageView` component
```javascript
<View style={styles.container}>

        <ScrollView style={styles.scroller}>
                    {
                        this.state.images.map((item, index) => (

                        <ImageView uri={item.url} id={item.id}/>

                    ))
                }
        </ScrollView>
</View>
```
### Saving likes and dislikes using AsyncStorage
Using AsyncStorage likes and dislikes are saved depending on the button pressed, image id used as the key with a value of either like or dislike
```javascript

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

```
