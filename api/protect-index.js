module.exports = (req, res) => {
  const userAgent = req.headers['user-agent'];

  // Check if the request is coming from a web browser
  if (userAgent.includes('Mozilla')) {
    // If the user agent contains "Mozilla," it's likely a web browser
    // Allow the request to continue
    res.end();
  } else {
    // For other user agents (like HTTrack), you can return an error message or take appropriate action
    res.status(403).send('Access Denied');
  }
};
