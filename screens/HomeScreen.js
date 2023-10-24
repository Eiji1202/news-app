import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "../components/ListItem";
import { useState, useEffect } from "react";
import axios from "axios";

const URL =
  "https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=8199141364594a2594d49786ab051d12";
export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState();

  const fetchArticles = async () => {
    try {
      const res = await axios.get(URL);
      setArticles(res.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={s.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article", { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
