# Swift - Decentralized Medical Loan Lending Platform

Swift is a decentralized application (dApp) that provides medical loans through smart contracts. Built using ReactJS, Web3JS, and integrated with MetaMask, Swift offers a seamless user experience for managing loans and deploying contracts.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Environment Configuration](#environment-configuration)
4. [Running the Application](#running-the-application)
5. [How the dApp Works](#how-the-dapp-works)
6. [Additional Features](#additional-features)
7. [For Developers and Testers](#for-developers-and-testers)

## Getting Started

Follow these steps to set up and run the Swift application:

### Prerequisites

- Node.js and npm installed
- MetaMask browser extension installed
- Hardhat and Solidity installed
- A chainsafe network for deployment

### Clone the Repository

```bash
git clone git@github.com:b-l-u-e/decentralized-lending-platform.git
cd decentralized-lending-platform
```

### Install Dependencies

```bash
npm install
```

### Project Structure
```
src/ - Contains the ReactJS application code.
contracts/ - Solidity smart contracts.
public/ - Public assets and HTML files.
.env - Environment configuration (see Environment Configuration for details).
```

### Environment Configuration
Create an .env file in the root directory with the following content:

```
VITE_CONTRACT_ADDRESSES=<YOUR_CONTRACT_ADDRESSES>
PRIVATE_KEY=<YOUR_PRIVATE_KEY>
Replace <YOUR_CONTRACT_ADDRESSES> with the addresses of your deployed contracts and <YOUR_PRIVATE_KEY> with the private key of the active MetaMask account.
```

### Running the Application

Start the React Vite Application
```bash
npm run dev
```
Open http://localhost:5174/ in your browser to access the application.

### How the dApp Works
1. Login with MetaMask
- Users log in using their MetaMask wallet. Upon authentication, the dashboard displays their wallet balance.

2. Dashboard
- The minimalistic dashboard shows wallet balance and includes a navigation bar.

3. Medical Loans
- Navigate to the Loans page to view applied loans and make new applications.
- Users can specify the loan amount and payment duration. The smart contract registers and saves the loan contract.

4. Admin Route
- Admins (for development purposes, the user by default can deploy a simple contract and get the address) can deploy new contracts or view existing contracts.
- Contract deployment is streamlined with a simple button click.

### ENS Name Generation

Use the Namespace plugin to generate a unique ENS name from the user's first and last name.
The generated ENS name is saved, editable, and viewable by the user.

### Additional Features
1. Namespace Plugin
- Simplifies the process of generating ENS names for users.
2. OraAI Plugin
- Provides financial advice and additional information related to user interactions with the application.

### For Developers and Testers
Clone the Repository: Follow the steps in Getting Started.

1. Configure Environment: Create and configure your .env file as described above.

Install Dependencies: run ``` npm install``` to install the necessary packages.

Run Application: Start the React application using ```npm run dev```.

For any issues or contributions, please open an issue or pull request on the GitHub repository.