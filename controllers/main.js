const express = require('express');
const router = express.Router();
const { streamVideo } = require('../services/servefile');

router.get('/:videoName', (req, res) => {
  const videoPath = req.params.videoName;
  const range = 'bytes=0-2848207'; //req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
    return;
  }

  streamVideo(videoPath, range)
    .then(data => {
      res.writeHead(206, {
        "Content-Range": `bytes ${data.start}-${data.end}/${data.total}`,
        "Accept-Ranges": "bytes",
        "Content-Length": data.chunksize,
        "Content-Type": "video/mp4"
      });
      data.stream.pipe(res);
    })
    .catch(error => {
      res.status(404).send(error);
    });
});

module.exports = router;

