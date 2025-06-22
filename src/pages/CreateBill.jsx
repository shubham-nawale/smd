import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Billing = () => {
  const [customerName, setCustomerName] = useState('');
  const [mandapPrice, setMandapPrice] = useState('10000');
  const [lightsPrice, setLightsPrice] = useState('2000');
  const pdfRef = useRef();

  const total = parseInt(mandapPrice) + parseInt(lightsPrice);

  const handleGeneratePDF = () => {
    const element = pdfRef.current;
    html2pdf().from(element).set({
      margin: 10,
      filename: 'mandap-bill-marathi.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    }).save();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
        मंडप बिल तयार करा
      </h1>

      {/* Form */}
      <div className="max-w-lg bg-white mx-auto p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">ग्राहकाचे नाव:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="उदा. रामदास पाटील"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">मंडप दर (₹):</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded p-2"
            value={mandapPrice}
            onChange={(e) => setMandapPrice(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">लाईट्स दर (₹):</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded p-2"
            value={lightsPrice}
            onChange={(e) => setLightsPrice(e.target.value)}
          />
        </div>

        <button
          onClick={handleGeneratePDF}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded text-lg font-medium"
        >
          PDF डाउनलोड करा
        </button>
      </div>

      {/* Printable Hidden PDF Content */}
      <div className="hidden">
        <div ref={pdfRef} lang="mr" className="p-4 text-sm font-sans">
          <h2 className="text-center text-xl font-bold mb-4">मंडप डेकोरेशन बिल</h2>
          <p className="mb-4"><strong>ग्राहकाचे नाव:</strong> {customerName}</p>
          <table className="w-full border border-collapse text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">सेवा</th>
                <th className="border p-2">संख्या</th>
                <th className="border p-2">दर</th>
                <th className="border p-2">एकूण</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">मंडप सजावट</td>
                <td className="border p-2">1</td>
                <td className="border p-2">₹{mandapPrice}</td>
                <td className="border p-2">₹{mandapPrice}</td>
              </tr>
              <tr>
                <td className="border p-2">लाईट्स</td>
                <td className="border p-2">1</td>
                <td className="border p-2">₹{lightsPrice}</td>
                <td className="border p-2">₹{lightsPrice}</td>
              </tr>
              <tr className="font-bold">
                <td colSpan="3" className="border p-2">एकूण रक्कम</td>
                <td className="border p-2">₹{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;
