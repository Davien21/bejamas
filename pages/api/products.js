import { query as q } from "faunadb";
import { faunaClient } from "../../lib/fauna";

export default async (req, res) => {
  if (req.method == "GET") {
    let query = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("products"))),
        q.Lambda((show) => q.Get(show))
      )
    );

    const data = query.data;
    res.status(200).json({ data });
  }
};
