import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

const secret = 'someSecretHere';

const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    const token = sign(
      {
        username: username,
      },
      secret,
      { expiresIn: MAX_AGE }
    );

    const serialised = serialize('OursiteJWT', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });

    res.setHeader('Set-Cookie', serialised);

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials!' });
  }
}
