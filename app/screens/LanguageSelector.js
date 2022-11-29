import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

// import SmoothPicker from 'react-native-smooth-picker';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import AppModal from '../components/AppModal';

import AppText from '../components/AppText';

const dataLanguage = [
  'Urdu',
  'عربي',
  'English',
  'Spain',
  'Hindi',
  'Italian',
  'Portuguese',
  'Indonesian',
  'French',
];
const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};
const sizeText = {
  0: 20,
  1: 15,
  2: 10,
};

const Item = React.memo(({opacity, selected, vertical, fontSize, name}) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
          opacity,
          borderColor: selected ? 'grey' : 'transparent',
          width: vertical ? 200 : 'auto',
        },
      ]}>
      <AppText style={{fontSize}}>{name}</AppText>
    </View>
  );
});

export const ItemToRender = ({item, index}, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (opacity > 3) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }
  return (
    <Item
      opacity={opacity}
      selected={selected}
      vertical={vertical}
      fontSize={fontSize}
      name={item}
    />
  );
};

// const LanguageSelector = ({visible}) => {
//   const [selected, setSelectedIndex] = useState(4);
//   const [isVisibleModel, setVisibleModel] = useState(visible);
//   // console.log(isSelected);
//   useEffect(() => {}, []);
//   const handleChange = (item, index) => {
//     setSelectedIndex(index);
//     // console.log(item);
//   };
//   const onBtnPress = () => {
//     setVisibleModel(false);
//   };

//   return (
//     <AppModal visible={visible} style={{top: '20%'}} height={'60%'}>
//       <View style={styles.container}>
//         <View style={styles.wrapperVertical}>
//           <SmoothPicker
//             initialScrollToIndex={selected}
//             onScrollToIndexFailed={() => {}}
//             keyExtractor={(_, index) => index.toString()}
//             showsVerticalScrollIndicator={false}
//             data={dataLanguage}
//             //  scrollAnimation
//             onSelected={({item, index}) => handleChange(item, index)}
//             renderItem={option => ItemToRender(option, selected, true)}
//             magnet
//             selectOnPress
//           />
//         </View>
//       </View>
//       <TouchableOpacity
//         style={styles.btnContainer}
//         activeOpacity={0.9}
//         onPress={() => onBtnPress}>
//         <FontAwesome name={'check'} size={30} color={'white'} />
//       </TouchableOpacity>
//     </AppModal>
//   );
// };
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  wrapperVertical: {
    width: 250,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: 'black',
  },
  OptionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderWidth: 3,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    //  borderRadius: 10,
  },
  btnContainer: {
    marginTop: 20,
    top: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3A4642',
    borderRadius: 10,
    paddingVertical: 5,
  },
});

// export default LanguageSelector;
