# MiBlog: Full-Stack Next.js Online Blog Application

## Technical Digest
- Deployed a serverless GraphQL-and-Next.js-based scalable online blogging application on the AWS Cloud.

- Implemented front-end by Next.js with Tailwind CSS, coupling with the AWS AppSync-managed GraphQL API.

- Engineered the serverless back-end with DynamoDB, supporting image storing and processing by Amazon S3.
  
- Created a Git-based CI/CD workflow through the host environment for continuous deployment on AWS Amplify.
  
- Utilized Amazon Cognito to provide authentication service and User Pools/Identity Pools management.

## Deployment: in local environment
- Run the development server with
`npm run dev` or `yarn dev`
- Open `http://localhost:3000` with your browser to meet MiBlog!

## Deployment: onto AWS Cloud Service 
This project contains an Amplify project (`/amplify`) already configured & ready to be deployed. Deploying this project will create the following resources in your account: an authentication configuration using Amazon Cognito, an AWS AppSync GraphQL API, and a DynamoDB table.

- Make sure you are on the latest version of the AWS Amplify CLI with:
`npm install -g @aws-amplify/cli`
You must also have the CLI configured with a user from your AWS account (through `amplify configure`). 

- Clone MiBlog
`git clone https://github.com/samplecatalina/miblog.git`

- Install dependencies
`npm install`

- Initialize the AWS Amplify project
`amplify init`
then follow the prompt from Amplify CLI, enter a name for the environment, push the new resources to your AWS AppSync console with
`amplify push`

- Run the project
`npm dev run`


