import { withSentry } from '@sentry/nextjs';

const sharp = require('sharp');

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'POST': {
      const { svg } = req.body;

      // console.log('svg', svg);
      sharp(Buffer.from(svg))
        .png()
        .toBuffer((err, data, info) => {
          if (err) {
            console.log('error', err);
          }

          res.json({
            png: data,
          });
        });

      break;
    }
    default: {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};

export default withSentry(handler);
