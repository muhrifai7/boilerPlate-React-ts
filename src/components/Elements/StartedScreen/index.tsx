import React from 'react';
import {
  View,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {PageControlAleppo} from 'react-native-chi-page-control';
import Carousel from 'react-native-snap-carousel';

import {Text} from '../index';
import {colors} from '../../../theme';
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
      <View style={{...styles.containerData, backgroundColor: item.color}}>
        <View style={styles.textData}>
          <Text type="bold" size={25} color="white" style={styles.textData}>
            {item.title}
          </Text>
          <Text
            type="regular"
            size={22}
            color="white"
            style={styles.textSubData}>
            {item.desc}
          </Text>
        </View>
        <Image source={item.image} style={styles.image} />
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
  });

  let refsCrousel: any,
    {width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Carousel
        ref={(r: any) => (refsCrousel = r)}
        data={data}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
        lockScrollWhileSnapping={false}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        onScroll={e =>
          setState({
            ...state,
            activeDotIndex:
              e.nativeEvent.contentOffset.x / ((data.length - 1) * width),
          })
        }
      />
      <View style={styles.bottom}>
        <PageControlAleppo
          progress={state.activeDotIndex}
          numberOfPages={data.length}
          color="white"
          inactiveTintColor="white"
          activeTintColor="white"
        />

        <TouchableOpacity
          onPress={() => refsCrousel.snapToNext()}
          activeOpacity={0.9}
          style={styles.buttonNext}>
          <Icon name="arrow-right" size={24} color={colors.like} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartedScreen;
