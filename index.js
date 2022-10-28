const core = require('@actions/core');
const {Github, context} = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const github = new GitHub(process.env.GITHUB_TOKEN);
  const serviceName = core.getInput('service-name');
  const initialVersion = core.getInput('initial-version');
  console.log(`The service name is ${serviceName}!`);
  console.log(`The initial version is ${initialVersion}!`);
  
  //Here comes the code to update the version
  const newTag = initialVersion;

  

  
  //outputs
  core.setOutput("new-tag", newTag);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}