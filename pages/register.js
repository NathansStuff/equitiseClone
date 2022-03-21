import HeaderBanner from 'components/Login/HeaderBanner';
import { useState } from 'react';

export default function Register() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <HeaderBanner />
      <div className='login-container'>
        <div className='login-container-form'>
          <div className='login-form'>
            <form>
              <h2 className='login-title'>Join Equitise</h2>
              <div>
                <h4 className='login-field'>Email</h4>
                <input
                  className='login-input'
                  type='email'
                  placeholder=''
                ></input>
              </div>
              <div>
                <h4 className='login-field'>Password</h4>
                <input
                  className='login-input'
                  type='password'
                  placeholder=''
                ></input>
              </div>
              <div>
                <h4 className='login-field'>Confirm Password</h4>
                <input
                  className='login-input'
                  type='password'
                  placeholder=''
                ></input>
              </div>

              <label class='container login-checkbox'>
                <input
                  type='checkbox'
                  checked={checked}
                  onChange={e => setChecked(e.target.checked)}
                ></input>
                <span class='checkmark'></span>
                <label class='login-checkbox-text'>
                  Inform me about news and upcoming deals
                </label>
              </label>

              <button type='submit' onClick='' className='login-button'>
                Join
              </button>
            </form>
          </div>
          <a href='#' className='login-link'>
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
}
