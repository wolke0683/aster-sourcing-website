// src/pages/Blog.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Global Sourcing in 2024",
      excerpt: "Explore the latest trends and predictions in global sourcing and supply chain management.",
      date: "2024-01-15",
      readTime: "5 min read",
    },
    {
      title: "How to Choose the Right Manufacturing Partner",
      excerpt: "Key factors to consider when selecting a manufacturing partner for your business.",
      date: "2024-01-10",
      readTime: "4 min read",
    },
    {
      title: "Quality Control Best Practices",
      excerpt: "Essential quality control measures to ensure product excellence.",
      date: "2024-01-05",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Blog & Resources</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <div className="text-sm text-gray-500">
                  {post.date} · {post.readTime}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to="#"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;