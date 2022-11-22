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
  FormControl,
  AlertDialog,
  Spinner,
  Divider,
  Heading,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { View, ScrollView } from "react-native";

const AddScreen = ({ navigation }) => {
  const [bi, setbi] = useState();
  const [doc, setdoc] = useState();

  const [loading, setloading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [docresul, setdocresul] = useState(null);
  const onClose = () => {
    setIsOpen(false);
    setdoc(null);
    setbi(null);
  };
  const handleChange = (text) => setbi(text);
  const cancelRef = useRef();

  const VerEstado = async () => {
    setloading(true);
    const res = await axios.get("docs/" + bi);
    setloading(false);

    if (res.data == null) {
      setdocresul("Nenhum Registro enconrado");
    } else {
      setdoc(res.data);
      if (res.data.tratado == "true") {
        setdocresul("Documento Pronto!");
      } else {
        setdocresul("Documento Pendente.");
      }
    }
    setIsOpen(true);
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
          <FormControl mb="5">
            <Text color="user" bold mb="2">
              Nº BI
            </Text>
            <Input
              variant="filled"
              value={bi}
              placeholder="Digite o Numero do BI"
              onChangeText={handleChange}
            />
          </FormControl>
          <FormControl mb="5">
            <Text color="user" bold mb="2">
              Documento
            </Text>
            <Select
              variant="filled"
              // selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Seleciona o Documento"
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
          <Divider />
        </Box>
      </Stack>

      <HStack mt="7" space={1} justifyContent="center">
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
                name="fingerprint"
                mt="10"
                color="#f2aa00"
                size={30}
              />
              <Text color="white" bold>
                Ver Estado
              </Text>{" "}
              {/* <Spinner color="warning.500" /> */}
            </Center>
          </Button>
        )}
      </HStack>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset={"fade"}
      >
        <AlertDialog.Content>
          <AlertDialog.Header fontSize="lg" fontWeight="bold">
            {doc && doc.nome}
          </AlertDialog.Header>
          <AlertDialog.Body>{docresul && docresul}</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button colorScheme="green" onPress={onClose} ml="6">
              sair
            </Button>

            {doc && doc.tratado == "true" && (
              <Button
                colorScheme="warning"
                onPress={() => {
                  navigation.navigate("Serviços de Entrega");
                  onClose();
                }}
                ml="3"
              >
                Entrega ao Domicílio
              </Button>
            )}
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </ScrollView>
  );
};

export default AddScreen;
