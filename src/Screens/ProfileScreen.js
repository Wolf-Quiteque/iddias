import {
  Box,
  FlatList,
  Heading,
  Button,
  HStack,
  VStack,
  Text,
  Input,
  Icon,
  Spacer,
  FormControl,
  Center,
  TextArea,
  NativeBaseProvider,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserName } from "../redux/slices/authSlice";
import { setSignOut } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const name = useSelector(selectUserName);
  const Terminar = async () => {
    dispatch(
      setSignOut({
        email: null,
        isLoggedIn: false,
        userName: null,
      })
    );
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <ScrollView>
      <Center>
        <Heading
          alignItems="center"
          color="coolGray.800"
          fontSize="lg"
          p="4"
          pb="3"
        >
          {name && name}
        </Heading>
      </Center>

      <HStack mt="5" mb="10" space={6} justifyContent="center">
        <Button
          h="100"
          colorScheme="yellow"
          width="40%"
          bg="coolGray.700"
          rounded="md"
          shadow={3}
          onPress={() => {
            Terminar();
          }}
        >
          <Center mt="5">
            <FontAwesome5 name="power-off" color="#ff3838" size={30} />
            <Text color="white" bold>
              Terminsar sessão
            </Text>{" "}
          </Center>
        </Button>
      </HStack>
    </ScrollView>
  );
};

export default ProfileScreen;
