import {
  VStack,
  Input,
  Button,
  IconButton,
  Pressable,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  HStack,
  Flex,
  Box,
  Divider,
  Heading,
  Spacer,
  Badge,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Ionic from "react-native-vector-icons/Ionicons";
import { View } from "react-native";

const SaldoScreen = () => {
  return (
    <View>
      <HStack mt="5" space={1} justifyContent="center">
        <Box
          maxW="96"
          borderWidth="1"
          borderColor="coolGray.300"
          shadow="3"
          bg="coolGray.100"
          p="5"
          rounded="8"
        >
          <HStack alignItems="center">
            <Badge
              bg="#f2aa00"
              _text={{
                color: "white",
              }}
              variant="solid"
              rounded="4"
            >
              Saldo Disponivel
            </Badge>
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="60px">
            2.000,00 KZ
          </Text>
        </Box>
      </HStack>
      <HStack mt="20" space={6} justifyContent="center">
        <Center h="20" w="20" bg="coolGray.700" rounded="md" shadow={3}>
          <FontAwesome5 name="money-check" color="#f2aa00" size={30} />

          <Text color="white" bold>
            Carregar
          </Text>
        </Center>

        <Center h="20" w="20" bg="coolGray.700" rounded="md" shadow={3}>
          {" "}
          <FontAwesome5 name="bolt" color="#f2aa00" size={30} />
          <Text color="white" bold>
            Bonus
          </Text>{" "}
        </Center>
        <Center h="20" w="20" bg="coolGray.700" rounded="md" shadow={3}>
          {" "}
          <FontAwesome5 name="scroll" color="#f2aa00" size={30} />
          <Text color="white" bold>
            Recibos
          </Text>{" "}
        </Center>
      </HStack>
    </View>
  );
};

export default SaldoScreen;
