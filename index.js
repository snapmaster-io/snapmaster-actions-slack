// SnapMaster Actions

// import the snapmaster actions middleware 
const snapmaster = require('snapmaster-actions');

// import the action functions
const actions = require('./actions');

// set up the express middleware for the actions
exports.snapmaster = snapmaster({
  send: actions.send,
});


// OPTIONAL - the below code adds a development server 
// Start it by running "npm run dev"
if (process.env.ENV === 'dev') {
// start a server for local testing
  const PORT = 5555;
  exports.snapmaster.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
