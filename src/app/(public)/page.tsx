import { getPosts,searchPosts } from '@/lib/post'
import PostCard from '@/components/post/PostCard'
import { Post } from '@/types/post'
type SearchParams = { search? : string }

export default async function PostsPage(
  {searchParams}: {searchParams: Promise<SearchParams>}
) {
  const query =await searchParams
  const posts=await getPosts() as Post[]
  return (
    <>
      <div className='container mx-auto px-4 py-8'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                    ))}
         </div>
      </div>
    </>
  );
}
