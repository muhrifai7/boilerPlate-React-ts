import React from 'react';
import {View, Dimensions, StatusBar, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {Text} from '../index';
import styles from './styles';

type PropsStartedScreens = {
  data: Array<Object>;
};

type stateData = {
  item: any;
  index: number;
};

const Component: any = () => {
  const _renderItem: React.FC<stateData> = ({item}) => {
    return (
      <View style={styles.containerData}>
        <View style={styles.textData}>
          <Image source={item.image} style={styles.image} />
        </View>
      </View>
    );
  };
  return {_renderItem};
};

const StartedScreen: React.FC<PropsStartedScreens> = ({data}) => {
  const {_renderItem} = Component();

  const [state, setState] = React.useState({
    refsCrousel: null,
    activeDotIndex: 0,
    colorButton: null,
    index: 0,
    data: data[0].title,
  });

  let {width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Carousel
        data={data}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
        lockScrollWhileSnapping={false}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        onSnapToItem={index =>
          setState({
            ...state,
            index: index,
            data: data[index ? index : 0].title,
          })
        }
      />
      <View style={styles.bottom}>
        <Text type="bold" size={16} style={styles.textData}>
          HKI Mobile Application System
        </Text>
        <Text type="regular" size={16} style={styles.textData}>
          {state.data}
        </Text>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={state.index}
          dotStyle={styles.dot}
          containerStyle={styles.containerStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

export default StartedScreen;
