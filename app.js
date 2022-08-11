const express = require('express');
const request = require('request');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();




// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))

// STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))

// Signup Route
app.post('/newsletter', (req, res) => {
    const { email } = req.body;
    //make sure fields are filled
    if (!email) {
        return;
    }


    // Construct Request Data
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
            }
        ]
    }

    console.log(req.body)
    console.log(email)
    console.log(data)


    const postData = JSON.stringify(data)

    const options = {
        url: 'https://us14.api.mailchimp.com/3.0/lists/6f9b962e65',
        method: 'POST',
        headers: {
            Authorization: 'auth 128217c07dac0a6153ed796a3511e3bc-us14'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if (err) {
            // res.redirect('/ fail.html')
            // console.log(options)
            return
        } else {
            if (response.statusCode === 200) {
                // res.redirect('/success.html')
                console.log('successful post')
                console.log(response.statusCode)
                console.log(options)
            } else {
                // res.redirect('/fail.html')
                console.log('failed post')
                console.log(response.statusCode)
                console.log(options)
            }
        }
    });
})

const PORT = process.env.PORT || 5300;

app.listen(PORT, console.log(`server started on ${PORT}`));

