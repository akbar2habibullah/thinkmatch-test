import Cookies from "universal-cookie";

export const auth = (data, callback) => {
  const { token } = data;
  const cookies = new Cookies();

  cookies.set("access-token", token, { path: "/", maxAge: 86400 });

  callback();
};

export const isAuth = () => {
  const cookies = new Cookies();
  const token = cookies.get("access-token");

  if (token) {
    return token;
  } else {
    return false;
  }
};
