import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Dimensions,
  Image,
  ScrollView, StyleSheet,
  Text, TouchableOpacity,
  View,
} from 'react-native';
import * as _ from 'lodash';
import style from './../../styles/styles';

class Carousel extends Component {
  componentDidMount() {
    const scrollNext = () => {
      const children = _.get(this, "scrollView.props.children", false);
      const {width} = this.props.carouselStyle;

      if(children) {
        const maxScroll = children.length * width;
        if ((this.currentScroll  + width) < maxScroll) {
          this.currentScroll += width;
        } else {
          this.currentScroll = 0;
        }
      }
      // This needs to be done when orientation is changed.
      // TODO: Remove this.
      // This is implemented in a hurry, Use the diff of remainder vs current
      // scroll to scroll appropriately 
      if (this.currentScroll % width !== 0)
        this.currentScroll = 0;
      this.scrollView &&
        this.scrollView.scrollTo({x: this.currentScroll, y: 0, animated: false});
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(scrollNext, 5000);
    }
    scrollNext(); 
  }

  componentDidUnMount() {
    clearTimeout(this.scrollTimeout);
  }

  render() {
    const { onPress, images, carouselStyle } = this.props;
    return(
      <ScrollView 
        horizontal
        pagingEnabled
        ref={ref => this.scrollView = ref}
        showsHorizontalScrollIndicator={false}
        style={style.flexContainer}
      >
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            style={styles.posterSize}
            onPress={() => onPress(image)}>
            <ImageWithTitle image={image} style={carouselStyle}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}


const ImageWithTitle = (props) => (
  <View>
    <Image
      style={props.style}
      source={{uri: props.image.uri}}
    />
    <View style={styles.absoluteTitle}>
      <Text style={[style.titleText, styles.titleText]}>
        {props.image.original_title}
      </Text>
    </View>
  </View>
)


const styles = StyleSheet.create({
  absoluteTitle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 10, 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: 20,
    backgroundColor: 'transparent',
    color: 'white'
  }
});

const mapStateToProps = state => ({carouselStyle: state.configuration.style.carousel});
export default connect(mapStateToProps)(Carousel);
