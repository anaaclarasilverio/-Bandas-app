import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import MusicItem from "../components/MusicItem";

export default function Home({ navigation }) {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [musicData, setMusicData] = useState([]);
  const item = {
    id: 1,
    title: "Os anjos cantam",
    group: "Jorge e Mateus",
    album_image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9ee32724242445.563319ce9cdc2.jpg",
    year: 2010,
    genre: "Sertanejo",
  };

  useEffect(() => {
    fetch("http://10.0.2.2:3000/musics")
      .then((response) => response.json())
      .then((data) => setMusicData(data));
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.title}>Minhas músicas</Text>
      <FlatList data={musicData} keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MusicItem
            isPlaying={() => currentPlaying == item.id}
            music={item}
            navigation={navigation}
            onPlayPause={() => { }}
          />

        )} />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginLeft: 20,
  },
})
