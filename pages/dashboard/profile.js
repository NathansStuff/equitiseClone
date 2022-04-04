import LoggedInNavbar from 'components/LoggedInNavbar';
import Sidebar from 'components/Sidebar';
import React, { useState } from 'react';
export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    sophisticatedInvestor: false,
    sophisticated1: false,
    sophisticated2: false,
    sophisticated3: false,
    provideLater: false,
  });
  const [checkedOne, setCheckedOne] = React.useState(false);
  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (profile[name] == false || profile[name] == true) {
      setProfile(prevState => ({
        ...prevState,
        [name]: !profile[name],
      }));
    } else {
      setProfile(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  function handleSubmit(event) {
    alert('An essay was submitted: ' + profile);
    event.preventDefault();
  }

  return (
    <div>
      <LoggedInNavbar />
      <div className='profilePageContent'>
        <Sidebar />
        <div className='profile-page-container'>
          <div>
            <h1>Basic Details</h1>
          </div>
          <div className='profile-container'>
            <form onSubmit={handleSubmit} className='profile-form'>
              <div className='profile-form-dets'>
                <div className='profile-label'>
                  <label>
                    <div>First Name</div>
                    <input
                      value={profile.firstName}
                      onChange={handleChange}
                      name='firstName'
                    />
                  </label>
                  <label>
                    <div>Last Name</div>
                    <input
                      value={profile.lastName}
                      name='lastName'
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className='profile-label'>
                  <label>
                    <div>Date of Birth</div>
                    <input
                      value={profile.dob}
                      name='dob'
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <div>Phone Number</div>
                    <input
                      value={profile.number}
                      name='number'
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className='profile-investor-status'>
                <h1>Investor Status</h1>
                <div className='profile-investor-flex'>
                  <label class='switch'>
                    <input
                      type='checkbox'
                      name='sophisticatedInvestor'
                      checked={profile.sophisticatedInvestor}
                      onChange={handleChange}
                    />
                    <div class='slider round' />
                  </label>

                  <div>
                    <p>
                      Are you an Accredited Sophisticated or Wholesale investor?
                    </p>
                  </div>
                </div>
                <div className='profile-investor-extra-hidden'>
                  <h1>What are your investment qualifications?</h1>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        name='sophisticated1'
                        checked={profile.sophisticated1}
                        onChange={handleChange}
                      />
                    </label>
                    <p>
                      <strong>Sophisticated Investor </strong>You have net
                      assets of at least $2.5 million
                    </p>
                  </div>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        name='sophisticated2'
                        checked={profile.sophisticated2}
                        onChange={handleChange}
                      />
                    </label>
                    <p>
                      <strong>Sophisticated Investor </strong>You have gross
                      income for each of the last two (2) finanical years of at
                      least $250,000 a year.
                    </p>
                  </div>
                  <div>
                    <label>
                      <input
                        type='checkbox'
                        name='sophisticated3'
                        checked={profile.sophisticated3}
                        onChange={handleChange}
                      />
                    </label>
                    <p>
                      <strong>Wholesale </strong>You satisfy the ASIC Wholesale
                      classification. ie, you have a statement from an AFSL that
                      the investor has sufficient experience to assess features
                      of the offer, and satisfies other administrative
                      requirements.
                    </p>
                  </div>
                  <h1>Upload s708 certificate</h1>
                  <p>
                    To become an Accredited Sophisticated invesor within the
                    Equitise platform please{' '}
                    <strong>upload your s708 certificate</strong>
                  </p>
                </div>
                <div className='profile-investor-download'>
                  <img src='https://invest.equitise.com/_next/image?url=%2Ficons%2Fdownload.svg&w=32&q=75' />
                  <p>Download our s708 template</p>
                </div>
                <div className='profile-investor-doc'>
                  <p>Upload document</p>
                  <p>or</p>
                  <div className='profile-investor-doc-later'>
                    <label class='switch'>
                      <input
                        type='checkbox'
                        name='provideLater'
                        checked={profile.provideLater}
                        onChange={handleChange}
                      />
                      <div class='slider round' />{' '}
                      <p>I will provide this later</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className='profile-address'>
                <h1>Your Address</h1>
              </div>
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
