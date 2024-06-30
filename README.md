# Introduction

## Full-Stack Developer

This repository contains a minimal web application solution that will be the basis for the Beyon Connect developer interview coding assessment.
The solution consists of a frontend and backend project, where the frontend is a React application and the backend is a NodeJS web API.
Both projects are written in TypeScript.

As part of the in-person interview, you will be asked to extend the solution with a new features.
The features will be communicated to you during the interview and will be include required implementations in both the frontend and backend projects.

It is highly recommended that you clone this repository and get the solution running locally before the interview.
This will ensure that you are able to start coding immediately when the interview starts.
You should also familiarize yourself with the codebase and the technologies used.
This will help you understand the existing code and make it easier to implement the new features.

## DevOps Engineer

This repository is also used for the technical assessment of DevOps Engineer candidates. 
For this assessment, you will not be asked to extend the solution, but instead you will be given common DevOps tasks for this sort of system.

In preparation for the DevOps Engineer technical interview, you should ensure that you have Docker installed and a functional local kubernetes cluster deployed on your machine (see Pre-requisites for details).

# Pre-requisites

## Full-Stack Developer

- [NodeJS](https://nodejs.org/en/) (v18.15.0)
- [NPM](https://www.npmjs.com/) (v9.5.0)

## DevOps Engineer

- [Docker](https://www.docker.com/)
- Functional Kubernetes Cluster (we suggest either through [Docker Desktop](https://docs.docker.com/desktop/kubernetes/), or [minikube](https://minikube.sigs.k8s.io/docs/start))

# Backend

The backend is a NodeJS web API written in TypeScript.
It uses the [fastify](https://www.fastify.io/) web framework to implement the API endpoints.
It also uses [awilix](https://github.com/fastify/fastify-awilix) for dependency injection.
If you do not have experience with dependency injection, we suggest that you read up on it, since it is a core design pattern utilized in Beyon Connect's solutions.

The backend project also contains a crude in-memory database implementation using [Sqlite](https://www.sqlite.org/index.html).
You can find the database implementation in the `src/database` folder and find the database schema in the `src/database/schema.ts` file.
The database schema can be extended by adding SQL queries to the migrations array the file.

# Frontend

The frontend is a React application written in TypeScript.
It uses [React Router](https://reactrouter.com/) for routing and [React Query](https://react-query.tanstack.com/) for data fetching.
It also uses [stitches](https://stitches.dev/) for styling, and [react-hook-form](https://react-hook-form.com/) for form handling.
Finally, it uses [Radix UI Primitives](https://www.radix-ui.com/primitives/docs/getting-started/introduction) for some UI components.
Again, if you do not have experience with these technologies, we suggest that you read up on them, since they are core technologies utilized in Beyon Connect's solutions.

# Running the solution

Start by runing `npm install` in the root folder.
Then, you can run the solution by running `npm run start` in the root folder.
This will run both the frontend and backend projects concurrently.
If you want to run the backend and frontend projects separately, you can run `npm run start:backend` and `npm run start:frontend` respectively.
