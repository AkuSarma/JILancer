
const Invoices = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Recent Invoices</h2>
      <div className="mt-4 space-y-3">
        <div className="flex justify-between">
          <span>Socrates Boniface</span>
          <span>₹7800</span>
          <span className="text-green-500">Paid</span>
        </div>
        <div className="flex justify-between">
          <span>Christian Yorick</span>
          <span>₹3940</span>
          <span className="text-green-500">Paid</span>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
