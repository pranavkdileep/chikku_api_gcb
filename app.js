const {GradioChatBot} = require('gradio-chatbot');

const bot = new GradioChatBot(
  url = '1',
  historySize = '1'
);


async function start(prompt) {
  await bot.reset();
  const message = await bot.chat(prompt);
  console.log('message', message);
  await bot.reset();
  return message;
}

start("java code print hello pranav")

module.exports = start;
