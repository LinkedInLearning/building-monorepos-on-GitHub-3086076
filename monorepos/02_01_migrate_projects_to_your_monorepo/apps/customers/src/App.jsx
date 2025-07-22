import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const customers = [
    { name: "Customer 1", state: "CA", rating: 4 },
    { name: "Customer 2", state: "NY", rating: 5 },
    { name: "Customer 3", state: "TX", rating: 3 },
    { name: "Customer 4", state: "FL", rating: 2 },
    { name: "Customer 5", state: "WA", rating: 5 },
  ];

  return (
    <>
      <div className="App container" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item active"><h2>My customers</h2></li>
                  {customers.map((customer, idx) => (
                    <li className="list-group-item" key={idx}>
                      <div className="input-group   align-items-center">
                        <div className="input-group-text">
                          <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                        </div>
                        {/* Replace the input with a span for the customer name */}
                        <span
                          className="form-control text-start mx-2"
                          style={{ background: 'transparent', border: 'none', paddingLeft: 0 }}
                        >
                          {customer.name}
                        </span>
                        <span style={{ marginLeft: '10px', whiteSpace: 'nowrap', fontSize: '0.95em', color: '#555' }}>
                          State: {customer.state} | Rating: {'★'.repeat(customer.rating)}{'☆'.repeat(5 - customer.rating)}
                        </span>
                        <span style={{ marginLeft: '10px' }}>
                          <i className="bi bi-person"></i>
                          <i className="bi bi-telephone"></i>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
