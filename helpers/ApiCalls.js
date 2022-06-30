const SERVICE_URL = process.env.NEXT_PUBLIC_API_HOST;
const API_URL = process.env.NEXT_PUBLIC_GATE_URL;
const CP_URL = process.env.NEXT_PUBLIC_CP_URL;

export const SendEmail = (formName, data) => {
  return fetch(`${SERVICE_URL}/api/common/form-submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formName, data }),
  });
};

export const LoginUser = async (params) => {
  try {
    const resp = await fetch(`${API_URL}/gate/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const content = await resp.json();
    return content;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const RegisterDemo = async (params) => {
  try {
    const resp = await fetch(`${API_URL}/gate/register-demo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const content = await resp.json();
    return content;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const RegisterLive = async (params) => {
  try {
    const resp = await fetch(
      `${API_URL}/gatehttps://portal.rightfx.com/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );
    const content = await resp.json();
    return content;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const RegisterIB = async (params) => {
  try {
    const resp = await fetch(`${API_URL}/gate/register-ib`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const content = await resp.json();
    return content;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const RemoteLogin = (token) => {
  window.location.replace(`${CP_URL}/Gate?token=${token}`);
};

export const locateMe = async () => {
  try {
    const resp = await fetch(`${API_URL}/auth/locate`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const content = await resp.json();
    return content;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCountries = async () => {
  try {
    const resp = await fetch(`${API_URL}/common/settings?data=countries`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const content = await resp.json();
    return content;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const isEmailAvailable = async (email) => {
  try {
    const resp = await fetch(`${API_URL}/customers/email-availability`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    const content = await resp.json();
    return content;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const isPhoneAvailable = async (email) => {
  try {
    const resp = await fetch(`${API_URL}/customers/phone-availability`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    const content = await resp.json();
    return content;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const generatePin = async (params) => {
  try {
    const resp = await fetch(`${API_URL}/customers/create-pin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const content = await resp.json();
    return content;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const verifyPin = async (params) => {
  try {
    const resp = await fetch(`${API_URL}/customers/verify-register-pin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const content = await resp.json();
    return content;
  } catch (error) {
    return Promise.reject(error);
  }
};
