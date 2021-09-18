import React from "react";
import { useFormik } from "formik";
import "./Signup.css";
const Signup = () => {
   const formik = useFormik({
      initialValues: {
         name: "",
         email: "",
         password: "",
         repassword: "",
      },
      validate: (values) => {
         let errors = {};
         if (!values.name) {
            errors.name = "Required";
         } else if (values.name.length < 5) {
            errors.name = "Enter the valid name";
         }
         return errors;
      },
   });
   return (
      <div className="pad1">
         <div className="Signup">
            <form onSubmit={formik.handleSubmit} class className="form2">
               <h1 className="Signup2">Sign up</h1>
               <div className="fullname1">
                  <input
                     type="text"
                     name="name"
                     id="name"
                     onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                     value={formik.values.name}
                     placeholder="Fullname"
                  />
                  <div className="input">
                     {formik.touched.name && formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                     ) : null}
                  </div>
               </div>

               <div>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                     value={formik.values.email}
                     placeholder="Email"
                  />
               </div>
               <div>
                  <input
                     type="password"
                     name="password"
                     id="password"
                     onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                     value={formik.values.password}
                     placeholder="Confirm password"
                  />
               </div>
               <div>
                  <input
                     type="repassword"
                     name="repassword"
                     id="repassword"
                     onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                     value={formik.values.repassword}
                     placeholder="Re-enter password"
                  />
               </div>
               <div>
                  <input type="button" value="Submit" />
               </div>
               <div>
                  <p className="OR">OR</p>
               </div>
               <div>
                  <p>
                     Already have a account?-{" "}
                     <a className="href" href="Login">
                        Login
                     </a>{" "}
                  </p>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Signup;
