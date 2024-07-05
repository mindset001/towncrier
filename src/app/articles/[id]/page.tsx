// src/app/articles/[id]/page.tsx
import { notFound } from 'next/navigation';
import { articles } from '@/app/Components/data/article'; // Adjust the path as necessary
import Image from 'next/image';
import Link from 'next/link';
import ArticleHeader from '@/app/Components/ArticleHeader';
import Footer from '@/app/Components/Footer2';
import Tech from '@/app/Landing/Tech';

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage = ({ params }: ArticlePageProps) => {
  const articleId = parseInt(params.id, 10);

  // Find the current article by ID
  const currentArticleIndex = articles.findIndex((article) => article.id === articleId);
  const article = articles[currentArticleIndex];

  if (!article) {
    notFound();
    return null; // This line is redundant but helps with TypeScript understanding
  }

  // Determine the previous and next articles
  const prevArticle = currentArticleIndex > 0 ? articles[currentArticleIndex - 1] : null;
  const nextArticle = currentArticleIndex < articles.length - 1 ? articles[currentArticleIndex + 1] : null;

  return (
    <main>
      <ArticleHeader />
      <div className="w-[60%] p-4 max-w-3xl mx-auto">
        <p className='text-[12px] my-6'>TownCrier `{'>'}` Posts`{'>'}` {article.title}</p>
        <div className="text-[#000] text-[12px] font-[600] flex justify-between items-center">
          <div className='bg-[#D0E2FE] p-[6px]'>
            {article.date} | {article.category}
          </div>
          <div>
            {article.time}
          </div>
        </div>
        <h1 className="text-[33px] font-bold mb-4">{article.title}</h1>
        <Image 
          src={article.imageUrl} 
          alt={article.title} 
          width={800} 
          height={450} 
          className="w-full h-auto mb-4" 
        />
        <div className='flex items-center gap-[2px]'>
          <div className='h-[10px] w-[1px] bg-[#031F38]'></div>
          <p className="text-[12px] text-[#031F38]">{article.description}</p>
        </div>
        <p className="text-[14px] text-justify my-4">{article.content}</p>
        <p className="text-[14px] text-justify">{article.content2}</p>

        <div className="flex justify-between mt-4 ">
          {prevArticle ? (
            <Link href={`/articles/${prevArticle.id}`} className="text-[#344054] text-[14px] border rounded p-[4px]">
              &larr; Previous
            </Link>
          ) : (
            <div /> // Empty div to maintain layout when no previous article
          )}
          {nextArticle ? (
            <Link href={`/articles/${nextArticle.id}`} className="text-[#344054] text-[14px] border rounded p-[4px]">
              Next  &rarr;
            </Link>
          ) : (
            <div /> // Empty div to maintain layout when no next article
          )}
        </div>
      </div>
      <Tech />
      <Footer />
    </main>
  );
};

export default ArticlePage;
