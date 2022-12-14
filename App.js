
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from './src/Pages/Header';
import Routes from './Routes';

export default function App() {
  return (
    <SafeAreaView style={{marginBottom: 30}}>
      <Header/>
      <ScrollView>
        <Routes/>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
