import axios from 'axios';

export default async function handler(req, res) {
  // Handle early return if method is not POST
  if (req.method !== 'POST') {
    res.status(405).send({
      message: 'Only POST requests are allowed',
    });
  
    return;
  }

  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}listings`;

  // Deconstruct data from the request body
  const { data } = req.body;

  // Store the new listing object payload
  const newListingPayload = {
    contactName:data.contactName,
    email: data.email,
    name: data.name,
    website: data.website,
    description: data.description
  }

  try {
    // Send the new listing object payload to the Strapi API
    const response = await axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      url: baseUrl,
      data: JSON.stringify({
        data: newListingPayload,
      })
    });

    res.status(response.status).json(response.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
}