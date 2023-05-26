import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LineChart} from 'react-native-chart-kit';
import Tts from 'react-native-tts';

import SmoothPicker from 'react-native-smooth-picker';

import colors from '../config/colors';
import AppCard from '../components/AppCard';
import AppSwitch from '../components/AppSwitch';
import AppText from '../components/AppText';
import AppDividers from '../components/AppDividers';
import AppModal from '../components/AppModal';
import AppList from '../lists/AppList';
import {lists} from '../dummyData/lists';

import {strings} from '../localization/Localization';
import {ItemToRender} from './LanguageSelector';
const logo_image = require('../assets/mainlogo.png');
const sound_icon = require('../assets/sound/sound3.png');

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

const HomeScreen = () => {
  const [soundAlert, setSoundAlert] = useState(false);
  const [silentMode, setSilentMode] = useState(false);
  const [isVisibleModel, setVisibleModel] = useState(false);

  const [isSelected, setSelected] = useState(null);
  const [sliderValue, setSliderValue] = useState(0.9);

  const [selected, setSelectedIndex] = useState(4);
  const [isLanguageModel, setLanguageModel] = useState(false);

  const [voices, setVoice] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [initialStatus, setInitialStatus] = useState('initiliazing');

  const handleChange = (item, index) => {
    setSelectedIndex(index);
    // dataLanguage.forEach((ite, index) => {
    switch (index) {
      case 0:
        strings.setLanguage('ur-PK');
        break;
      case 1:
        strings.setLanguage('ar-SA');
        break;
      case 2:
        strings.setLanguage('en-US');
        break;
      case 3:
        strings.setLanguage('sp');
        break;
      case 4:
        strings.setLanguage('hi');
        break;
      case 5:
        strings.setLanguage('it');
        break;
      case 6:
        strings.setLanguage('pt');
        break;
      case 7:
        strings.setLanguage('id');
        break;
      case 8:
        strings.setLanguage('fr');
        break;
      default:
        // strings.setLanguage('en-US');
        break;
    }

    // if (index === 0) {
    //   strings.setLanguage('ar');
    // }
    // console.log(item);
  };
  const onLanguageBtnPress = () => {
    setLanguageModel(false);
  };

  // useEffect(() => {
  //   //  strings.setLanguage('ur');
  //   const Voices = () => {
  //       Tts.voices().then(initVoice);
  //   };
  //   const initVoice = async () => {
  //     const voices = await Tts.voices();
  //     const avVoices = voices
  //       .filter(v => !v.networkConnectionRequired && !v.notInstalled)
  //       .map(v => {
  //         return {id: v.id, name: v.name, language: v.language};
  //       });
  //     let selectedVoice = null;
  //     if (voices && voices.length > 0) {
  //       selectedVoice = voices[0].id;
  //       try {
  //         await Tts.setDefaultLanguage(voices[0].language);
  //       } catch (error) {
  //         console.log('set Default Language Error ', error);
  //       }
  //       await Tts.setDefaultVoice(voices[0].id);
  //       setVoice(avVoices);
  //       setSelectedVoice(selectedVoice);
  //       setInitialStatus('initialized');
  //     } else {
  //       setInitialStatus('initialized');
  //     }
  //   };
  //   //  Voices();
  //   //  console.log(voices);
  // }, []);

  const onSelect = async (item, index) => {
    //   setColor('green');
    setSelected(item.id);

    Tts.speak(item.title, {
      androidParams: {
        KEY_PARAM_PAN: -1,
        KEY_PARAM_VOLUME: 0.5,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
      language: 'en',
      pitch: 1,
      rate: 1,
      quality: sliderValue,
      latency: 500, // high
    });
    // Tts.setDefaultLanguage('ar-SA');
    // Tts.setDefaultVoice('com.apple.ttsbundle.Samantha-compact');
    //  Tts.setDucking(true);
    //    Tts.stop();

    // await Tts.getInitStatus().then(
    //   () => {
    //     Tts.speak(item.title, {
    //       androidParams: {
    //         KEY_PARAM_PAN: -1,
    //         KEY_PARAM_VOLUME: 1,
    //         KEY_PARAM_STREAM: 'STREAM_MUSIC',
    //       },
    //       language: 'en',
    //       pitch: 1,
    //       rate: 1,
    //       quality: sliderValue,
    //       latency: 500, // high
    //     });
    //   },
    //   err => {
    //     if (err === 'no_engine') {
    //       Tts.requestInstallEngine();
    //       Tts.requestInstallData();
    //     }
    //   },
    // );
  };

  const onSliderChange = txt => {
    setSliderValue(txt);
  };
  const onBtnPress = () => {
    setVisibleModel(!isVisibleModel);
  };

  const onSoundAlert = () => {
    if (soundAlert === false) {
      setSoundAlert(!soundAlert);
    } else if (soundAlert === true) {
      setSoundAlert(false);
    }
  };
  const onSilentMode = () => {
    if (silentMode === false) {
      setSilentMode(!silentMode);
    } else if (silentMode === true) {
      setSilentMode(false);
    }
  };

  //charts
  const chartConfig = {
    backgroundGradientFrom: '#FFEDC9',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#f5f5f5',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 179, 26, ${opacity})`,
    strokeWidth: 5, // optional, default 3
    barPercentage: 0,
    useShadowColorFromDataset: false, // optional
    fillShadowGradient: '#FFEDC9',
    fillShadowGradientOpacity: 1,
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.royalBlue}
      />

      <View style={styles.headerContainer}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={logo_image}
            style={{width: '100%', height: '100%'}}
            resizeMode={'cover'}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flex: 1,
            left: 10,
            top: 15,
            position: 'absolute',
          }}
          onPress={() => setLanguageModel(!isLanguageModel)}>
          <Fontisto name={'player-settings'} size={30} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={styles.fotterContainer}>
        <ScrollView
          style={{flex: 1, margin: 15}}
          indicatorStyle={'black'}
          scrollPerfTag={''}>
          <AppCard
            width={320}
            height={70}
            backgroundColor={'#F5FAF4'}
            borderRadius={5}>
            <View style={styles.innerContainer}>
              <AppSwitch
                isOn={soundAlert}
                onToggle={() => onSoundAlert()}
                style={{marginLeft: 10}}
              />
              <AppText style={{right: 20}}>{strings.soundAlert}</AppText>
            </View>
          </AppCard>
          <AppCard
            width={320}
            height={70}
            backgroundColor={'#F5FAF4'}
            borderRadius={5}>
            <View style={styles.innerContainer}>
              <AppSwitch
                isOn={silentMode}
                onToggle={() => onSilentMode()}
                style={{marginLeft: 10}}
              />
              <AppText style={{right: 20}}>{strings.enableAlert}</AppText>
            </View>
          </AppCard>
          <AppCard
            width={320}
            height={80}
            backgroundColor={'#fffaee'}
            borderRadius={5}
            onPress={() => setVisibleModel(!isVisibleModel)}>
            <View style={styles.innerContainer}>
              <View
                style={{
                  flex: 1,
                  width: 40,
                  height: 40,
                }}>
                <Image
                  source={sound_icon}
                  style={{width: 40, height: 40}}
                  resizeMode={'center'}
                />
              </View>
              <AppText style={{right: 20}}>{strings.message}</AppText>
            </View>
          </AppCard>
          <AppCard
            width={320}
            height={100}
            backgroundColor={'#fffaee'}
            borderRadius={5}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                marginVertical: 15,
                alignItems: 'flex-start',
              }}>
              <AppText>{strings.volume}</AppText>
              <Slider
                style={{width: 300, height: 20}}
                minimumValue={0}
                maximumValue={1}
                value={10}
                onValueChange={val => onSliderChange(val)}
                minimumTrackTintColor="#02d9c7"
                maximumTrackTintColor="#000000"
              />
            </View>
          </AppCard>
          <View style={{marginVertical: 15, alignItems: 'center'}}>
            <AppText style={{fontSize: 16}}>{strings.statistics}</AppText>
            <AppDividers width={100} height={2} backgroundColor={'#e8bf74'} />
            <AppDividers
              width={50}
              height={2}
              marginVertical={0}
              backgroundColor={'#e8bf74'}
            />
          </View>
          <View style={styles.statisticsContainer}>
            <AppCard width={150} height={90} borderRadius={5}>
              <View style={{alignItems: 'center', marginVertical: 15}}>
                <AppText>{strings.week}</AppText>
                <AppText style={styles.text}>0</AppText>
              </View>
            </AppCard>
            <AppCard width={150} height={90} borderRadius={5}>
              <View style={{alignItems: 'center', marginVertical: 15}}>
                <AppText>{strings.today}</AppText>
                <AppText style={styles.text}>2</AppText>
              </View>
            </AppCard>
            <AppCard width={150} height={90} borderRadius={5}>
              <View style={{alignItems: 'center', marginVertical: 15}}>
                <AppText style={{flexWrap: 'wrap'}}>
                  {strings.sinceUsingApp}
                </AppText>
                <AppText style={styles.text}>0</AppText>
              </View>
            </AppCard>
            <AppCard width={150} height={90} borderRadius={5}>
              <View style={{alignItems: 'center', marginVertical: 15}}>
                <AppText>{strings.month}</AppText>
                <AppText style={styles.text}>0</AppText>
              </View>
            </AppCard>
          </View>

          <AppCard>
            <View style={{flex: 1}}>
              <LineChart
                data={{
                  labels: ['Jan', 'Feb', 'March', 'April'],
                  datasets: [
                    {
                      data: [0, 5, 10, 15, 20, 30],
                    },
                  ],
                }}
                width={Dimensions.get('screen').width}
                height={200}
                chartConfig={chartConfig}
                withInnerLines={false}
                withOuterLines={false}
                //   withHorizontalLabels={false}
                withVerticalLabels={false}
                withHorizontalLines={false}
              />
            </View>
          </AppCard>
        </ScrollView>
      </View>
      <AppModal visible={isVisibleModel} style={{top: '25%'}} height={'70%'}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          {lists.map((item, index) => {
            let color = item.id === isSelected ? 'green' : 'grey';
            return (
              <AppList
                key={index}
                title={item.title}
                icon={item.icon}
                color={color}
                selected={isSelected}
                onPress={() => onSelect(item, index)}
              />
            );
          })}
        </ScrollView>
        <TouchableOpacity
          style={styles.btnContainer}
          activeOpacity={0.7}
          onPress={onBtnPress}>
          <FontAwesome name={'check'} size={30} color={'white'} />
        </TouchableOpacity>
      </AppModal>
      {/* <LanguageSelector visible={languageSelector} /> */}
      <AppModal visible={isLanguageModel} style={{top: '20%'}} height={'60%'}>
        <View style={styles.Languagecontainer}>
          <View style={styles.wrapperVertical}>
            <SmoothPicker
              initialScrollToIndex={selected}
              onScrollToIndexFailed={() => {}}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              data={dataLanguage}
              //  scrollAnimation
              onSelected={({item, index}) => handleChange(item, index)}
              renderItem={option => ItemToRender(option, selected, true)}
              magnet
              selectOnPress
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.languageBtnContainer}
          activeOpacity={0.9}
          onPress={onLanguageBtnPress}>
          <FontAwesome name={'check'} size={30} color={'white'} />
        </TouchableOpacity>
      </AppModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#424242',
  },
  headerContainer: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  fotterContainer: {
    flex: 3,
    backgroundColor: '#fcfcfc',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    elevation: 5,
    //  alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statisticsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: '#d0a736',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3A4642',
    borderRadius: 10,
    paddingVertical: 5,
  },
  Languagecontainer: {
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
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: 'black',
  },

  languageBtnContainer: {
    marginTop: 20,
    top: 15,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3A4642',
    borderRadius: 20,
    paddingVertical: 3,
  },
});
export default HomeScreen;

// const isDarkMode = useColorScheme() === 'dark';

// const backgroundStyle = {
//   backgroundColor: isDarkMode ? colors.lighter : colors.darker,
// };
