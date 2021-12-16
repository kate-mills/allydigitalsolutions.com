import {navigate} from 'gatsby'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}




const contactBasic = (values, {resetForm}) => {

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "basic-contact-form",
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


const contactDemo = async (values, actions) => {

  actions.setSubmitting(true)
  //console.log(actions)
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "fullname-contact-form", ...values }),
  })
    .then(() => {
      console.log("success")
      actions.resetForm()
    })

    .catch(error => console.log(error))
    .finally(()=> {
      actions.setSubmitting(false)
      navigate("/thanks")
    })
};



const handleSubmit = (event) => {
  event.preventDefault()
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": event.target.getAttribute("name"),
      ...name
    })
  }).then(() => navigate("/thanks/")).catch(error => alert(error))
}

export {
  encode,
  contactBasic,
  contactDemo,
}
