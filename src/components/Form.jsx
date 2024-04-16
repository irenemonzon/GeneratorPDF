import  { useState } from 'react';

const Form = ({ onSubmit, selectError }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [nameError, setNameError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setNameError('Please enter your name');
      return;
    }
    setNameError('');
    onSubmit({ name, course });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        {nameError && <p className="text-red-500 text-xs italic">{nameError}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
          Course
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="course"
          value={course}
          onChange={handleCourseChange}
        >
          <option value="">Select a course</option>
          <option value="B.tech">B.tech</option>
          <option value="M.tech">M.tech</option>
        </select>
        {selectError && <p className="text-red-500 text-xs italic">{selectError}</p>}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Generate PDF
      </button>
    </form>
  );
};

export default Form;
