import type { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseArticleData {
  success: boolean;
  message: string;
  code: number;
  data: ArticleData[] | undefined
};

interface ArticleData {
  id: string;
  slug: string;
  title: string;
  summary: string;
  featured_image: string;
  featured_image_caption: string;
  read_time: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseArticleData>) => {
  try {
    const url = process.env.NEXT_PUBLIC_BASE_URL + 'article';
    const result = await fetch(url);
    const data = await result.json() as ResponseArticleData;
    if (result && data) res.status(200).json(data);
    else res.status(400).json({ success: false, message: 'error', code: 400, data: undefined });
  } catch (error) {
    res.status(400).json({ success: false, message: 'error', code: 400, data: undefined });
  }
}

export default handler;
