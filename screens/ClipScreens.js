import { StyleSheet, SafeAreaView, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { ListItem } from "../components/ListItem";

export const ClipScreen = ({ navigation }) => {
  const clips = useSelector((state) => state.user.clips);
  return (
    <SafeAreaView style={s.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            author={item.author}
            title={item.title}
            imageUrl={item.urlToImage}
            onPress={() => navigation.navigate("Article", { article: item })}
          />
        )}
      />
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
