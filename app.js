const {GradioChatBot} = require('gradio-chatbot');

const bot = new GradioChatBot();

async function start(prompt) {
  const message = await bot.chat(prompt, {
  });
  console.log('message', message);
  return message;
}


module.exports = start;