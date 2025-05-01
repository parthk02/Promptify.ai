import * as dotenv from "dotenv";
import { createError } from "../error.js";
import axios from "axios";

dotenv.config();

// Controller to generate Image using Hugging Face
export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const response = await axios({
      method: "POST",
      url: "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",  // <- IMPORTANT: replace with your model name
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        inputs: prompt,
      },
      responseType: "arraybuffer", // Important if the response is an image
    });

    const generatedImage = Buffer.from(response.data, "binary").toString("base64");

    res.status(200).json({ photo: generatedImage });
  } catch (error) {
    next(
      createError(
        error.response?.status || 500,
        error?.response?.data?.error || error.message
      )
    );
  }
};
