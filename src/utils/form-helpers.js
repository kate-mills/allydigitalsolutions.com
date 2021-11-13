import {navigate} from 'gatsby'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}



const contactSubmit = (values, {setSubmitting, resetForm}) => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": values.formName || "contact-page-cover",
      ...values,
    }),
  })
    //.then(() => {
      //console.log("success")
      //resetForm()
      //setSubmitting(false)
      //navigate("/thanks")
    //})
    .then(()=>resetForm())
    .then(()=>setSubmitting(false))
    .then(()=>navigate("/thanks"))
    .catch(error => console.log(error))
};

export {
  encode,
  contactSubmit
}
