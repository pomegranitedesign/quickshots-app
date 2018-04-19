/* 

  ██╗   ██╗███╗   ██╗███████╗██████╗ ██╗      █████╗ ███████╗██╗  ██╗ █████╗ ██████╗ ██╗███████╗
  ██║   ██║████╗  ██║██╔════╝██╔══██╗██║     ██╔══██╗██╔════╝██║  ██║██╔══██╗██╔══██╗██║██╔════╝
  ██║   ██║██╔██╗ ██║███████╗██████╔╝██║     ███████║███████╗███████║███████║██████╔╝██║███████╗
  ██║   ██║██║╚██╗██║╚════██║██╔═══╝ ██║     ██╔══██║╚════██║██╔══██║██╔══██║██╔═══╝ ██║╚════██║
  ╚██████╔╝██║ ╚████║███████║██║     ███████╗██║  ██║███████║██║  ██║██║  ██║██║     ██║███████║
   ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
                                                                                                
*/

import React, { Component }                         from 'react';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import axios                                        from 'axios';

// Local Imports
import DownloadOverlay from './DownloadOverlay/DownloadOverlay';
import Loader          from './Loader/Loader';
import Images          from './Images/Images';
import ImageSearch     from './ImageSearch/ImageSearch';
import Header          from './Header/Header';
import './App.css';

export default class App extends Component {
  state = {
    photos: [],
    userInput: '',
    errorMsg: '',
    isLoading: false
  };

  componentWillUpdate = (nextProps, nextState) => {
  }
  
  componentDidMount() {
    if(this.state.photos.length === 0 || this.state.userInput.length < 1) {
      this.setState({ errorMsg: "Please Enter What Pictures You're Interested In✨" });
    }
  }

  searchOnChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value, 
      errorMsg: '' 
    }, () => {
      if(this.state.userInput && this.state.userInput.length > 1) {
        if(this.state.userInput.length % 2 === 0) {
          this.getInfo();
        }
      } else if(this.state.userInput.length === 0) {
        this.setState({ photos: [] });
      }
    });
  }
  
  // Get These Photos Function
  getInfo = () => {
    axios({
      method: 'get',
      url: `https://api.unsplash.com/search/photos/?client_id=1b4d4ed94f1ebddba7c498ee5d037a839f7f24773cb0c5d7ebe9cac0d751ca70&query=${this.state.userInput}&per_page=20`
    }).then((response) => {
      this.setState({ photos: response.data.results });
    });

    // Store The Requested Photos To The Local Storage
    bake_cookie("requestedPhotos", JSON.stringify(this.state.photos));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ImageSearch submitTheSearchQuery={this.submitTheSearchQuery} 
                     searchOnChangeHandler={this.searchOnChangeHandler}
                     userInput={this.state.userInput}
        />
        { this.state.errorMsg && <h1 className="SearchMessage">{ this.state.errorMsg }</h1> }
        <Images photos={this.state.photos}/>
        <Loader userInput={this.state.userInput} photos={this.state.photos}/>
      </div>
    );
  }
}