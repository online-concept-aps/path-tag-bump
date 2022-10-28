import { Toolkit } from 'actions-toolkit'
import buildAndTagAction from './lib'
Toolkit.run(buildAndTagAction,{
    secrets: process.env.GITHUB_TOKEN
})


// const core = require('@actions/core');
// const {context} = require('@actions/github');
// const {Octokit} = require("@octokit/rest");
//
// try {
//   // `who-to-greet` input defined in action metadata file
//   const serviceName = core.getInput('service-name');
//   const initialVersion = core.getInput('initial-version');
//   console.log(`The service name is ${serviceName}!`);
//   console.log(`The initial version is ${initialVersion}!`);
//   //Here comes the code to update the version
//   const newTag = initialVersion;
//   const octokit = new Octokit({
//     auth: process.env.GITHUB_TOKEN,
//   });
//
// //  const { data: { test } } = octokit.repos.getReleaseByTag();
//   //Create a tag
//   const createdTag = octokit.rest.git.createTag({
//     owner: context.payload.repository.owner.login,
//     repo: context.payload.repository.name,
//     tag:serviceName,
//     message:"New version",
//     object: {}, //sha of the commit
//     type:"commit",
//     "tagger.name": context.payload.commits.committer.name,
//     "tagger.email": context.payload.commits.committer.email
//   })
//   console.log("created: " + JSON.stringify(createdTag));
//
//   const tags = octokit.repos.listTags({
//     owner: context.payload.repository.owner.login,
//     repo: context.payload.repository.name,
//   });
//   console.log(context.payload.repository.owner.login)
//   console.log(context.payload.repository.name)
//   console.log(JSON.stringify(tags))
//
//
//   //outputs
//   core.setOutput("new-tag", newTag);
//   // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
// } catch (error) {
//   core.setFailed(error.message);
// }