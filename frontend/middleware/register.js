export default ({req, store}) => {
  if (req.method === "POST") {
    return store.dispatch('user/register/createUser', req.body);
  }
}
