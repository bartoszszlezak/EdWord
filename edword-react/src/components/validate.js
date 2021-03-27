export default function validate(values) {
    let errors = {};
  

    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password is too short';
    }
    if (!values.passwordrep) {
      errors.passwordrep = 'Password is required';
    } else if (values.passwordrep !== values.password) {
      errors.passwordrep = 'Different passwords';
    }
    return errors;
  }