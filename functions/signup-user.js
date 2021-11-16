// domain/.netlify/functions/1-hello


exports.handler = async function(event, context) {

  console.log('context', context)
  console.log('event', event)
  //console.log('*****identity\n*******', data)
  //console.log('context',context )


  // Do stuff and return a response...
  return {
    statusCode: 200,
    body:'User API - ',
  }

}



/*exports.handler = async (e, context, cb) => {
  return {
    statusCode:200,
    //body:'Data returned by my Netlify Function by: '+ JSON.stringify(person),
    body:'API - '+JSON.stringify(person),
  }
}
*/
