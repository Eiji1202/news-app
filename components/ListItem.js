import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

/**
 *
 * @param {
 * imageUrl: 画像URL(string)
 * title: タイトル(string)
 * author: ニュース提供元(string)
 * onPress: タップ時のイベント
 * } props
 * @returns
 */

export const ListItem = (props) => {
  const { imageUrl, title, author, onPress } = props;

  return (
    <TouchableOpacity style={s.itemContainer} onPress={onPress}>
      <View style={s.leftContainer}>
        <Image
          style={s.leftImage}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={s.rightContainer}>
        <Text style={s.text} numberOfLines={3}>
          {title}
        </Text>
        <Text style={s.subText}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    marginVertical: 6,
  },
  leftContainer: {
    width: 100,
  },
  leftImage: {
    width: "100%",
    height: "100%",
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});
