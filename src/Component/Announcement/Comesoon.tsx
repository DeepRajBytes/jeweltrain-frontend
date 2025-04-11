import React, { useState } from 'react';

function CominSoon() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setShowThankYou(true);
        form.reset();
      } else {
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-indigo-200">
      <h1 className="text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        We are Coming Soon
      </h1>
      <p className="text-lg mb-6 text-gray-700">Fill details to stay connected and get updates</p>

      {showThankYou ? (
        <div className="text-center p-6 bg-white rounded-lg shadow-xl">
          <p className="text-2xl font-semibold mb-4">Thank you!</p>
          <p>We will get back to you soon.</p>
        </div>
      ) : (
        <form
          action="https://formspree.io/f/xovekjez"
          method="POST"
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 rounded-lg shadow-xl bg-opacity-70 bg-gradient-to-r from-purple-100 to-indigo-100"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-white bg-opacity-80"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-white bg-opacity-80"
          />
          <textarea
            name="about"
            placeholder="About Yourself"
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-white bg-opacity-80"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default CominSoon;