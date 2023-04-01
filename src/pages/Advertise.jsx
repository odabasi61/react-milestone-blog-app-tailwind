import { Link } from "react-router-dom";

const Advertise = () => {
  return (
    <div className="p-4">
      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">Advertise with Us</h4>
        <p className="text-sm lg:text-lg">
          Welcome to Insightful Views, a blog that offers readers a wide range
          of engaging and informative content on a variety of topics. Our
          readership is diverse and includes individuals from all walks of life
          who are interested in learning more about the world around them.
        </p>
        <p className="text-sm lg:text-lg">
          We are excited to offer several different types of advertising options
          that can help you reach your target audience and achieve your
          marketing goals. Whether you're looking to promote your brand, drive
          traffic to your website, or increase your social media following, we
          have a package that can meet your needs.
        </p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">Banner Ads:</h4>
        <p className="text-sm lg:text-lg">
          Our banner ads are prominently displayed on our homepage and blog
          posts. With an average click-through rate of 2%, these ads are an
          effective way to increase brand awareness and drive traffic to your
          website. We offer two sizes of banner ads:
        </p>
        <p className="text-sm lg:text-lg">- 728x90 pixels: $200 per month</p>
        <p className="text-sm lg:text-lg">- 300x250 pixels: $150 per month</p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">Sponsored Posts:</h4>
        <p className="text-sm lg:text-lg">
          Sponsored posts are a great way to promote your brand or product to
          our readers. We offer well-written and engaging posts that will be
          published on our blog and shared on our social media channels.
          Sponsored posts can include up to three links to your website or
          product, and we guarantee at least 500 views for each post.
        </p>
        <p className="text-sm lg:text-lg">- Sponsored post: $250 per post</p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">
          Social Media Promotion:
        </h4>
        <p className="text-sm lg:text-lg">
          Our social media promotion package includes three social media posts (
          <Link
            className="text-blue-800 font-bold"
            to={"https://github.com/odabasi61"}
          >
            GitHub
          </Link>
          ,{" "}
          <Link
            className="text-blue-800 font-bold"
            to={"https://www.linkedin.com/in/ali-odaba%C5%9F%C4%B1/"}
          >
            LinkedIn
          </Link>
          , and{" "}
          <Link
            className="text-blue-800 font-bold"
            to={"https://www.instagram.com/aliodabas_a/"}
          >
            Instagram
          </Link>
          ) promoting your brand or product. We will also include a link to your
          website or product in each post.
        </p>
        <p className="text-sm lg:text-lg">
          - Social media promotion: $100 per month
        </p>
        <p className="text-sm lg:text-lg">
          If you're interested in advertising with us or have any questions,
          please contact us using the form{" "}
          <Link className="font-bold text-blue-950 underline" to={"/contact"}>
            here
          </Link>
          . We're happy to work with you to create a package that meets your
          needs and budget.
        </p>
      </div>
    </div>
  );
};

export default Advertise;
