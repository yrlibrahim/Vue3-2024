import axios from "axios";
import { reactive } from "vue";
import { useToast } from "vue-toast-notification";

const getUsers = () => {
  const $toast = useToast();

  const data = reactive({
    users: [],
  });

  const loadUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      data.users = response.data;
    } catch (error) {
      $toast.error("Birşeyler ters gitti!");
    }
  };
  return { loadUser, data };
};
export default getUsers;
