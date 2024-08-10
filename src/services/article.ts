import { ResponseArticleData } from '@/pages/api/article';

export interface ArticleContentProps {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  isSmallCard?: boolean;
};

export const getArticle = async () => {
  const result = await fetch('/api/article');
  const data = await result.json() as ResponseArticleData;
  const articleContent = data.data?.map(({ id, title, summary, featured_image, slug }) => ({
    id,
    title,
    description: summary,
    image: featured_image,
    slug
  } as ArticleContentProps));
  return articleContent;
};