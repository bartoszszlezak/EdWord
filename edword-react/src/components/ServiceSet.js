import { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:8080`
})

const ServiceSet = (submitForm, validate) => {
  const [values, setValues] = useState({
    setName: '',
    language: '',
    photo: '',
    userId: 1
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        api.post("http://localhost:8080/addset", values)
            .then(response => {
                if(response.data != null){
                
                }
                
            });

        submitForm();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default ServiceSet;