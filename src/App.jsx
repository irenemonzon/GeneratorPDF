import { useState } from 'react';
import Form from './components/Form';
import PdfGenerator from './components/PdfGenerator';
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {
  const [pdfData, setPdfData] = useState(null);
  const [selectError, setSelectError] = useState('');

  const handleFormSubmit = ({ name, course }) => {
    if (!course) {
      setSelectError('Please select a course');
      return;
    }
    setSelectError('');
    const pdfContent = <PdfGenerator name={name} course={course} />;
    setPdfData(pdfContent);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">PDF Generator</h1>
      <div className="mb-8 ml-4">
        <Form onSubmit={handleFormSubmit} selectError={selectError} />
      </div>
      <div >
        {pdfData && (
          <PDFDownloadLink document={pdfData} fileName="generated_pdf.pdf">
            {({ loading }) => (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
                type="button"
              >
                {loading ? 'Generating PDF...' : 'Download PDF'}
              </button>
            )}
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
}

export default App;
