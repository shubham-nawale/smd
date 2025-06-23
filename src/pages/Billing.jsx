import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const defaultItems = [
  { id: 1, name: 'मंडप साईज', qty: 0, rate: 0 },
  { id: 2, name: 'मोठी कढाई', qty: 0, rate: 100 },
  { id: 3, name: 'मध्यम कढाई', qty: 0, rate: 75 },
  { id: 4, name: 'पातीले 70 नंबर', qty: 0, rate: 300 },
  { id: 5, name: 'पातिले 68 नंबर', qty: 0, rate: 250 },
  { id: 6, name: 'पातीले मिडीयम', qty: 0, rate: 150 },
  { id: 7, name: 'ट्रे', qty: 0, rate: 30 },
  { id: 8, name: 'कौचा', qty: 0, rate: 15 },
  { id: 9, name: 'थाळी', qty: 0, rate: 10 },
  { id: 10, name: 'बादली', qty: 0, rate: 15 },
  { id: 11, name: 'घमेले', qty: 0, rate: 15 },
  { id: 12, name: 'पाणी टाकी', qty: 0, rate: 30 },
  { id: 13, name: 'वरगाळे', qty: 0, rate: 10 },
  { id: 14, name: 'भातवाडी', qty: 0, rate: 10 },
  { id: 15, name: 'गॅस शेगडी(सिंगल)', qty: 0, rate: 200 },
  { id: 16, name: 'गॅस शेगडी(डबल)', qty: 0, rate: 300 },
  { id: 17, name: 'चपाती भट्टी (डबल)', qty: 0, rate: 300 },  
  { id: 18, name: 'विळी', qty: 0, rate: 15 },
  { id: 19, name: 'बेलने पोळपाट', qty: 0, rate: 15 },
  { id: 20, name: 'दांडी पातीले', qty: 0, rate: 50 },
  { id: 21, name: 'खुर्ची', qty: 0, rate: 5 },
  { id: 22, name: 'गादी', qty: 0, rate: 100 },
  { id: 23, name: 'मॅट', qty: 0, rate: 50 },
  { id: 24, name: 'तवनी', qty: 0, rate: 100 },
];

const BillingPad = () => {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    eventDate: '',
    advance: 0,
  });

  const [items, setItems] = useState(defaultItems);

  const updateItem = (id, field, value) => {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, [field]: parseInt(value) || 0 } : item)
    );
  };

  const total = items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const balance = total - parseInt(customer.advance || 0);

  const handleSave = async () => {
    try {
      const docRef = await addDoc(collection(db, 'bills'), {
        customer,
        items: items.filter(item => item.qty > 0),
        total,
        balance,
        createdAt: Timestamp.now(),
      });

      console.log("✅ Bill saved with ID:", docRef.id);
      navigate(`/bill/${docRef.id}`);
    } catch (error) {
      console.error("❌ Error saving bill:", error);
      alert("बिल सेव्ह करण्यात अडचण आली. कृपया पुन्हा प्रयत्न करा.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-pink-600">
        शिवप्रसाद मंडप डेकोरेशन अँड डिजिटल साऊंड सिस्टिम <br />
        भांडी भांडार व विजय फोटोज अँड व्हिडिओ, शहरटाकळी (ता. शेवगाव, जि. अ. नगर)
      </h1>

      <div className="bg-white p-4 shadow rounded text-sm">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[
            { label: 'ग्राहकाचे नाव:', field: 'name' },
            { label: 'फोन नंबर:', field: 'phone' },
            { label: 'पत्ता:', field: 'address' },
            { label: 'कार्यक्रमाची तारीख:', field: 'eventDate' },
          ].map(({ label, field }) => (
            <div key={field}>
              <label>{label}</label>
              <input
                type={field === 'eventDate' ? 'date' : 'text'}
                className="w-full border p-1"
                value={customer[field]}
                onChange={e => setCustomer({ ...customer, [field]: e.target.value })}
              />
            </div>
          ))}
        </div>

        <table className="w-full text-sm border mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-1">अ.नं</th>
              <th className="border p-1">तपशील</th>
              <th className="border p-1">नग</th>
              <th className="border p-1">दर</th>
              <th className="border p-1">रक्कम</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={item.id}>
                <td className="border p-1 text-center">{idx + 1}</td>
                <td className="border p-1">{item.name}</td>
                <td className="border p-1 text-center">
                  <input
                    type="number"
                    className="w-16 border text-center"
                    value={item.qty}
                    onChange={e => updateItem(item.id, 'qty', e.target.value)}
                  />
                </td>
                <td className="border p-1 text-center">
                  <input
                    type="number"
                    className="w-20 border text-center"
                    value={item.rate}
                    onChange={e => updateItem(item.id, 'rate', e.target.value)}
                  />
                </td>
                <td className="border p-1 text-right">₹{item.qty * item.rate}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-yellow-100 font-semibold">
              <td colSpan="4" className="border p-1 text-right">एकूण:</td>
              <td className="border p-1 text-right">₹{total}</td>
            </tr>
          </tfoot>
        </table>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>अडव्हान्स:</label>
            <input
              type="number"
              className="w-full border p-1"
              value={customer.advance}
              onChange={e => setCustomer({ ...customer, advance: e.target.value })}
            />
          </div>
          <div className="text-right mt-6 font-bold">
            बाकी: ₹{balance}
          </div>
        </div>
      </div>

      <div className="text-center mt-6 print:hidden">
        <button
          onClick={handleSave}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded"
        >
          सेव्ह करा आणि बघा
        </button>
      </div>
    </div>
  );
};

export default BillingPad;
