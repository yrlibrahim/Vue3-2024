import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AUTH, DB } from "@/utils/firebase";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import router from "@/router";
import { useToast } from "vue-toast-notification";

const DEFAULT_USER = {
  uid: null,
  email: null,
  firstname: null,
  lastname: null,
  isAdmin: null,
};

export const useUserStore = defineStore("user", {
  state: () => ({
    loading: false,
    user: DEFAULT_USER,
    auth: false,
  }),
  getters: {},
  actions: {
    setUser(user) {
      this.user = { ...this.user, ...user };
      this.auth = true;
    },

    async getUserProfile(uid) {
      try {
        const userRef = await getDoc(doc(DB, "users", uid));
        return userRef.data();
      } catch (error) {}
    },
    async signIn(FormData) {
      const $toast = useToast();
      try {
        this.loading = true;
        const response = await signInWithEmailAndPassword(
          AUTH,
          FormData.email,
          FormData.password
        );
        console.log(response);

        const userData = await this.getUserProfile(response.user.uid);
        this.setUser(userData);

        router.push("/user/dashboard");
        $toast.success("Aramıza Hoşgeldiniz!");
      } catch (error) {
        $toast.error("Hata!");
      } finally {
        this.loading = false;
      }
    },

    async register(FormData) {
      const $toast = useToast();
      try {
        this.loading = true;
        const response = await createUserWithEmailAndPassword(
          AUTH,
          FormData.email,
          FormData.password
        );
        console.log(response);

        const newUser = {
          uid: response.user.uid,
          email: response.user.email,
          isAdmin: false,
        };
        await setDoc(doc(DB, "users", response.user.uid), newUser);
        this.setUser(newUser);
        router.push("/user/dashboard");
        $toast.success("Hoşgeldiniz!");
      } catch (error) {
        $toast.error("Hata!");
      } finally {
        this.loading = false;
      }
    },
  },
});
