const url = 'https://task-hrzenbittech-server.herokuapp.com/api/contacts';

export const fetchForm = async userData => {
  console.log(userData);
  const response = await fetch(url, {
    method: 'POST',
    // mode: 'cors',
    // cache: 'no-cache',
    // credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    // referrerPolicy: 'no-referrer',
    body: JSON.stringify(userData), // body data type must match "Content-Type" header
  });
  return response.json();
};
