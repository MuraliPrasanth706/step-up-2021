import React from "react";
import { useFormik } from "formik";

const Login = () => {
   return (
      <div className="pad1">
         <div className="Signup">
            <form>
               <h1 className="Signup2">Login</h1>
               <div className="fullname1">
                  <input type="email" name="LoginEmail" placeholder="Email" />
               </div>
               <div>
                  <input
                     type="password"
                     name="LoginPasswprd"
                     placeholder="Enter password"
                  />
               </div>
               <div>
                  <input type="button" value="Login" />
               </div>
               <div>
                  <p className="OR">OR</p>
               </div>
               <div>
                  <p>
                     Craete a New Account-
                     <a className="href" href="Signup">
                        Signup
                     </a>
                  </p>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
