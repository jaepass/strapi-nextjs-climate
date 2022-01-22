import { useState, useRef } from 'react';

const SubmitListingForm = () => {
  const contactNameEl = useRef(null);
  const emailEl = useRef(null);
  const nameEl = useRef(null);
  const websiteEl = useRef(null);
  const descriptionEl = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  /**
   * @returns {Promise} - A promise that resolves to the response body
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        contactName: contactNameEl.current.value,
        email: emailEl.current.value,
        name: nameEl.current.value,
        website: websiteEl.current.value,
        description: descriptionEl.current.value,
      };

      const response = await fetch('api/listings',
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Client side data', payload);

      if (!response.status >= 400) {
        return setMessage('There was a problem saving your submission');
      }

      console.log('response successful client side', response);
      setSubmitted(true);
      setMessage('Your submission was successful');
    } catch (error) {
      setMessage(error.message || error.toString());
    }
  }

  return (
    <div>
      <h1>Submit a new Listing</h1>
      <form onSubmit={handleSubmit}>
        <label>Contact name</label>
        <input
          type="text"
          placeholder="Enter your name"
          ref={contactNameEl}
          maxLength="74"
          disabled={submitted}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          ref={emailEl}
          maxLength="74"
          disabled={submitted}
        />
        <label>Initiative/organization name</label>
        <input
          type="text"
          placeholder="Enter the initiative name"
          ref={nameEl}
          maxLength="74"
          disabled={submitted}
        />
        <label>Initiative/organization website</label>
        <input
          type="text"
          placeholder="Enter the website"
          ref={websiteEl}
          maxLength="74"
          disabled={submitted}
        />
        <label>Initiative/organization description</label>
        <textarea
          type="text"
          placeholder="Enter a description"
          rows="8"
          ref={descriptionEl}
          disabled={submitted}
        />
        <button>Submit listing</button>
      </form>
      {submitted && <p>{message}</p>}
    </div>
  )
}

export default SubmitListingForm;