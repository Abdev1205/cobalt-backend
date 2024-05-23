import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  channelId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  slackMessageId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model('messages', messageSchema);

export default Message;