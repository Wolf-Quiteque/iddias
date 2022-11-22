import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Input,
  Link,
  Button,
  FormControl,
  AlertDialog,
  Spinner,
  Center,
} from "native-base";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { setSignIn } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { View, ScrollView, StyleSheet, Image } from "react-native";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    navigation.navigate("Login");
    setIsOpen(false);
  };
  const [resul, setresul] = useState();

  const [email, setemail] = useState();
  const [senha, setsenha] = useState();
  const [loading, setloading] = useState(false);
  const cancelRef = useRef();

  const Login = async () => {
    try {
      setloading(true);
      const res = await axios.post("auth/", {
        email: email,
        senha: senha,
      });

      setloading(false);
      if (res.data.email) {
        dispatch(
          setSignIn({
            email: email,
            isLoggedIn: true,
            userName: res.data.nome,
          })
        );
      } else {
        setresul(res.data);
        setloading(false);
      }
    } catch (err) {
      console.log(err);
      setresul("Houve um erro tenta devonvo");
      setloading(false);
    }

    setIsOpen(true);
    setloading(false);
  };

  return (
    <Center w="100%" height="100%" style={{ backgroundColor: "#fff" }}>
      <Box
        safeArea
        p="2"
        py="8"
        w="90%"
        maxW="290"
        style={{ backgroundColor: "#fff" }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 180, height: 50 }}
            source={require("../assets/icon.png")}
          />

          <Text
            mt="10"
            style={{
              fontWeight: "600",
              fontSize: 20,
              color: "#000",
            }}
          >
            Sign In
          </Text>
        </View>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label colorScheme="warmGray.50">
              Email
            </FormControl.Label>
            <Input
              color={"#000"}
              onChangeText={(text) => {
                setemail(text);
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              color={"#000"}
              onChangeText={(text) => {
                setsenha(text);
              }}
              type="password"
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "#21ae9c",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forgot Password?
            </Link>
          </FormControl>

          <HStack justifyContent="center">
            <Text style={{ color: "grey" }}>
              By continuing, you agree to accept our Privacy Policy & Terms of
              Service.
            </Text>
          </HStack>

          {loading ? (
            <Button disabled mt="2" bg="#21ae9c">
              <Center mt="5">
                <Spinner size="lg" accessibilityLabel="A buscar Dados" />
                <Heading fontSize="lg">Aguarde</Heading>
              </Center>
            </Button>
          ) : (
            <Button
              onPress={() => {
                Login();
              }}
              mt="2"
              bg="#21ae9c"
            >
              Continue
            </Button>
          )}
          <HStack mt="5" justifyContent="center">
            <Text style={{ color: "#000" }}>Dont Have an Account?</Text>
          </HStack>
          <HStack justifyContent="center">
            <Box>
              <Link
                _text={{
                  color: "#21ae9c",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => navigation.navigate("SignUp")}
              >
                Create Account
              </Link>
            </Box>
          </HStack>
        </VStack>
      </Box>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset={"fade"}
      >
        <AlertDialog.Content>
          <AlertDialog.Header
            fontSize="lg"
            fontWeight="bold"
          ></AlertDialog.Header>
          <AlertDialog.Body>{resul && resul}</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button colorScheme="green" onPress={onClose} ml="6">
              OK
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};

export default LoginScreen;
