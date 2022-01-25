import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile';
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';
import Resume from './components/Resume';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Profile/>
      <Projects />
      <Education />
      <Resume />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxWidth: 960,
    margin: 'auto',
  },
});
