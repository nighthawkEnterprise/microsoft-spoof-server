# Security Awareness Simulation Server

This repo is the backend companion service for a controlled security-awareness simulation. It supports the frontend simulation repo by providing server-side structure for mock data capture, API handling, and demo workflow support.

## Overview

The professional framing for this project is security education and identity-risk demonstration. It should be used only in controlled, authorized environments where the goal is to teach users and stakeholders how spoofed experiences and phishing-style flows can work.

## Product problem

Security-awareness training is often abstract. A safe simulation can help people understand how convincing impersonation flows can be, why identity protections matter, and how organizations can design better safeguards.

This backend explores the server-side component of that kind of controlled simulation.

## Key features

- Express server
- CORS support
- Request parsing with body-parser
- MongoDB integration through Mongoose
- API foundation for a companion React frontend
- Backend structure for mock security-awareness workflows

## Tech stack

- Node.js
- Express
- Mongoose
- MongoDB
- CORS
- Body Parser
- Nodemon

## Related repo

- `microsoft_spoof` — frontend companion app for the simulation

## Portfolio positioning

Use this carefully and ethically. It should be described as a security-awareness simulation backend, not as a phishing or spoofing tool. It is a supporting project for an identity/security portfolio, but it should be renamed and sanitized before public use.

## Running locally

```bash
npm install
npm start
```

The server starts with:

```bash
node app.js
```

## Safety and ethics note

This project should never be used to collect real credentials, impersonate services, or target users without explicit authorization. Before making this repo public, remove sensitive data, use only mock storage, rename the repo, and add clear simulation-only warnings in the frontend and backend documentation.

## Future improvements

- Rename to a neutral security-awareness project name
- Replace any real-looking data capture with mock-only behavior
- Add environment-variable based configuration
- Add explicit authorization/simulation warnings
- Add tests
- Add API documentation

## Status

Backend prototype for a controlled security-awareness simulation. Requires cleanup and renaming before portfolio use.