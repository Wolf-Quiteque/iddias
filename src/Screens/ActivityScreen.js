import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Input,
  Icon,
  Spacer,
  FormControl,
  Select,
  Badge,
  Center,
  NativeBaseProvider,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View, ScrollView } from "react-native";

const ActivityScreen = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Almeida Cândido",
      timeStamp: (
        <Badge bg="green.600">
          <Text color="white">Pronto</Text>
        </Badge>
      ),
      recentText: "Passaporte",
      avatarUrl:
        "https://cdn.icon-icons.com/icons2/1581/PNG/512/3668844-clock-pending-transaction-wait_108015.png",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Amâncio Mathur",
      timeStamp: (
        <Badge bg="yellow.400">
          <Text color="white">Pendente</Text>
        </Badge>
      ),
      recentText: "BI",
      avatarUrl:
        "https://cdn.icon-icons.com/icons2/1581/PNG/512/3668844-clock-pending-transaction-wait_108015.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Nataniel Fernandos",
      timeStamp: (
        <Badge bg="yellow.400">
          <Text color="white">Pendente</Text>
        </Badge>
      ),
      recentText: "Livrete",
      avatarUrl:
        "https://cdn.icon-icons.com/icons2/1581/PNG/512/3668844-clock-pending-transaction-wait_108015.png",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: (
        <Badge bg="green.600">
          <Text color="white"> Pronto</Text>
        </Badge>
      ),
      recentText: "BI",
      avatarUrl:
        "https://cdn.icon-icons.com/icons2/1581/PNG/512/3668844-clock-pending-transaction-wait_108015.png",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Márcio Quiteque",
      timeStamp: (
        <Badge bg="yellow.400">
          <Text color="white">Pendente</Text>
        </Badge>
      ),
      recentText: "Passaporte",
      avatarUrl:
        "https://cdn.icon-icons.com/icons2/1581/PNG/512/3668844-clock-pending-transaction-wait_108015.png",
    },
  ];

  return (
    <ScrollView>
      <VStack mt="5" w="95%" space={5} alignSelf="center">
        <Input
          placeholder="Pesquisa"
          variant="filled"
          width="100%"
          borderRadius="10"
          py="1"
          px="2"
          borderWidth="0"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
        <FormControl mb="2">
          <Select
            variant="filled"
            // selectedValue={service}
            minWidth="200"
            accessibilityLabel="Estado"
            placeholder="Seleciona o Estado"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <FontAwesome5 name="check" color="#f2aa00" size={30} />,
            }}
            mt={1}
            // onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Pendente" value="ux" />
            <Select.Item label="Pronto" value="web" />
            <Select.Item label="Entregue" value="cross" />
          </Select>
        </FormControl>
      </VStack>
      <Box mt="5">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <VStack>
                  <Text color="user" bold>
                    {item.fullName}
                  </Text>
                  <Text color="user">{item.recentText}</Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </ScrollView>
  );
};
export default ActivityScreen;
