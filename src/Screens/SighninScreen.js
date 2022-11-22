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
  Center,
  AlertDialog,
  Spinner,
} from "native-base";

import { useEffect, useState, useRef } from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";

import * as FaceDetector from "expo-face-detector";
import axios from "axios";
// import { cameraWithTensors } from "@tensorflow/tfjs-react-native";

const SighninScreen = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    if (resul == "Cadastrado com successo") {
      navigation.navigate("Login");
    }
    setIsOpen(false);
  };
  const [resul, setresul] = useState();
  const [haspermission, sethaspermission] = useState();
  const [faceData, setFaceData] = useState([]);
  //jj
  const cancelRef = useRef();
  const [nome, setnome] = useState();
  const [email, setemail] = useState();
  const [tel, settel] = useState();
  const [senha, setsenha] = useState();
  const [loading, setloading] = useState(false);

  const Cadastrar = async () => {
    const res = await axios.post("auth/", {
      email: email,
      senha: senha,
    });
  };

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     sethaspermission(status === "granted");
  //   })();
  // }, []);

  // if (haspermission === false) {
  //   return <Text>No Acess to camera</Text>;
  // }

  // function handleCameraStream(images, updatePreview, gl) {
  //   const loop = async () => {
  //     const nextImageTensor = images.next().value;

  //     //
  //     // do something with tensor here
  //     //

  //     // if autorender is false you need the following two lines.
  //     // updatePreview();
  //     // gl.endFrameEXP();

  //     requestAnimationFrame(loop);
  //   };
  //   loop();
  // }

  return (
    <>
      {/* <TensorCamera
        // Standard Camera props
        style={styles.camera}
        type={Camera.Constants.Type.front}
        // Tensor related props
        resizeHeight={200}
        resizeWidth={152}
        resizeDepth={3}
        onReady={handleCameraStream}
        autorender={true}
      /> */}
      <Center w="100%" height="100%" bg="#fff">
        <Box safeArea p="2" py="8" w="90%" mt="5%" maxW="290" bg="#fff">
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 180, height: 50 }}
              source={require("../assets/icon.png")}
            />

            <Text
              mt="5"
              style={{
                fontWeight: "600",
                fontSize: 20,
                color: "#000",
              }}
            >
              Sign Up
            </Text>
          </View>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label> Name</FormControl.Label>
              <Input
                onChangeText={(text) => {
                  setnome(text);
                }}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                onChangeText={(text) => {
                  setemail(text);
                }}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input
                onChangeText={(text) => {
                  settel(text);
                }}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                onChangeText={(text) => {
                  setsenha(text);
                }}
                type="password"
              />
            </FormControl>

            {loading ? (
              <Button colorScheme="indigo" disabled={true}>
                <Center mt="5">
                  <Spinner
                    color="#21ae9c"
                    size="lg"
                    accessibilityLabel="A buscar Dados"
                  />
                  <Heading fontSize="lg">Aguarde</Heading>
                </Center>
              </Button>
            ) : (
              <Button
                mt="2"
                onPress={() => {
                  Cadastrar();
                }}
                bg="#21ae9c"
              >
                Registrar
              </Button>
            )}

            <HStack mt="2" justifyContent="center">
              <Text color={"#000"} fontSize="sm">
                Have an account?
              </Text>
            </HStack>
            <HStack justifyContent={"center"}>
              <Link
                _text={{
                  color: "#21ae9c",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => navigation.navigate("Login")}
              >
                Log In
              </Link>
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
    </>
  );
};

export default SighninScreen;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  faces: {
    backgroundColor: "#ffffff",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  faceDesc: {
    fontSize: 20,
  },
});
