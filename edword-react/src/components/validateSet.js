export default function validate(values) {
    let errors = {};
  
    if (!values.setName.trim()) {
      errors.setName = 'Name required';
    }

    if (!values.photo.trim()) {
      errors.photo = 'Photo required';
    }

    if (!values.language.trim()) {
      errors.language = 'Language required';
    }

    return errors;
  }