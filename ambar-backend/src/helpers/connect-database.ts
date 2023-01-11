import mongoose from 'mongoose';

const connectDatabase = (): void => {
  const connectionURI = `mongodb://127.0.0.1:27017/myapp`;
  mongoose.connect(connectionURI);
  const { connection } = mongoose;
  connection.on('error', (err) => console.error('MongoDB connection error', err));
  connection.once('open', () => {
    console.debug(
      `✔ MongoDB connection stablished at ${connectionURI}`,
    );
  });
};

export default connectDatabase;
