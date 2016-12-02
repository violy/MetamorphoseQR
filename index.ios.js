/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';

var DEFAULT_URL = 'www/index.html';
var WEBVIEW_REF = 'mywebview';

export default class MetamorphoseQR extends Component {
  state = {
    url: DEFAULT_URL,
    status: 'No Page Loaded',
    backButtonEnabled: false,
    forwardButtonEnabled: false,
    loading: true,
    scalesPageToFit: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={WEBVIEW_REF}
          source={{uri: this.state.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          allowsInlineMediaPlayback={true}
          style={styles.webview}
        />
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          type="front"
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          >
        </Camera>
      </View>
    );
  }

  onShouldStartLoadWithRequest = (event) => {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  };

  onNavigationStateChange = (navState) => {
    this.setState({
      url: navState.url,
      status: navState.title,
      loading: navState.loading
    });
  };

  onBarCodeRead(e) {
    if(e.type == 'org.iso.QRCode'){
      var qrURL = e.data,
          isF93 = /http:\/\/livre.f93.fr\/.*/g,
          mywebview = this.refs[WEBVIEW_REF];
      if(isF93.test(qrURL)){
        if(qrURL !== this.state.url){
          this.setState({
            url: qrURL,
          });
          mywebview.reload();
        }

      }
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  statusBar:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    height: 22,
  },
  preview: {
    position: 'absolute',
    width: 0,
    height: 0,
    bottom: 10,
    right: 10
  },
  webview:{
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
});

AppRegistry.registerComponent('MetamorphoseQR', () => MetamorphoseQR);
