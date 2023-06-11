import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await db.connect();
 
  try {
    await client.sql`CREATE TABLE posts ( id int, title varchar(255), image varchar(255) );`;
    const Ids =['1','2','3']
    const names = ['Fiona', 'Lucy'];
    const image=['https://tse2.mm.bing.net/th?id=OIP.XohiXvZbVKg-_8OjrlGVHgHaIL&pid=Api&P=0&h=180','https://tse3.mm.bing.net/th?id=OIP.jdt8VNtyICulU4jtOgoakAHaG5&pid=Api&P=0&h=180']

    await client.sql`INSERT INTO posts (Name, Owner) VALUES (${Ids[0]}, ${names[1]},${image[0]});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const posts = await client.sql`SELECT * FROM posts;`;
  return response.status(200).json({ posts });
}