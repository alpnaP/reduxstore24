export const PURCHASE = "PURCHASE";
export const DELETE = "DELETE";
export const LOGIN = "LOGIN";

export const validateUser = (loginDetail) => {
  setTimeout(() => {
    dispatchEvent({ type: LOGIN, loginDetail: loginDetail }, 2000);
  });
};
