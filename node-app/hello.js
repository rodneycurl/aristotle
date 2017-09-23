module.exports = (request, response) => {
  // Get the name from the url.
  const name = request.params.name;

  // Some awesome praise
  const praise = 'Wow you are the man!';

  // Get excited
  const exclamation = '!';

  response.send(`${praise} ${name}${exclamation}`);
};
