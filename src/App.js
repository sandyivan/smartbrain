import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognation from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import './App.css';


// initializing the API key
const app = new Clarifai.App({
  apiKey: 'f8e9934adc324981b7a214a00fd27120'
 });
 



class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imgUrl: '',
      box: ''
    }
  }


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow:  clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }


  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }


  onButtonClick = () => {
    this.setState({imgUrl: this.state.input})
    app.models  
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }

 
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onButtonClick={this.onButtonClick} onInputChange={this.onInputChange}/>
        <FaceRecognation box={this.state.box} imgUrl={this.state.imgUrl}/> 
      </div>
    );
  }
  
}

export default App;
