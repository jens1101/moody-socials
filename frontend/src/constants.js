export const API_BASE_URL = process.env.REACT_APP_API_ENDPOINT;

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  LOGIN: "/login",
  LOGOUT: "/logout",
  REGISTER: "/register",
  ACCOUNT: "/account",
  MANAGE_SOCIAL_PROFILES: "/manage-social-profiles",
  CHANGE_PASSWORD: "/edit-password",
};

export const MOODS = [
  {
    displayName: "Positive",
    value: "positive",
  },
  {
    displayName: "Neutral",
    value: "neutral",
  },
  {
    displayName: "Negative",
    value: "negative",
  },
];
