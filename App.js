import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Main from './components/Main';
import { LinearGradient } from "expo-linear-gradient";
import * as Font from 'expo-font';
import { globalStyles } from './assets/styles/globalStyles';
import { PaperProvider } from 'react-native-paper';


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.otf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.otf'),
        'Montserrat-BoldItalic': require('./assets/fonts/Montserrat-BoldItalic.otf'),
        'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.otf'),
        'Montserrat-ExtraBoldItalic': require('./assets/fonts/Montserrat-ExtraBoldItalic.otf'),
        'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.otf'),
        'Montserrat-ExtraLightItalic': require('./assets/fonts/Montserrat-ExtraLightItalic.otf'),
        'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.otf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.otf'),
        'Montserrat-LightItalic': require('./assets/fonts/Montserrat-LightItalic.otf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.otf'),
        'Montserrat-MediumItalic': require('./assets/fonts/Montserrat-MediumItalic.otf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.otf'),
        'Montserrat-SemiBoldItalic': require('./assets/fonts/Montserrat-SemiBoldItalic.otf'),
        'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.otf'),
        'Montserrat-ThinItalic': require('./assets/fonts/Montserrat-ThinItalic.otf'),

        'MontserratAlternates-Black': require('./assets/fonts/MontserratAlternates-Black.otf'),
        'MontserratAlternates-Bold': require('./assets/fonts/MontserratAlternates-Bold.otf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <PaperProvider>
      <View style={globalStyles.container}>
        <LinearGradient
          // Button Linear Gradient
          colors={["rgb(251,210,217)", "rgb(120,181,254)", "rgb(171,239,255)"]}
          style={globalStyles.background}
        >
          <Main />
        </LinearGradient>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}


