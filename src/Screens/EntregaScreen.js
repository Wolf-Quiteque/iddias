import {
  Stack,
  Input,
  Button,
  IconButton,
  Pressable,
  Icon,
  Text,
  HStack,
  Center,
  Select,
  Box,
  Image,
  FormControl,
  AlertDialog,
  Spinner,
  Divider,
  Heading,
  TextArea,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState, useRef } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import * as ImagePicker from "expo-image-picker";

import axios from "axios";

const EntregaScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  var user = {};
  const [bi, setbi] = useState();
  const [hasPermission, setHasPermission] = useState(false);
  const [doc, setdoc] = useState();
  const [comprovativo, setcomprovativo] = useState(false);

  const [loading, setloading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    setIsOpenn(false);
  };
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Serviços de Entrega" }],
    });
  };

  const cancelRef = useRef();

  const VerEstado = async () => {
    // setloading(true);
    // const res = await axios.get("docs/" + bi);
    // setloading(false);
    // if (res.data == null) {
    //   console.log("Nehum registo encontrado");
    // } else {
    //   setdoc(res.data);
    //   setIsOpen(true);
    // }
    setIsOpen(true);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView>
      <Stack
        mt="5"
        space={2.5}
        alignSelf="center"
        px="4"
        safeArea
        w={{
          base: "100%",
          md: "25%",
        }}
      >
        <Box>
          {" "}
          <FormControl mb="5">
            <Text color="user" bold mb="2">
              Documento
            </Text>
            <Select
              variant="filled"
              // selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Service"
              onValueChange={() => {
                setIsOpenn(true);
              }}
              onChange={(e) => {
                user.documento = e.target.value;
              }}
              placeholder="Tipo de Documento"
              _selectedItem={{
                bg: "teal.600",
                endIcon: (
                  <FontAwesome5 name="check" color="#f2aa00" size={30} />
                ),
              }}
              mt={1}
              // onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="BI" value="ux" />
              <Select.Item label="Passaporte" value="web" />
              <Select.Item label="Livrete Automóvel" value="cross" />
              <Select.Item label="Carta de Condução" value="ui" />
              <Select.Item label="Visto" value="ui" />
              <Select.Item label="Cartão Multicaixa" value="ui" />
              <Select.Item label="Outros" value="ui" />
            </Select>
          </FormControl>
          <FormControl mb="5">
            <Text color="user" bold mb="2">
              Nº BI
            </Text>
            <Input
              variant="filled"
              placeholder="Digite o Numero do BI"
              onChange={(e) => {
                user.bi = e.target.value;
              }}
            />
          </FormControl>
          <FormControl mb="5">
            <Text color="user" bold mb="2">
              Nº Telefone
            </Text>
            <Input
              variant="filled"
              placeholder="Digite Numero De Telefone"
              onChange={(e) => {
                user.tel = e.target.value;
              }}
            />
          </FormControl>
          <FormControl mb="5">
            <Text color="user" bold mb="2">
              Informações adicionais
            </Text>
            <TextArea
              variant="filled"
              placeholder="Informações adicionais"
              onChange={(e) => {
                user.tel = e.target.value;
              }}
            />
          </FormControl>
          <Divider />
        </Box>
      </Stack>

      <HStack mt="4" justifyContent="center">
        {image && (
          <FontAwesome5
            name="times-circle"
            mt="10"
            onPress={() => {
              setImage(null);
            }}
            color="red"
            size={20}
          />
        )}

        {!image && (
          <Button
            h="70"
            colorScheme="yellow"
            width="80%"
            bg="coolGray.700"
            rounded="md"
            shadow={3}
            onPress={() => {
              pickImage();
              setcomprovativo(true);
            }}
          >
            <Center mt="5">
              <FontAwesome5 name="receipt" mt="10" color="#f2aa00" size={20} />
              <Text color="white" bold>
                Comprovativo
              </Text>{" "}
              {/* <Spinner color="warning.500" /> */}
            </Center>
          </Button>
        )}
      </HStack>

      <HStack mt="4" justifyContent="center">
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {image && (
            <Image
              alt="jl"
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      </HStack>

      {image && (
        <HStack mt="7" mb="5" space={1} justifyContent="center">
          {loading ? (
            <Button
              h="100"
              width="80%"
              bg="coolGray.700"
              rounded="md"
              shadow={3}
              onPress={() => {
                VerEstado();
              }}
              disabled={true}
            >
              <Center mt="5">
                <Spinner
                  color="#f2aa00"
                  ize="lg"
                  accessibilityLabel="A buscar Dados"
                />
                <Heading color="#f2aa00" fontSize="lg">
                  Aguarde
                </Heading>
              </Center>
            </Button>
          ) : (
            <Button
              h="100"
              colorScheme="yellow"
              width="80%"
              bg="coolGray.700"
              rounded="md"
              shadow={3}
              onPress={() => {
                VerEstado();
              }}
            >
              <Center mt="5">
                <FontAwesome5
                  name="opencart"
                  mt="10"
                  color="#f2aa00"
                  size={30}
                />
                <Text color="white" bold>
                  Fazer Pedido
                </Text>{" "}
                {/* <Spinner color="warning.500" /> */}
              </Center>
            </Button>
          )}
        </HStack>
      )}

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset={"fade"}
      >
        <AlertDialog.Content>
          <AlertDialog.Header fontSize="lg" fontWeight="bold">
            Solicitação
          </AlertDialog.Header>
          <AlertDialog.Body>Solicitação enviada</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button colorScheme="green" onPress={onRefresh} ml="6">
              sair
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpenn}
        onClose={onClose}
        motionPreset={"fade"}
      >
        <AlertDialog.Content>
          <AlertDialog.Header fontSize="lg" fontWeight="bold">
            Bilhete de Identidade
          </AlertDialog.Header>
          <AlertDialog.Body>
            <FormControl mb="5">
              <Select
                // selectedValue={service}
                variant="filled"
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Localização"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: (
                    <FontAwesome5 name="check" color="#f2aa00" size={30} />
                  ),
                }}
                mt={1}
                // onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="Nosso Centro" value="ux" />
                <Select.Item label="Kilamba" value="ux" />
                <Select.Item label="Talatona" value="web" />
                <Select.Item label="Nova Vida" value="cross" />
                <Select.Item label="Belas" value="ui" />
                <Select.Item label="Mainga" value="ui" />
                <Select.Item label="Viana" value="ui" />
                <Select.Item label="Kilamba Kiaxi" value="ui" />
                <Select.Item label="Mutamba" value="ui" />

                <Select.Item label="Ilha" value="ui" />
              </Select>
            </FormControl>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button colorScheme="green" onPress={onRefresh} ml="6">
              Guardar
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </ScrollView>
  );
};

export default EntregaScreen;
