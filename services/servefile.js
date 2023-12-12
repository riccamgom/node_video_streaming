const fs = require('fs');
const path = require('path');

const videoDirectory = './videos';

const streamVideo = (videoPath, range) => {
  return new Promise((resolve, reject) => {
    const pathname = path.join(videoDirectory, videoPath);
    fs.stat(pathname, (err, stat) => {
      if (err) {
        return reject(new Error("Video not found"));
      }

      // Create the read stream for this particular chunk
      const positions = range.replace(/bytes=/, "").split("-");
      const start = parseInt(positions[0], 10);
      const total = stat.size;
      const end = positions[1] ? parseInt(positions[1], 10) : total - 1;
      const chunksize = (end - start) + 1;

      // Create the stream
      const stream = fs.createReadStream(pathname, { start, end });
      // Add the required headers for streaming
      resolve({ start, end, total, chunksize, stream });
    });
  });
};

module.exports = { streamVideo };
