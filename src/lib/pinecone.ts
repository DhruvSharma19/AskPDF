import { PineconeClient } from "@pinecone-database/pinecone";

export const getPineconeClient = async () => {
  const client = new PineconeClient();

  await client.init({
    apiKey: process.env.PINECONE_API_KEY!,
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
    environment: "gcp-starter",
  });
=======
>>>>>>> Stashed changes
    environment: 'gcp-starter',
  })
>>>>>>> a72fd59f1e987d6ba0560d82ba01e755955fe489

  return client;
};
