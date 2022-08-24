const express = require('express');
const request = require('request');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();




// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))

// STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))



// Signup Routes

// Home Newsletter
app.post('/', (req, res) => {
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
            Authorization: 'auth 13c782b0afcdf8fd91af8c16211c617e-us14'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if (err) {
            res.redirect('/')
            // console.log(options)
            return
        } else {
            if (response.statusCode === 200) {
                console.log('successful post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/')
            } else {
                console.log('failed post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/')
            }
        }
    });
})

// About Newsletter
app.post('/about.html', (req, res) => {
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
            Authorization: 'auth 13c782b0afcdf8fd91af8c16211c617e-us14'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if (err) {
            res.redirect('/about.html')
            // console.log(options)
            return
        } else {
            if (response.statusCode === 200) {
                console.log('successful post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/about.html')
            } else {
                console.log('failed post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/about.html')
            }
        }
    });
})

//Beliefs Newsletter
app.post('/beliefs.html', (req, res) => {
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
            Authorization: 'auth 13c782b0afcdf8fd91af8c16211c617e-us14'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if (err) {
            res.redirect('/beliefs.html')
            // console.log(options)
            return
        } else {
            if (response.statusCode === 200) {
                console.log('successful post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/beliefs.html')
            } else {
                console.log('failed post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/beliefs.html')
            }
        }
    });
})

//Ministries Newsletter
app.post('/ministries.html', (req, res) => {
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
            Authorization: 'auth 13c782b0afcdf8fd91af8c16211c617e-us14'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if (err) {
            res.redirect('/ministries.html')
            // console.log(options)
            return
        } else {
            if (response.statusCode === 200) {
                console.log('successful post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/ministries.html')
            } else {
                console.log('failed post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/ministries.html')
            }
        }
    });
})

//Pantry Newsletter
app.post('/pantry.html', (req, res) => {
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
            Authorization: 'auth 13c782b0afcdf8fd91af8c16211c617e-us14'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if (err) {
            res.redirect('/pantry.html')
            // console.log(options)
            return
        } else {
            if (response.statusCode === 200) {
                console.log('successful post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/pantry.html')
            } else {
                console.log('failed post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/pantry.html')
            }
        }
    });
})

// Calendar Newsletter
app.post('/calendar.html', (req, res) => {
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
            Authorization: 'auth 13c782b0afcdf8fd91af8c16211c617e-us14'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if (err) {
            res.redirect('/calendar.html')
            // console.log(options)
            return
        } else {
            if (response.statusCode === 200) {
                console.log('successful post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/calendar.html')
            } else {
                console.log('failed post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/calendar.html')
            }
        }
    });
})

//Scholarships Newsletter
app.post('/scholarships.html', (req, res) => {
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
            Authorization: 'auth 13c782b0afcdf8fd91af8c16211c617e-us14'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if (err) {
            res.redirect('/scholarships.html')
            // console.log(options)
            return
        } else {
            if (response.statusCode === 200) {
                console.log('successful post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/scholarships.html')
            } else {
                console.log('failed post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/scholarships.html')
            }
        }
    });
})

//Gallery Newsletter
app.post('/gallery.html', (req, res) => {
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
            Authorization: 'auth 13c782b0afcdf8fd91af8c16211c617e-us14'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if (err) {
            res.redirect('/gallery.html')
            // console.log(options)
            return
        } else {
            if (response.statusCode === 200) {
                console.log('successful post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/gallery.html')
            } else {
                console.log('failed post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/gallery.html')
            }
        }
    });
})

//Pastor Newsletter
app.post('/pastor.html', (req, res) => {
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
            Authorization: 'auth 13c782b0afcdf8fd91af8c16211c617e-us14'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if (err) {
            res.redirect('/pastor.html')
            // console.log(options)
            return
        } else {
            if (response.statusCode === 200) {
                console.log('successful post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/pastor.html')
            } else {
                console.log('failed post')
                console.log(response.statusCode)
                console.log(options)
                res.redirect('/pastor.html')
            }
        }
    });
})


const PORT = process.env.PORT || 5300;

app.listen(PORT, console.log(`server started on ${PORT}`));

