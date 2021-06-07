export default function validate(values) {
    let errors = {};
  
    if (!values.word.trim()) {
      errors.word = 'Word required';
    }

    if (!values.translation.trim()) {
      errors.translation = 'Translation required';
    }

    return errors;
  }