import React, { useRef, useState } from 'react';

const PrintWrapper = ({ children, title = 'बिल प्रिंट' }) => {
  const printRef = useRef();
  const [printMode, setPrintMode] = useState(false);

  const handlePrint = () => {
    setPrintMode(true);

    setTimeout(() => {
      const printContents = printRef.current.innerHTML;
      const printWindow = window.open('', '', 'width=800,height=600');
      printWindow.document.write(`
        <html>
          <head>
            <title>${title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap" rel="stylesheet">
            <style>
              body {
                font-family: 'Baloo 2', 'Noto Sans Devanagari', sans-serif;
                padding: 20px;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
              }
              th, td {
                border: 1px solid black;
                padding: 6px;
                text-align: left;
              }
              .text-right {
                text-align: right;
              }
            </style>
          </head>
          <body>${printContents}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
      setPrintMode(false);
    }, 100);
  };

  return (
    <div>
      <div ref={printRef}>
        {children(printMode)}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handlePrint}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
        >
          प्रिंट करा
        </button>
      </div>
    </div>
  );
};

export default PrintWrapper;
