const validationForm = (formData, setErrors) => {
  let newErrors = {};

  if (!formData.title) {
    newErrors.title = `Title is Required`;
  }

  if (!formData.description) {
    newErrors.description = `Description is Required`;
  }

  if (!formData.tag) {
    newErrors.tag = `Select a Tag`;
  }

  if (!formData.date) {
    newErrors.date = `Select a Date`;
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

export { validationForm };
