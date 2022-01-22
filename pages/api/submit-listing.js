import axios from 'axios';

const respond = (body, statusCode = 200) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

export default async function handler(req) {
  const { 
    contactName,
    email,
    name,
    website,
    description,
  } = req.body;

  try {
    const data = {
      contactName,
      email,
      name,
      website,
      description,
    }

    console.log('Server side data', data);

    const response = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/listings`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.status >= 400) {
      return respond({
        message: 'There was a problem saving your submission',
        error: await response.json(),
      }, 400);
    }

    console.log('Server side response success', response);

    return respond({
      message: 'Your submission was successful',
      error: '',
    }, 201);
  } catch (error) {
    return respond({
      message: error.message || error.toString(),
      error: error.message,
    }, 400);
  }
}