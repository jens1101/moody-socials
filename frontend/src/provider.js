export function register({ username, password }) {
  if (username === "error") {
    throw new Error("That username is hard-coded to trigger an error");
  }

  const userData = {
    username,
  };

  localStorage.clear();
  localStorage.setItem("userData", JSON.stringify(userData));

  return userData;
}

export function getStoredUserData() {
  // TODO: flesh this out more, like by extending a template object
  try {
    return JSON.parse(localStorage.getItem("userData"));
  } catch (e) {
    return null;
  }
}

export function logout() {
  localStorage.clear();
}