import axios from 'axios';

export default async function handler(req, res) {
  // Handle early return if method is not POST
  if (req.method !== 'POST') {
    res.status(405).send({
      message: 'Only POST requests are allowed',
    });
  
    return;
  }

  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/listings`;

  // Parse the request body
  const body = JSON.parse(req.body);

  // Store the new listing object payload
  const newListingPayload = {
    contactName: body.data.contactName,
    email: body.data.email,
    name: body.data.name,
    website: body.data.website,
    description: body.data.description,
  }

  axios(baseUrl, {
    method: 'POST',
    body: JSON.stringify(newListingPayload),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    res.status(200).json({ response });
    res.end(JSON.stringify(response.data));
  })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
}