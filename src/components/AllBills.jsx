import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

const AllBills = () => {
  const [bills, setBills] = useState([]);
  const [filteredBills, setFilteredBills] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const q = query(collection(db, 'bills'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBills(data);
        setFilteredBills(data);
      } catch (err) {
        console.error('Error fetching bills:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  // 🔍 Search filter
  useEffect(() => {
    const lower = search.toLowerCase();
    const filtered = bills.filter(b =>
      b.customer?.name?.toLowerCase().includes(lower) ||
      b.customer?.phone?.toLowerCase().includes(lower)
    );
    setFilteredBills(filtered);
  }, [search, bills]);

  // 🖨 Print single bill
  const handlePrint = (bill) => {
    const customerTable = `
      <table style="width:100%; margin-top: 10px; font-size:14px;">
        <tr>
          <td><strong>ग्राहकाचे नाव:</strong> ${bill.customer.name}</td>
          <td><strong>फोन नंबर:</strong> ${bill.customer.phone}</td>
        </tr>
        <tr>
          <td><strong>पत्ता:</strong> ${bill.customer.address}</td>
          <td><strong>कार्यक्रमाची तारीख:</strong> ${bill.customer.eventDate}</td>
        </tr>
      </table>
    `;

    const itemRows = bill.items
      .map((item, i) => `
        <tr>
          <td style="border:1px solid #000; padding:5px; text-align:center;">${i + 1}</td>
          <td style="border:1px solid #000; padding:5px;">${item.name}</td>
          <td style="border:1px solid #000; padding:5px; text-align:center;">${item.qty}</td>
          <td style="border:1px solid #000; padding:5px; text-align:center;">₹${item.rate}</td>
          <td style="border:1px solid #000; padding:5px; text-align:right;">₹${item.qty * item.rate}</td>
        </tr>
      `)
      .join('');

    const billHtml = `
      <html>
        <head>
          <title>शिवप्रसाद मंडप डेकोरेशन</title>
          <style>
            body { font-family: 'Baloo 2', sans-serif; padding: 20px; }
            .subtitle { text-align: center; font-weight: bold; font-size: 18px; margin-bottom: 4px; }
            .subtitle1 { text-align: center; font-size: 14px; margin-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            th, td { border: 1px solid #000; padding: 6px; font-size: 13px; }
          </style>
        </head>
        <body>
          <div class="subtitle">शिवप्रसाद मंडप डेकोरेशन अँड डिजिटल साऊंड सिस्टिम</div>
          <div class="subtitle1">
            भांडी भांडार व विजय फोटोज अँड व्हिडिओ, शहरटाकळी (गणेश नगर), ता. शेवगाव, जि. अ. नगर<br>
            प्रो. प्रा. नवले पा. ९८२२७८४२६३ | सुशिल (सोनू) नवले ९१७२२३४८२६
          </div>

          ${customerTable}

          <table>
            <thead>
              <tr>
                <th>अ.नं</th>
                <th>तपशील</th>
                <th>संख्या</th>
                <th>दर</th>
                <th>रक्कम</th>
              </tr>
            </thead>
            <tbody>
              ${itemRows}
              <tr style="background: #fef08a;">
                <td colspan="4" style="text-align:right;"><strong>एकूण:</strong></td>
                <td style="text-align:right;">₹${bill.total}</td>
              </tr>
              <tr>
                <td colspan="4" style="text-align:right;">अडव्हान्स:</td>
                <td style="text-align:right;">₹${bill.customer.advance || 0}</td>
              </tr>
              <tr style="background: #fca5a5;">
                <td colspan="4" style="text-align:right;"><strong>शिल्लक:</strong></td>
                <td style="text-align:right;">₹${bill.balance}</td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `;

    const win = window.open('', '', 'width=800,height=600');
    win.document.write(billHtml);
    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600 text-center mb-6">📋 Admin Dashboard</h1>

      {/* 🔍 Search */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="नाव किंवा फोन नंबर शोधा..."
          className="border px-4 py-2 w-full max-w-md rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-center">लोडिंग...</p>
      ) : filteredBills.length === 0 ? (
        <p className="text-center text-gray-500">कोणतेही बिल सापडले नाही.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-pink-100 text-pink-800">
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">नाव</th>
                <th className="border p-2">फोन</th>
                <th className="border p-2">तारीख</th>
                <th className="border p-2">एकूण</th>
                <th className="border p-2">शिल्लक</th>
                <th className="border p-2">प्रिंट</th>
              </tr>
            </thead>
            <tbody>
              {filteredBills.map((bill, idx) => (
                <tr key={bill.id} className="hover:bg-yellow-50">
                  <td className="border p-1 text-center">{idx + 1}</td>
                  <td className="border p-1">{bill.customer?.name}</td>
                  <td className="border p-1">{bill.customer?.phone}</td>
                  <td className="border p-1">{bill.customer?.eventDate}</td>
                  <td className="border p-1 text-right">₹{bill.total}</td>
                  <td className="border p-1 text-right">₹{bill.balance}</td>
                  <td className="border p-1 text-center">
                    <button
                      onClick={() => handlePrint(bill)}
                      className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded"
                    >
                      प्रिंट
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBills;
