import {navigate} from 'gatsby'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}



const contactSubmit = (values, {resetForm}) => {
  fetch("/contact-page-cover", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "contact-page-cover",
      ...values,
    }),
  })
    .then(() => {
      console.log("form-sent")
      resetForm()
      navigate("/thanks")
    })
    .catch(error => console.log(error))
};

export {
  encode,
  contactSubmit
}
