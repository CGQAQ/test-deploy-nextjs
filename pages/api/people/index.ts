import { NextApiResponse, NextApiRequest } from 'next'
import { people } from '../../../data'
import { Person } from '../../../interfaces'

import {readdirSync} from "node:fs"

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Person[]>
) {
  console.log("????????", _req);

  console.log("ls", readdirSync(process.cwd()));
  return res.status(200).json(people)
}
