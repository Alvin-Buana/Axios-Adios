const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', (req, res) => {
    const info = req.body.text;
    // res.status(200).json({
    //     text: info,
    // })
    axios.post('https://sentiment-analysis-ywu6raktuq-uc.a.run.app', {text:info})
    .then(response => {
        res.status(200).json({
            result: response.data,
        })
    })
    .catch(function (error) {
        res.status(404).json({
            text: error
        })
      });
}
);

module.exports = router;