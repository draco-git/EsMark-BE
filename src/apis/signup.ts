import { pool } from "../client";
import { Request, Response } from "express";
import { generateAccessToken } from "../helper/generateToken";

export const signup = (req: Request, res: Response) => {
  const { firstName, lastName, email, password, phone, age } = req.body;
  const query =
    "INSERT INTO user_info (age, first_name, last_name, email,phone, password) VALUES($1, $2, $3, $4, $5, $6)";
  pool.query(
    query,
    [age, firstName, lastName, email, phone, password],
    (err) => {
      if (err) {
        res.status(200).json({
          success: false,
          response: { error: err.message },
        });
      }
      const token = generateAccessToken(req, res);
      res.status(200).json({
        success: true,
        response: {
          body: {
            token: token,
          },
        },
      });
    }
  );
};
