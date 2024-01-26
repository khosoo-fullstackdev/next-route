// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const randomUser = 24345636;
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
