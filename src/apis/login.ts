import { Response, Request } from "express";
import { pool } from "../client";

export const login = (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = `SELECT id FROM user_info WHERE email=$1 AND password=$2`;
  pool.query(query, [email, password], (err, results) => {
    if (err) {
      throw err;
    }
    const valid = results.rows.length > 0;
    res.status(200).json({
      success: valid,
      response: { body: results.rows },
    });
  });
};
