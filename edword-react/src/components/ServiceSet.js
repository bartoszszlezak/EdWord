import { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:8080`
})



const ServiceSet = (submitForm, validate) => {
  const [values, setValues] = useState({
    setName: '',
    language: '',
    userId: 1
  });

  const [file, setFile] = useState('');

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



  const sendData = () => {

    api.post(`http://localhost:8080/addset`, values)
        .then(r => {
            console.log("Wysłane mountain");
        });
}

  const sendFile = async () => {

    let data = new FormData();
    data.append('file', file);
    data.append('name', file.name);
    const resp = await api.post(`http://localhost:8080/addset/photo`, data);

    if (resp.data != null) {
        sendData();
    }
}


  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {

        sendFile();
        submitForm();
      }
    },
    [errors, isSubmitting]
  );

  return { handleChange, handleSubmit, setFile, values, errors };
};

export default ServiceSet;