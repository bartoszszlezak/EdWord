import { useState, useEffect } from 'react';
import axios from 'axios';
// import {handleSetId} from "./ServiceSet";
import ServiceSetId from "./ServiceSetId";

const api = axios.create({
  baseURL: `http://localhost:8080`
})

const ServiceWord = (submitForm, validate) => {

  const {setSetId, getId} = ServiceSetId();

  const [values, setValues] = useState({
    word: '',
    translation: '',
    setId: getId()
  });

  const [words, setWords] = useState([]);

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
    sendData();
    submitForm();
  };


  const handleClick = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  }



  const sendData = () => {

    const config = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
      }
    };
    api.post(`http://localhost:8080/addword`, words, config)
        .then(r => {
            console.log("Wysłano słowa");
        });
}


  useEffect(
    () => {

      if (Object.keys(errors).length === 0 && isSubmitting) {
        setValues({
          word: '',
          translation: '',
          setId: getId()
        })
        setIsSubmitting(false);
      }
    },
    [errors, isSubmitting]
  );

  return { handleChange, handleSubmit, handleClick, values, errors, words, isSubmitting};
};

export default ServiceWord;