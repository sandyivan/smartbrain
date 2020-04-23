import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognation from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import './App.css';


const app = new Clarifai.App({
  apiKey: 'f8e9934adc324981b7a214a00fd27120'
 });

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: ''
    }
  }


  calculateFaceLocation = (data) => {
    const clarifaiData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('imageinput');
    const width = image.width;
    const height = image.height;
    return {
      leftCol: clarifaiData.left_col * width,
      topRow:  clarifaiData.top_row * height,
      rightCol: width - (clarifaiData.right_col * width),
      bottomRow: height - (clarifaiData.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  searchChange = (e) => {
    this.setState({input: e.target.value});

  }

  inputChange = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm inputChange={this.inputChange} searchChange={this.searchChange}/>
        <FaceRecognation imageUrl={this.state.imageUrl}/> 
      </div>
    );
  }
  
}

export default App;
