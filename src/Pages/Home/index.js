import React, {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {FlingGestureHandler} from 'react-native-gesture-handler';

import Data from '../../Data/db.json';

const {width, height} = Dimensions.get('screen');

const imageW = width * 0.8;
const imageH = imageW * 1.5;

export default function Home() {
  return (
    <FlingGestureHandler>
      <FlingGestureHandler>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#111',
          }}>
          <FlatList
            data={Data.Movies}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            scrollEnabled={false}
            CellRendererComponent={({
              index,
              item,
              children,
              style,
              ...props
            }) => {
              const newStyle = [
                style,
                {
                  zIndex: Data.Movies.length + index,
                  left: -imageW / 2,
                  top: -imageH / 2,
                },
              ];
              return (
                <View index={index} {...props} style={newStyle}>
                  {children}
                </View>
              );
            }}
            renderItem={({item}) => (
              <View style={{position: 'absolute'}}>
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    style={{
                      width: imageW,
                      height: imageH,
                      resizeMode: 'cover',
                      borderRadius: 20,
                    }}
                    source={{uri: item.poster}}
                  />
                  <View style={{position: 'absolute', bottom: 20, left: 20}}>
                    <Text
                      style={{
                        textTransform: 'uppercase',
                        color: 'white',
                        fontSize: 30,
                        fontWeight: '900',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}
