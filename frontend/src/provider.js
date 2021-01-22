// TODO: make these functions async since that is what they will be once
//  properly implemented

// TODO: add comments!

export async function register({ username, password }) {
  // Simulate server lag
  await new Promise((resolve) =>
    setTimeout(resolve, 400 + Math.random() * 700)
  );

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
  try {
    const userData = JSON.parse(localStorage.getItem("userData"));

    return {
      username: userData.username,
    };
  } catch (e) {
    return null;
  }
}

export function logout() {
  localStorage.clear();
}
