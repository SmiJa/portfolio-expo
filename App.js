import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Profile from './components/Profile';
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';
import Resume from './components/Resume';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrolls}>
        <Profile/>
        <Projects />
        <Education />
        <Resume />
      </ScrollView>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: '100vh',
    flex: 1,
    backgroundColor: '#726255',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 'auto',
    width: '100%',
  },
  scrolls: {
    flex: 1,
    width: '100%',
  }
});
