export default ({req, store}) => {

  // Catch register submit and update our store with the form data.
  if (typeof req !== "undefined" && req.method === "POST") {
    return store.dispatch('user/register/createUser', req.body);
  }
}
