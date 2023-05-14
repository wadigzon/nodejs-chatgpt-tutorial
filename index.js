import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
  organization:"org-KN0ykRFPhoy5KhJHY0ZHA6xs",
  apiKey: "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"
});

const openai = new OpenAIApi(configuration);
/*
// single request and response
openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello" }],
  })
  .then((res) => {
    console.log(res.data.choices[0].message.content);
  })
  .catch((e) => {
    console.log(e);
  });
*/

// creates a UI in the terminal that allows users to type in
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//  prompt the user to enter a message
userInterface.prompt();

userInterface.on("line", async (input) => {
  await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    })
    .then((res) => {
      console.log(res.data.choices[0].message.content);
      userInterface.prompt();
    })
    .catch((e) => {
      console.log(e);
    });
});