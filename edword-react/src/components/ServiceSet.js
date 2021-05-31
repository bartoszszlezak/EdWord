import { useState, useEffect } from 'react';
import axios from 'axios';
import {useSelector} from "react-redux";
import ServiceSetId from "./ServiceSetId";


const api = axios.create({
  baseURL: `http://localhost:8080`
})


const ServiceSet = (submitForm, validate) => {

  const {setSetId, getId} = ServiceSetId();
  const user = useSelector(state => state.auth.auth.first)
  const [values, setValues] = useState({
    setName: '',
    language: '',
    setImage: '',
    userId: user
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

      const config = {
          headers: {
              "Authorization": "Bearer " + localStorage.getItem('token')
          }
      };
    api.post(`http://localhost:8080/addset`, values, config)
        .then(r => {
            console.log(values);
            setSetId(r.data);
            setValues({
                setName: '',
                language: '',
                setImage: '',
                userId: user
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

  return { handleChange, handleSubmit, changeFile, values, errors};
};

export default ServiceSet;