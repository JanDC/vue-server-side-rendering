export default ({req, store}) => {
  if (typeof req !== "undefined" && req.method === "POST") {
    return store.dispatch('user/register/createUser', req.body);
  }
}
