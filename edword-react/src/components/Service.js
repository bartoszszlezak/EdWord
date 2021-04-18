import { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:8080`
})

const Service = (submitForm, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    passwordrep: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    //console.log(values);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {

        api.post("http://localhost:8080/registration", values)
            .then(response => {
                if(response.data != null){
                    console.log("wysyłam = " + values.username + " " + values.password + " " + values.email); 
                }
            });

        submitForm();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default Service;