// Redux
import { Provider } from 'react-redux';
import { store } from './store';

// React Native and Navigation
import React, { useState } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Utils
import { setNavigator } from './src/navigation'

// Expo Fonts
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import VocabularyScreen from './src/screens/VocabularyScreen';
import WordListScreen from './src/screens/WordListScreen';
import LoginScreen from './src/screens/LoginScreen';
import ReviewScreenII from './src/screens/ReviewScreenII';
import ReviewScreenI from './src/screens/ReviewScreenI';
import RankingScreen from './src/screens/RankingScreen';
import SignupScreen from './src/screens/SignupScreen';
import AccountScreen from './src/screens/AccountScreen';


// Load fonts from assets/fonts
const getFonts = () => Font.loadAsync({
  'great-vibes': require('./assets/fonts/GreatVibes-Regular.ttf'),
  'lato-thin': require('./assets/fonts/Lato-Thin.ttf'),
  'lato-light': require('./assets/fonts/Lato-Light.ttf'),
  'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
  'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
  'lato-black': require('./assets/fonts/Lato-Black.ttf'),
  'lobstertwo-regular': require('./assets/fonts/LobsterTwo-Regular.ttf'),
  'lobstertwo-bold': require('./assets/fonts/LobsterTwo-Bold.ttf')
})


// Default navigationOptions 
const defaultHeader = {
  cardStyle: {
    backgroundColor: 'white'
  },
  headerStyle: {
    backgroundColor: '#FAFAFC',
    height: 110
  },
  headerTintColor: '#413d3d',
  headerTitleStyle: {
    fontFamily: 'lobstertwo-regular',
    fontSize: 27
  },
  headerBackTitle: null
}


// Create Navigation
const switchNavigator = createSwitchNavigator({

  // Login Screens
  loginFlow: createStackNavigator({
    Login: { screen: LoginScreen, navigationOptions: { headerShown: false } },
    Signup: { screen: SignupScreen, navigationOptions: { headerShown: false } }
  }),


  // Main Screens
  mainFlow: createStackNavigator({

    // Home Screens
    homeFlow: createStackNavigator({
      
      // Menu Screens
      menuFlow: createDrawerNavigator({
        Home: HomeScreen,
        Account: AccountScreen
      }),

      Home: HomeScreen,
      ReviewI: ReviewScreenI,
      ReviewII: ReviewScreenII,
      Ranking: RankingScreen
    }, {
      initalRouteName: 'Home',
      mode: 'modal',
      navigationOptions: { 
        headerShown: false 
      },
      defaultNavigationOptions: {
        ...defaultHeader,
        title: 'LearnIt'
      }
    }),

    Vocabulary: VocabularyScreen,
    WordList: WordListScreen,


    // Default Navigation Options
  }, {
    initialRouteName: 'homeFlow',
    mode: 'card',
    defaultNavigationOptions: {
      ...defaultHeader,
      title: 'LearnIt'
    }
  })
})

const Root = createAppContainer(switchNavigator);


const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  // Wait for fonts to load before rendering RootApp
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log('something went wrong')}
      />
    )
  }

  return (
    <Provider store={store}>
      <Root ref={(navigator) => { setNavigator(navigator) }} />
    </Provider>
  )
}

export default App;
