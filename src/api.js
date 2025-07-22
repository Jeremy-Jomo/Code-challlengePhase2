// src/api.js

const BASE_URL = 'http://localhost:3000/goals';
 function updateGoal(id, updatedData) {
  const response =  fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error('Failed to update goal');
  }

  return  response.json();
}
function createGoal(newGoal) {
  const response =  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newGoal),
  });

  if (!response.ok) {
    throw new Error('Failed to create goal');
  }

  return response.json();
}

export { updateGoal, createGoal };