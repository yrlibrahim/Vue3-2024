import { reactive } from "vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";

const postUser = () => {
  const $toast = useToast();

  const user = reactive({
    name: "",
    lastname: "",
  });

  const submitForm = () => {
    axios({
      method: "POST",
      url: "http://localhost:3000/users",
      data: user,
    })
      .then(() => {
        $toast.success("Kullanıcı eklendi!");
      })
      .catch(() => {})
      .finally(() => {});
  };
  return { submitForm, user };
};

export default postUser;
