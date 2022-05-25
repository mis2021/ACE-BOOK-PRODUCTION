import * as yup from 'yup';
export const accValidationSchema = yup.object().shape({
  firstName: yup.string().required('Required field'),
  lastName: yup.string().required('Required field'),
  username: yup.string().required('Required field'),
  contact: yup.string().required('Required field'),
  password: yup.string()
    .required('Password is mendatory')
    .min(5, 'Password must be at 5 char long'),
    confPassword: yup.string()
    .required('Password is mendatory')
    .oneOf([yup.ref('password')], 'Passwords does not match'),
  // type: yup.object().nullable().required("form:error-type-required"),
});
