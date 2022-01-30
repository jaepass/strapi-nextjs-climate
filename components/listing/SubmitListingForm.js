import { useState, useRef } from 'react';
import Cta from '../global/Cta';

const SubmitListingForm = () => {
  const contactNameEl = useRef(null);
  const emailEl = useRef(null);
  const nameEl = useRef(null);
  const websiteEl = useRef(null);
  const descriptionEl = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [serverErrors, setServerErrors] = useState([]);

  /**
   * Renders the button text based on the state of the form submission
   * 
   * @returns {string} - The button text
   */
  const renderButtonText = () => {
    if (loading) {
      return 'Submitting...';
    } else if (submitted) {
      return 'Submitted!'
    }
    return 'Submit';
  }

  /**
   * Handles the submission of the form to the Strapi API
   * 
   * @returns {Promise} - A promise that resolves to the response body
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const formPayload = {
      contactName: contactNameEl.current.value,
      email: emailEl.current.value,
      name: nameEl.current.value,
      website: websiteEl.current.value,
      description: descriptionEl.current.value
    };

    try {
      const response = await fetch('/api/submit-listing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: formPayload,
        })
      });

      console.log('Client response', response.json);
      setSubmitted(true);
      setLoading(false);
      setMessage('Thanks for submitting your listing!')
    } catch (error) {
      if (error.name === 'ValidationError' && typeof error?.details?.errors !== 'undefined') {
        const captureErrors = Object.values(error.details.errors).reduce((acc, value) => {
          value.map((captureError) => acc.push(captureError));
        })
        setServerErrors(captureErrors);
        return null;
      }

      setServerErrors([ 'An error occurred. Please try again later.' || error.message ]);
      setLoading(false);
      return null;
    }
    return null;
  }

  const renderErrors = () => {
    if (!Array.isArray(serverErrors) || !serverErrors.length) {
      return null;
    }
    return (
      <ul className="text-red-600">
      { serverErrors.map((error, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i}>{error}</li>
      ))}
    </ul>
    )
  }

  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      { !submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="overflow-hidden">
            <div className="py-5 md:py-8">
              <div className="grid grid-cols-6 gap-6">
                
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    ref={contactNameEl}
                    maxLength="74"
                    autoComplete="name"
                    disabled={loading || submitted}
                    name="name"
                    id="name"
                    required
                    className="mt-1 focus:outline-none focus:ring-2 focus:ring-green-default block w-full shadow-sm sm:text-sm rounded-md p-2 bg-gray-100 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none"
                  />
                  <p></p>
                </div>
  
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    ref={emailEl}
                    disabled={loading || submitted}
                    name="email"
                    id="email"
                    required
                    className="mt-1 focus:outline-none focus:ring-2 focus:ring-green-default block w-full shadow-sm sm:text-sm rounded-md p-2 bg-gray-100 isabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none"
                  />
                </div>
  
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="org-name" className="block text-sm font-bold text-gray-700">
                    Initiative name
                  </label>
                  <input
                    type="text"
                    name="org-name"
                    id="org-name"
                    autoComplete="organization"
                    placeholder="Enter the initiative/organization name"
                    ref={nameEl}
                    disabled={loading || submitted}
                    required
                    className="mt-1 focus:outline-none focus:ring-2 focus:ring-green-default block w-full shadow-sm sm:text-sm rounded-md p-2 bg-gray-100 isabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none"
                  />
                </div>
  
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="website" className="block text-sm font-bold text-gray-700">
                    Initiative website
                  </label>
                  <input
                    type="text"
                    placeholder="https://"
                    ref={websiteEl}
                    autoComplete="url"
                    maxLength="74"
                    disabled={loading || submitted}
                    name="website"
                    id="website"
                    required
                    className="mt-1 focus:outline-none focus:ring-2 focus:ring-green-default block w-full shadow-sm sm:text-sm rounded-md p-2 bg-gray-100 isabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none"
                  />
                </div>
  
                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="description" className="block text-sm font-bold text-gray-700">
                    Description
                  </label>
                  <textarea
                    type="text"
                    placeholder="Enter a description"
                    rows="8"
                    ref={descriptionEl}
                    disabled={loading || submitted}
                    name="description"
                    id="description"
                    required
                    className="mt-1 focus:outline-none focus:ring-2 focus:ring-green-default block w-full shadow-sm sm:text-sm rounded-md p-4 bg-gray-100 isabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none"
                  />
                </div>
              </div>
            </div>
  
            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                disabled={loading || submitted}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm tracking-wider font-medium rounded-md text-white bg-green-default hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-default disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none transition duration-150 ease-in-out"
              >
                { renderButtonText() }
              </button>
            </div>
          </div>
        </form>
      ) : (
        <section className="text-center p-6 md:py-20 lg:max-w-5xl mx-auto">
          <h3 className="pb-6">{ message }</h3>
          { renderErrors() }
          <Cta
            label="Submit another initiative"
            href="/submit"
            primary
          />
        </section>
      )}
    </div>
  )
}

export default SubmitListingForm;