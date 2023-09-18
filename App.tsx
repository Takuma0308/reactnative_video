import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { useEffect } from 'react';
import Purchases from 'react-native-purchases'

export default function App() {

   // SDK の初期化処理
   const apiKey = Platform.select({
    ios: "public_ios_sdk_key", //ニャンさんに聞く
    android: "public_google_sdk_key", //お支払いプロファイルや課金アイテムの設定を行ってからapiを取得
  }) || "default_api_key";
  
  useEffect(() => {
    Purchases.configure({ apiKey });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on Takuma</Text>
      <StatusBar style="auto" />
    </View>
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
