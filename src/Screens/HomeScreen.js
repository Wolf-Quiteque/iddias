import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/slices/authSlice";
import Ionic from "react-native-vector-icons/Ionicons";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image style={styles.img} source={require("../assets/post1.png")} />
          <Text style={styles.boxTitle}>15 Things about your personality</Text>
          <Text style={styles.boxDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor #incididunt ero labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco poriti
            laboris nisi
          </Text>
          <View style={styles.boxRow}>
            <Ionic name={"heart"} size={22} color={"#f82a2a"} />
            <Ionic name={"chatbox-ellipses"} size={22} color={"#c9c3c3"} />
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.box}>
          <Image style={styles.img} source={require("../assets/post2.png")} />
          <Text style={styles.boxTitle}>Motivacional Quiz</Text>
          <Text style={styles.boxDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor #incididunt ero labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco poriti
            laboris nisi
          </Text>
          <View style={styles.boxRow}>
            <Ionic name={"heart"} size={22} color={"#f82a2a"} />
            <Ionic name={"chatbox-ellipses"} size={22} color={"#c9c3c3"} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "",
    marginBottom: 15,
  },
  box: {
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: 250,
  },
  boxTitle: {
    marginTop: 8,
    fontWeight: "700",
    fontSize: 17,
  },

  boxDescription: {
    marginTop: 5,
  },
  boxRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  boxIcon: {
    marginRight: 5,
  },
});
