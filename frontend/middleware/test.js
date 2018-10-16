const { parse } = require('querystring');
export default ({req}) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      console.log('sdlkfjsldkfj:' + chunk.toString());
      body += chunk.toString();
    });
    req.on('end', () => {

    });
  }
}
