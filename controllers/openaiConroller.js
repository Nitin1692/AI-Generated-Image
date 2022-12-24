const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
    apiKey: process.env.API_KEY
})

const openai = new OpenAIApi(configuration)

const generateImage = async(req, res) => {
    const { keyword, size } = req.body;
    const imageSize = size === 'Small' ? '256X256' : size === 'Medium' ? '512X512' : '1024X1024';
    
    try{
        const response = await openai.createImage({
            keyword,
            n: 1,
            size: imageSize
        })
        const imageUrl = response.data.data[0].url
        res.status(200).json({
            success: true,
            data: imageUrl
        })
    }catch(error) {
        console.log(error)
    }
}

module.exports = { generateImage }