// Slack actions

const axios = require('axios');
const providerName = 'slack';

exports.send = (req, res) => {
  const invoke = async () => {
    const response = await invokeAction('chat.postMessage', req.body);
    res.status(200).send(response);
  }
  invoke();
}

const invokeAction = async (action, param) => {
  try {
    const workspace = param.workspace;
    const channel = param.channel;
    const message = param.message;
    const token = param.token;

    console.log(`${providerName}: workspace ${workspace}, action ${action}, channel ${channel}, message ${message}`);

    if (!action || !workspace || !channel || !message) {
      console.error('invokeAction: missing required parameter');
      return null;
    }

    const url = `https://slack.com/api/${action}`;
    const headers = { 
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    };

    const body = JSON.stringify({
      channel,
      text: message
    });

    const response = await axios.post(
      url,
      body,
      {
        headers: headers
      });

    return response.data;  
  } catch (error) {
    console.log(`invokeAction: caught exception: ${error}`);
    return null;
  }
}

