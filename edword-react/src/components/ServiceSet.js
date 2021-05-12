import { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:8080`
})



const ServiceSet = (submitForm, validate) => {
  const [values, setValues] = useState({
    setName: '',
    language: '',
    setImage: '',
    userId: 1
  });

  let file = '';

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


  const changeFile = async e =>{
    file= e.target.files[0];

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (  ) => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const base64String = await toBase64(file);
    setValues({...values,setImage: base64String})

}



  const sendData = () => {

    api.post(`http://localhost:8080/addset`, values)
        .then(r => {
            console.log("Wysłane danych");
            console.log(values);
            setValues({
                setName: '',
                language: '',
                setImage: '',
                userId: 1
            });
        });
}


  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        sendData();
        submitForm();
      }
    },
    [errors, isSubmitting]
  );

  return { handleChange, handleSubmit, changeFile, values, errors };
};

export default ServiceSet;