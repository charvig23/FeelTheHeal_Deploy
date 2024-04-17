import React, { useState, useEffect} from 'react';
import './DonationForm.css';
import Header from '../Header/Header.js';
import { useNavigate, Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function DonationForm() {
  const [description, setDescription] = useState('');
  const [documents, setDocuments] = useState(null);
  const [location, setLocation] = useState('');
  const [compensationAmount, setCompensationAmount] = useState('');
  const [consent, setConsent] = useState(false);
  const [lossImages, setLossImages] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [disasterType, setDisasterType] = useState('');
  const [dateOfDisaster, setDateOfDisaster] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');
  const [otherDisaster, setOtherDisaster] = useState('');
  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountNumber: '',
    accountHolderName: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    // Retrieve the selected file(s)
    const fileList = e.target.files;
    // If multiple files can be uploaded, you can convert the FileList to an array
    // const fileListArray = Array.from(fileList);
    setDocuments(fileList);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., API call)
    // const formData = new FormData();

    // // Append form data including files
    // formData.append('contactDetails', JSON.stringify({
    //     name: fullName,
    //     email: email,
    //     phone: phoneNumber,
    //     address: address
    // }));
    // formData.append('dateOfBirth', dateOfBirth);
    // formData.append('detailsOfLoss', description);
    // formData.append('file', lossImages);
    // formData.append('location', location);
    // formData.append('compensationAmount', compensationAmount);
    // formData.append('bankDetails', JSON.stringify({
    //     bankName: bankDetails.bankName,
    //     accountNumber: bankDetails.accountNumber,
    //     accountHolderName: bankDetails.accountHolderName
    // }));
    // formData.append('typeOfDisaster', disasterType);
    // formData.append('dateOfDisaster', dateOfDisaster);
    // formData.append('checkBox', consent);

    // try {
    //     const response = await axios.post("http://localhost:4000/api/submit/application", formData, {
    //         withCredentials: true,
    //         headers: {
    //             'content-Type': 'multipart/form-data', // Set the Content-Type header
    //         }
    //     });
    //     console.log(response);
    //     if (response.data.msg === "Application submitted successfully") {
    //         toast.success("Application submitted successfully");
    //         navigate('/home'); 
    //     } else {
    //         toast.error("Failed to submit the application" + response.data.msg);
    //     }
    // } catch (error) {
    //     setError(error.response.data.error);
    // } 
  };
  const handleLossImageChange = (e) => {
    const fileList = e.target.files[0];
    setLossImages(fileList);
  };
  const handleCompensationAmountChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    setCompensationAmount(value);
  };
  const handleBankDetailsChange = (e) => {
    const { name, value } = e.target;
    setBankDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  return (
    <>
    <Header/>
    <div className='Form-Body'>
    <div className='form-container'>
      <h2>Apply for Donation</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description of Loss/Disaster:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location of Incident:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="disasterType">Type of Disaster:</label>
          <select
            id="disasterType"
            value={disasterType}
            onChange={(e) => setDisasterType(e.target.value)}
            required
          >
            <option value="">Select Disaster Type</option>
            <option value="earthquake">Earthquake</option>
            <option value="flood">Flood</option>
            <option value="hurricane">Hurricane</option>
            <option value="wildfire">Wildfire</option>
            <option value="tornado">Tornado</option> 
            <option value="tsunami">Tsunami</option>
            <option value="pandemic">Pandemic</option>
            <option value="drought">Drought</option>
            <option value="volcano">Volcano Eruption</option>
            <option value="other">Other</option>
          </select>
          {disasterType === 'other' && (
            <div>
              <label htmlFor="otherDisaster">Specify Other Disaster:</label>
              <input
                type="text"
                id="otherDisaster"
                value={otherDisaster}
                onChange={(e) => setOtherDisaster(e.target.value)}
                required
              />
            </div>
          )}
        </div>
        <div>
          <label htmlFor="dateOfDisaster">Date of Disaster:</label>
          <input
            type="date"
            id="dateOfDisaster"
            value={dateOfDisaster}
            onChange={(e) => setDateOfDisaster(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lossImages">Upload Images related to Loss (optional):</label>
          <input
            type="file"
            id="lossImages"
            onChange={handleLossImageChange}
            multiple
          />
        </div>
        <div>
          <label htmlFor="documents">Upload Documents or Proofs:</label>
          <input
            type="file"
            id="documents"
            onChange={handleFileChange}
            multiple // if you want to allow multiple files to be selected
          />
        </div>
        
        <div>
          <label htmlFor="compensationAmount">Compensation Amount Requested in Rupees:</label>
          <input
            type="text"
            id="compensationAmount"
            value={compensationAmount}
            onChange={handleCompensationAmountChange}
            required
          />
        </div>
      
        <div>
            <label htmlFor="bankName">Bank Name:</label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              value={bankDetails.bankName}
              onChange={handleBankDetailsChange}
              required
            />
          </div>
          <div>
            <label htmlFor="accountNumber">Account Number:</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={bankDetails.accountNumber}
              onChange={handleBankDetailsChange}
              required
            />
          </div>
          <div>
            <label htmlFor="accountHolderName">Account Holder Name:</label>
            <input
              type="text"
              id="accountHolderName"
              name="accountHolderName"
              value={bankDetails.accountHolderName}
              onChange={handleBankDetailsChange}
              required
            />
          </div>
        <div>
          <label htmlFor="additionalComments">Additional Comments:</label>
          <textarea
            id="additionalComments"
            value={additionalComments}
            onChange={(e) => setAdditionalComments(e.target.value)}
          />
        </div>
        <div className="consent-container">
  <input
    type="checkbox"
    id="consent"
    checked={consent}
    onChange={(e) => setConsent(e.target.checked)}
  />
  <label htmlFor="consent">
    I consent to publicly share photos related to my loss.
  </label>
</div>

        <button type="submit">Submit Application</button>
      </form>
    </div>
    </div>
    
    </>
  );
}

export default DonationForm;

