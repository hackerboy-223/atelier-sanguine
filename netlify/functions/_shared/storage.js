const { S3Client, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3 = new S3Client({
  region: process.env.S3_REGION || 'us-east-1',
  endpoint: process.env.S3_ENDPOINT,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});

function publicUrlFromKey(key) {
  // bucket privé: on utilisera plutôt des URLs signées côté API.
  // Cette fonction est conservée pour compatibilité.
  if (!process.env.S3_PUBLIC_URL) return null;
  return `${process.env.S3_PUBLIC_URL.replace(/\/$/, '')}/${key.replace(/^\//, '')}`;
}

async function uploadToS3({ key, buffer, contentType }) {
  const bucket = process.env.S3_BUCKET_NAME;
  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      CacheControl: 'max-age=31536000',
    })
  );
}

async function signedGetUrl(key, expiresInSeconds = 3600) {
  const bucket = process.env.S3_BUCKET_NAME;
  const cmd = new GetObjectCommand({ Bucket: bucket, Key: key });
  return await getSignedUrl(s3, cmd, { expiresIn: expiresInSeconds });
}

module.exports = { uploadToS3, signedGetUrl, publicUrlFromKey };

