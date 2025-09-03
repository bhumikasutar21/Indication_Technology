import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "ai-agents-future",
    title: "AI Agents: The Future of Intelligent Automation",
  },
  { id: "web-dev-trends", title: "How AI is Changing Web Development" },
  { id: "mobile-app-importance", title: "Why Every Brand Needs a Mobile App" },
];

const BlogList = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <ul className="space-y-6">
        {blogPosts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <Link
              to={`/blog/${post.id}`}
              className="text-xl font-semibold text-brand-purple hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
