const PORT = 5000

// Dependencies.
const express = require('express')
const path = require('path')
const youtubeAudioStream = require('youtube-audio-stream')
const app = express()

module.exports = {
    play: (url) => {
        try {
            app.get('/stream/:videoId', (request, response) => {
                const videoId = `https://www.youtube.com/watch?v=${url}`
                try {
                    youtubeAudioStream(videoId).pipe(response);
                } catch (exception) {
                    response.status(500).send(exception)
                }
            })
        } catch (e) {

        }
    },

    omit: (string, message, callback) => {
        let messages = string.split(message, 22);
        callback(messages[1]);
    },

    content: (string, res, callback) => {
        let messages = string.split(res);
        // console.log(messages);
        callback(messages[1]);
    }
}

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`)
})