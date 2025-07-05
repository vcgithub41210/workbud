# workbud

**workbud** is a simple web app written in MERN stack that allows users to keep add and keep track of their workouts including number of sets and repetitions.

---

## Getting Started

### Prerequisites

- [Node](https://nodejs.org/en/download)

- [MongoDB Atlas Cluster](https://www.mongodb.com/cloud/atlas)

---

## Setup

### Backend

This MERN app uses MongoDB Atlas for the backend database.

#### 1. Set up MongoDB Atlas Cluster

1. Visit [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign in and create a free Shared Tier cluster.
3. Create a new database and collection.
4. Go to **Database > Connect > Drivers**, and copy the connection URI. It looks like this:
```
mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```

5. Replace `<username>`, `<password>`, and `<dbname>` with your actual credentials.

---

#### 2. Create a `.env` File in the `backend/` Directory

1. Inside your `backend` folder, create a file named `.env`:

```env
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```

2. Replace the MONGO_URI with your connection uri

---

### Build and Run

```sh
git clone https://github.com/vcgithub41210/workbud.git
```

#### Backend

In your terminal, cd into the repo and execute the following commands:
```sh
cd backend
node server.js
```
--

#### Frontend

Open a new terminal, cd into the repo and execute the following commands:
```sh
cd frontend
npm install
npm start
```
--

