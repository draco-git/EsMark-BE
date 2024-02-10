import { pool } from "../client";
import { Request, Response } from "express";

export const signup = (request: Request, response: Response) => {
  const { firstName, lastName, email, password, phone, age } = request.body;
  const query =
    "INSERT INTO user_info (age, first_name, last_name, email,phone, password) VALUES($1, $2, $3, $4, $5, $6)";
  pool.query(
    query,
    [age, firstName, lastName, email, phone, password],
    (err, results) => {
      if (err) {
        response.status(200).json({
          success: false,
          response: { error: err.message },
        });
      }
      response.status(200).json({
        success: true,
        response: {
          body: results.rowCount,
        },
      });
    }
  );
};
