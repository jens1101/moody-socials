// TODO: make these functions async since that is what they will be once
//  properly implemented

export function register({ username, password }) {
  if (username.toLowerCase() === "error") {
    throw new Error("That username is hard-coded to trigger an error");
  }

  const userData = {
    username,
  };

  localStorage.clear();
  localStorage.setItem("userData", JSON.stringify(userData));

  return userData;
}

export function login({ username, password }) {
  if (username.toLowerCase() === "guest") {
    return register({ username });
  }

  const userData = getStoredUserData();

  if (userData?.username !== username) {
    throw new Error(`Account for "${username}" does not exist`);
  }

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
