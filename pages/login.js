import HeaderBanner from 'components/Login/HeaderBanner';
export default function Login() {
  return (
    <div>
      <HeaderBanner />
      <div className='login-container'>
      <div className='login-container-form'>
        <div className='login-form'>
          <form>
            <h2 className='login-title'>Login</h2>
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
            <button type='submit' onClick='' className='login-button'>
              Login
            </button>
            <a href='#' className='login-forgot'>
              Forgot password?
            </a>
          </form>
        </div>
        <a href='#' className='login-link'>
          Don't have an account? Join today
        </a>
      </div>
    </div>
    </div>
  );
}
