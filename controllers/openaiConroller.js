const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
    organization: "org-KoGjaXGSAjVutR1R9SYB8eOQ",
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const generateImage = async(req, res) => {
    const { keyword } = req.body;
    
    
    try{
        const response = await openai.createImage({
            prompt:keyword,
            n:1,
            size: "1024x1024"
        })
        const imageUrl = response.data.data[0].url
        res.status(200).json({
            success:true,
            data:imageUrl
        })
    }catch(error) {
        if (error.response) {
            res.status(400).json({
                status:"fail",
                error:error.response.status,
                data:error.response.data
            });
        } else {
            res.status(400).json({
                status:"fail",
                error:error.message
            })
        }
    }
}

module.exports = { generateImage }