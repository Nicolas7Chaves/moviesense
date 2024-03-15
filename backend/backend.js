import OpenAI from 'openai';
import { createClient } from "@supabase/supabase-js";
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { OpenAI } = require("openai");
require('dotenv').config();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
const app = express();
app.use(cors());
app.use(express.json());


// OpenAi Config
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Supabase Config
const privateKey = process.env.SUPABASE_API_KEY;
if (!privateKey) throw new Error(`Expected env var SUPABASE_API_KEY`);
const url = process.env.SUPABASE_URL;
if (!url) throw new Error(`Expected env var SUPABASE_URL`);
export const supabase = createClient(url, privateKey);



// app.post('/', async (req, res) => {
//     const { text, language } = req.body;
//     const systemContent = {

//     };
//     const messages = [
//         {
//             role: 'system',
//             content: systemContent
//         },
//         {
//             role: 'user',
//             content: text
//         }
//     ];

//     try {
//         const completion = await openai.chat.completions.create({
//             model: 'gpt-4',
//             messages: messages,
//         });
//         const response = completion.choices[0].message.content
//         res.json({ response: response });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

