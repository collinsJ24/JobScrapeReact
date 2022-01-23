import './Login.css'
const Login = () => {
  return (
    <body className="bg-default g-sidenav-show g-sidenav-pinned">

  

    
  
  

    <div className="main-content">

    <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
      <div className="container">
        <div className="header-body text-center mb-7">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 className="text-white">
                <a href="" target="_blank" rel="noopener noreferrer">JobScrape Sign Up</a>
              </h1>
             
            </div>
          </div>
        </div>
      </div>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" 
        preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>

    <div className="container mt--8 pb-5">

      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card bg-secondary border-0">
            <div className="card-header bg-transparent pb-5">
  
              <h3 className="text-center">
                Sign Up
              </h3> 
              <br/>
                          <div className="btn-wrapper text-center">
                <a href="/accounts/google/login/" className="btn btn-neutral btn-icon">
                  <span className="btn-inner--icon">
                      <img src="https://appsrv1-147a1.kxcdn.com/argon-dashboard-pro/img/icons/common/google.svg"/></span>
                  <span className="btn-inner--text">Google</span>
                </a>
              </div>
              <div className="text-muted text-center mt-2 mb-3">
  
                
                  <span>
                    Add your Credentials
                  </span>
                
  
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
  
              <form role="form" method="post" data-rewardful="" action="">
  
                <input type="hidden" name="csrfmiddlewaretoken" 
                value="bhEkjGjlKmaRLiCgoG6GWmFx7epkSM8pRgH5gKu7qEz9yi2uz3CawNS0h7Y0fk9e"/>
                <div className="form-group">
                  <div className="input-group input-group-merge input-group-alternative mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input type="email" name="email"
                     placeholder="E-mail address" autocomplete="email" 
                     className="form-control" required="" id="id_email"/>
                  </div>
                </div>
                <span className="text-error"></span>
  
                <div className="form-group">
                  <div className="input-group input-group-merge input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input type="password" name="password1" 
                    placeholder="Password" autocomplete="new-password" 
                    className="form-control" required="" id="id_password1"/>
                  </div>
                </div>
                <span className="text-error"></span>
                
                         <input type="hidden" id="ref" name="ref" value=""/>
             
  
                <div className="text-center">
                  <button type="submit" name="register" className="btn btn-primary my-4">Register</button>
                </div>
  
              </form>
  
            </div>
          </div>       
        </div>
      </div>
    </div>
    </div>

  
  
  
  </body>
  )
};


export default Login;
