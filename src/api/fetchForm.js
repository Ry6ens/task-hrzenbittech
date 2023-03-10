const url = 'https://task-hrzenbittech-server.herokuapp.com/api/contacts';

export const fetchForm = async userData => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};
