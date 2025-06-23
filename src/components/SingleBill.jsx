import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const SingleBill = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);

  useEffect(() => {
    const fetchBill = async () => {
      const docRef = doc(db, 'bills', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBill(docSnap.data());
      } else {
        alert("Bill not found");
      }
    };

    fetchBill();
  }, [id]);

  if (!bill) return <p className="text-center mt-10">लोडिंग...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-pink-600 mb-4">बिल डिटेल्स</h1>

      <div className="mb-4 border p-4 rounded bg-white shadow">
        <p><strong>ग्राहकाचे नाव:</strong> {bill.customer.name}</p>
        <p><strong>फोन:</strong> {bill.customer.phone}</p>
        <p><strong>पत्ता:</strong> {bill.customer.address}</p>
        <p><strong>तारीख:</strong> {bill.customer.eventDate}</p>
      </div>

      <table className="w-full text-sm border mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-1">#</th>
            <th className="border p-1">तपशील</th>
            <th className="border p-1">नग</th>
            <th className="border p-1">दर</th>
            <th className="border p-1">एकूण</th>
          </tr>
        </thead>
        <tbody>
          {bill.items.map((item, idx) => (
            <tr key={idx}>
              <td className="border p-1 text-center">{idx + 1}</td>
              <td className="border p-1">{item.name}</td>
              <td className="border p-1 text-center">{item.qty}</td>
              <td className="border p-1 text-center">₹{item.rate}</td>
              <td className="border p-1 text-right">₹{item.qty * item.rate}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-yellow-100 font-semibold">
            <td colSpan="4" className="border p-1 text-right">एकूण:</td>
            <td className="border p-1 text-right">₹{bill.total}</td>
          </tr>
          <tr className="bg-yellow-50 font-semibold">
            <td colSpan="4" className="border p-1 text-right">अडव्हान्स:</td>
            <td className="border p-1 text-right">₹{bill.customer.advance}</td>
          </tr>
          <tr className="bg-green-100 font-semibold">
            <td colSpan="4" className="border p-1 text-right">बाकी:</td>
            <td className="border p-1 text-right">₹{bill.balance}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SingleBill;
