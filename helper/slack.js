import slack from '@slack/bolt';
import Message from '../models/message.js';


// researched this in slack/bolt api website 
// # cititaion

const app = new slack.App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});


// sending message to my channel
const sendMessage = async (req, res) => {
  try {
    const { text } = req.body;
    console.log("message", text)

    const result = await app.client.chat.postMessage({
      token: process.env.SLACK_BOT_TOKEN,
      channel: process.env.SLACK_CHANNEL,
      text: text,
    });

    const { ts: slackMessageId, user: userId, team: teamId, bot_id: botId } = result.message;

    // Saving the message to MongoDB
    const newMessage = new Message({
      message: text,
      channelId: process.env.SLACK_CHANNEL,
      timestamp: slackMessageId,
      slackMessageId,
      userId,
      botId,
      teamId,
    });

    const mess = await newMessage.save();

    console.log(result);
    return res.status(201).json({ success: true, message: mess });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// getting all the message from my channel
const getMessage = async (req, res) => {

  try {
    const result = await app.client.conversations.history({
      channel: 'C0745CNED63'
    });

    let conversationHistory = result.messages;
    console.log(conversationHistory)
    return res.status(201).json({ success: true, message: conversationHistory });
  }
  catch (error) {
    console.error(error);
  }
}

export {
  sendMessage, getMessage
};
