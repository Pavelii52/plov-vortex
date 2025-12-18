const blogPosts = [
  {
    id: 1,
    title: "Почему рис в плове должен быть рассыпчатым",
    excerpt: "Разбираемся в физике и химии идеального риса. Спойлер: дело не только в сорте.",
    category: "Рецепты",
    readTime: "5 мин",
    image: "https://images.unsplash.com/photo-1596097635121-14b63a7a1b8c?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Легенда о Тамерлане и плове",
    excerpt: "Как великий завоеватель придумал блюдо, которое кормило его армии в походах.",
    category: "Истории",
    readTime: "4 мин",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Зира, барбарис и секретные специи",
    excerpt: "Полный гайд по специям для плова. Что добавлять, а что оставить в магазине.",
    category: "Рецепты",
    readTime: "7 мин",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&h=300&fit=crop",
  },
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <article className="card-menu group cursor-pointer">
    <div className="relative overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          {post.category}
        </span>
      </div>
    </div>
    
    <div className="p-6 space-y-3">
      <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-muted-foreground">{post.readTime} чтения</span>
        <span className="text-primary text-sm font-semibold group-hover:underline">
          Читать →
        </span>
      </div>
    </div>
  </article>
);

const Blog = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Блог
          </span>
          <h2 className="section-title mt-2">
            Рецепты и <span className="golden-text">истории</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Погружаемся в культуру плова: от древних легенд до современных лайфхаков
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            Все статьи
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
