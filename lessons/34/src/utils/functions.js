const isLogin = (value) => {
  return value;
};

const isLogin2 = (username, password) => {
  const listaUsers = JSON.parse(localStorage.getItem("user"));
  const respuesta = listaUsers.find(
    (user) => user.username === username && user.password === password
  );
  return respuesta ? true : false;
};

const loadMockData = () => {
  const users = JSON.stringify([
    {
      username: "Alejo",
      password: "12345678",
    },
    {
      username: "Martin",
      password: "12345678",
    },
  ]);
  localStorage.setItem("user", users);
};

export { isLogin, loadMockData, isLogin2 };
