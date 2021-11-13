import {navigate} from 'gatsby'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}



const contactSubmit = (values, {setSubmitting, resetForm}) => {
  const {formName} = values
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": formName || "basic-contact-form",
      ...values,
    }),
  })
    .then(() => {
      console.log("success")
      resetForm()
      navigate("/thanks")
    })
    .catch(error => console.log(error))
};

export {
  encode,
  contactSubmit
}
