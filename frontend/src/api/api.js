
let base_url = "http://0.0.0.0";

if(process.env.NODE_ENV === 'production'){
  base_url = "";
}

export const allocate = async (userInput) => {

  return fetch(base_url+'/allocate', {
    method: 'POST',

    body: JSON.stringify(userInput),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const login = async (email, password) => {

  return fetch(base_url+'/login', {
    method: 'POST',

    body: JSON.stringify({'email': email, 'password':password}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const signup = async (email, password, fn, ln) => {
  return fetch(base_url+'/signup', {
    method: 'POST',

    body: JSON.stringify({'email': email, 'password':password, 'fn': fn, 'ln': ln}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const logout = async () => {
  return fetch(base_url+'/logout', {method: 'GET'})
};

export const checksession = async () => {
  return fetch(base_url+'/checksession', {method: 'GET'})
};





