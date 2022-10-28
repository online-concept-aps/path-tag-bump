const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const serviceName = core.getInput('service-name');
  const initialVersion = core.getInput('initial-version');
  console.log(`The service name is ${serviceName}!`);
  const newTag = initialVersion;
  core.setOutput("new-tag", newTag);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}