import React from 'react';

const GitHubTutorial = () => (
  <span>
    <h3>How to Create GitHub Repository</h3>
    <ol>
      <li>Go to profile in top right corner</li>
      <li>Go to your repositories</li>
      <li>Click on &quot;New&quot;</li>
      <li>Modify basic info and add README file.</li>
      <li>Click &quot;Create Repository&quot;</li>
      <li>If you haven&apos;t already make sure you create a token so you can log in to your account on pi. </li>
    </ol>
    <h3>Creating Tokens</h3>
    <ol>
      <li>click on profile</li>
      <li>Go to developer settings</li>
      <li>Go to Personal Access tokens</li>
      <li>Click on tokens (classic)</li>
      <li>Generate a new token(MAKE SURE TO SAVE IT SOMEWHERE)</li>
    </ol>
    <h3>Cloning Repo on Pi</h3>
    <ol>
      <li>Make sure git is installed on pi(sudo apt install git)</li>
      <li>Add: git config --global user.name &quot;Github_username&quot;</li>
      <li>Add: git config --global user.email &quot;Github_Email&quot;</li>
      <li>git clone &quot;git@github.com:repo-url&quot; </li>
      <ol>
        <li>To clone from repo to pi on the repo click the green &quot;&lt;&gt; code&quot; button. Clone SSH and copy the link</li>
      </ol>
      <li>you may have to log in and input your token for your password</li>
      <li>you should have the repo on the pi now</li>
    </ol>
    <h3>Pushing Changes to Repo</h3>
    <ol>
      <li>git add . (adds all new changes)</li>
      <li>git status   (this checks the new things being added/deleted)</li>
      <li>git commit -m &quot;type any new changes here&quot;</li>
      <li>git push (pushes all changes and commit to repo. You wil have to sign in and enter token)</li>
      <li>All new changes should be on github repo now </li>
      <li>If any new changes are added on repo but not on the pi</li>
      <li>git pull   (pulls all new changes from the repo to pi)</li>
    </ol>
  </span>
);

export default GitHubTutorial;
