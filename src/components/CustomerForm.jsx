import { useState } from 'react';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    coffeeType: 'espresso',
    time: ''
  });

  const coffeeTypes = [
    'espresso',
    'americano',
    'cappuccino',
    'latte',
    'mocha',
    'flat white'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      name: '',
      phone: '',
      coffeeType: 'espresso',
      time: ''
    });
  };

  return (
    <>
      <form className="customer-form" onSubmit={handleSubmit}>
        <h2>Place Your Order</h2>
      
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="coffeeType">Coffee Type:</label>
        <select
          id="coffeeType"
          name="coffeeType"
          value={formData.coffeeType}
          onChange={handleChange}
        >
          {coffeeTypes.map(type => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="time">Preferred Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="submit-btn">
          Submit Order
        </button>
        <button 
          type="button" 
          className="reset-btn"
          onClick={() => setFormData({
            name: '',
            phone: '',
            coffeeType: 'espresso',
            time: ''
          })}
        >
          Reset
        </button>
      </div>
      </form>

      {showModal && (
        <div className="order-modal">
        <div className="modal-content">
          <h2>Bienvenue :)</h2>
          <h4> Your Order Details: </h4>
          <div className="order-details">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Coffee:</strong> {formData.coffeeType.charAt(0).toUpperCase() + formData.coffeeType.slice(1)}</p>
            <p><strong>Time:</strong> {formData.time}</p>
          </div>
          <button className="modal-close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
      )}
    </>
  );
};

export default CustomerForm;
