const PORT = 8000

const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')

const app = express()

//change this one to different webpage if you want
const url = 'https://www.acs.org.au/cpd-education/ict-leaders-series.html'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const videos = []
        //after the $ find the appropriate tag in the html elements, has to be div, otherwise won't work
        $('.media-body', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            videos.push({title,url
            
            })
        })
        console.log(videos)
    }).catch(err => console.log(err))
    


app.listen(PORT, () => console.log('server running PORT ${PORT}'))