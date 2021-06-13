import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils';

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('Recived Event');

  res.status(200).json({ ok: true });
};
