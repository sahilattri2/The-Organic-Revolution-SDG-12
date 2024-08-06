const express = require('express');
const textToSpeech = require('@google-cloud/text-to-speech');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Set up Google Cloud Text-to-Speech client
const client = new textToSpeech.TextToSpeechClient({
  keyFilename: '//api key',
});

app.post('/convert-text-to-speech', async (req, res) => {
  const { text, languageCode } = req.body;

  const request = {
    input: { text },
    voice: { languageCode: languageCode || 'en-US', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  try {
    const [response] = await client.synthesizeSpeech(request);
    res.send(response.audioContent.toString('base64'));
  } catch (error) {
    console.error('ERROR:', error);
    res.status(500).send(`Error converting text to speech: ${error.message}`);
  }
});

app.listen(8081, () => {
  console.log('Server is running on port 8081');
});
