import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Fade from '../components/Fade';
import Video from 'react-native-video';

export default function VideoPlayer({navigation}) {
  const [videoVisible, setvideoVisible] = useState(true);
  const [buffer, setBuffer] = useState(true);

  const ToggleVideo = () => {
    setvideoVisible((value) => !value);
  };

  const onLoad = () => {
    setBuffer(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.toggleBtn} onPress={() => ToggleVideo()}>
        <Text style={styles.loginText}>Toggle Video</Text>
      </TouchableOpacity>
      <Fade visible={videoVisible}>
        {buffer && <ActivityIndicator style={{marginTop: 70}} />}
        <Video
          source={{
            uri:
              'https://unicornflix-dev-output-jrtffp40.s3-us-west-2.amazonaws.com/99c18ac4-c346-4a5e-b587-203e8fd94f7d/99c18ac4-c346-4a5e-b587-203e8fd94f7d.m3u8',
          }}
          ref={(ref) => {
            this.player = ref;
          }}
          onBuffer={this.onBuffer}
          onLoad={() => onLoad()}
          onError={this.videoError}
          style={styles.VideoStyles}
        />
      </Fade>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'white',
    width: '100%',
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  toggleBtn: {
    width: '50%',
    borderRadius: 25,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
  VideoStyles: {
    paddingHorizontal: 170,
    paddingVertical: 150,
  },
});
