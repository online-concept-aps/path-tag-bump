const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const serviceName = core.getInput('service-name');
  console.log(`The service name is ${serviceName}!`);
  const newTag = "1.0.1";
  core.setOutput("new-tag", newTag);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}