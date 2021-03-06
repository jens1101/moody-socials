import { API_BASE_URL } from "./constants";

// TODO: remove this once we have actual calls to the backend
async function simulateLag(min = 400, max = 1500) {
  await new Promise((resolve) =>
    setTimeout(resolve, min + Math.random() * (max - min))
  );
}

export async function getSocialFeed(mood = null) {
  const url = new URL("/timelineTweets", API_BASE_URL);

  if (mood) {
    url.searchParams.set("mood", mood);
  }

  const res = await window.fetch(url.toString());
  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.error || "An error occurred while getting social feed"
    );
  }

  return data;
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

export async function register({ username, password }) {
  await simulateLag();

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

export async function login({ username, password }) {
  await simulateLag();

  if (username.toLowerCase() === "guest") {
    return register({ username });
  }

  throw new Error(`Account for "${username}" does not exist`);
}

export async function logout() {
  await simulateLag();

  localStorage.clear();
}

export async function changePassword({ oldPassword, newPassword }) {
  await simulateLag();
}

export async function deleteAccount(username) {
  await simulateLag();

  const userData = getStoredUserData();

  if (userData.username !== username) {
    throw new Error("Could not delete account");
  }

  localStorage.clear();
}
