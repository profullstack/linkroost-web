import env from "runtime-compat/env";
import {primary} from "@primate/types";

export const actions = (db, store) => {
  return {
    async me() {
      const me = await db.info();
      delete me.password;
      console.log('me: ', me.email);
      return me;
    },
    async generateEmailVerifyCode(id) {
      const code = Math.random().toString(36).substr(2, 10);
      const expiration = new Date(Date.now() + 2 * (60 * 60 * 1000));

      const result = (
        await db.query("UPDATE $id SET verify.email.code = $code, verify.email.status = 'pending', verify.email.expiration = $expiration", {
          id,
          code,
          expiration
        })
      ).pop()
        .result
        .pop();

      console.log('user: ', result);
      return result;
    },
    async generatePhoneVerifyCode(id) {
      const code = Math.random().toString().substr(2, 6);
      const expiration = new Date(Date.now() + 2 * (60 * 60 * 1000));

      const result = (
        await db.query("UPDATE $id SET verify.phone.code = $code, verify.phone.status = 'pending', verify.phone.expiration = $expiration", {
          id,
          code,
          expiration
        })
      ).pop()
        .result
        .pop();

      console.log('user: ', result);
      return result;
    },
    async create(user) {
      let {email, username, password, password2} = user;
      const {DB_USER, DB_PASS, DB_NS, DB_DB} = env;

      if (password !== password2) {
        throw new Error("Passwords do not match");
      }

      username = username.replace(/[^a-zA-Z0-9]+/gu, "");
      console.log(user);

      const token = await db.signup({
        NS: DB_NS,
        DB: DB_DB,
        SC: "allusers",
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      console.log("token: ", token);
      return token;
    },
  };
};

export default {
  id: primary,
};
