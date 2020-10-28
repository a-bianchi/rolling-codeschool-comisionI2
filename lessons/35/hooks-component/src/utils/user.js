exports.setUsersInLocalStorage = (values) => {
  const users = JSON.parse(localStorage.getItem("user"));
  const newUsers = [users, ...values];
  localStorage.setItem("user", JSON.stringify(newUsers));
};
