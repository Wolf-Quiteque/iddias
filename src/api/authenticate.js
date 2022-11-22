import axios from "axios";

export async function Register(user) {
  const response = await axios
    .post("http://localhost:4000/api/user/new", user)
    .then((response) => {
      return response.data;
    });

  if (response == "created successfully!") {
    return response.data;
  } else {
    return "houve um problema";
  }
}
