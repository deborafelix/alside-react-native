const validateForm = (obj) => {
  const fields = Object.keys(obj);
  for (let field of fields) {
    if (obj[field] === '') {
      return [null, 'Verifique se todos os dados foram preenchidos'];
    }
  }
  return [true, ''];
};

export default validateForm;
