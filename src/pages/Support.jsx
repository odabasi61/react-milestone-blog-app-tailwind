import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="p-4">
      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">
          How do I create an account on Insightful Views Blog?
        </h4>
        <p className="text-sm lg:text-lg">
          Creating an account on Insightful Views Blog is easy! Simply click on
          the "Sign Up" button located in the upper right-hand corner of the
          page and fill out the registration form. Once you've registered,
          you'll be able to access all of our content, leave comments, and
          participate in our community.
        </p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">
          How do I find content on a specific topic?
        </h4>
        <p className="text-sm lg:text-lg">
          To find content on a specific topic, you can use the search bar
          located in the upper right-hand corner of the page. Type in a keyword
          or phrase related to the topic you're interested in, and our search
          algorithm will provide you with a list of relevant articles.
        </p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">
          How can I contribute to Insightful Views Blog?
        </h4>
        <p className="text-sm lg:text-lg">
          We welcome contributions from our readers! If you have a topic you'd
          like to write about, or if you'd like to submit a guest post, please
          register our webpage for guidelines and instructions.
        </p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">
          How can I contact Insightful Views Blog?
        </h4>
        <p className="text-sm lg:text-lg">
          If you have a question or comment, or if you need technical support,
          please visit our "Contact Us" page for a list of ways to get in touch.
          You can send us an email, leave a message on our social media
          accounts, or fill out our online contact form.
        </p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">
          How can I stay up-to-date on the latest content from Insightful Views
          Blog?
        </h4>
        <p className="text-sm lg:text-lg">
          To stay up-to-date on the latest content from Insightful Views Blog,
          you can subscribe to our newsletter. We also post updates on our
          social media accounts, so be sure to follow us on{" "}
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
          .
        </p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">
          How can I advertise on Insightful Views Blog?
        </h4>
        <p className="text-sm lg:text-lg">
          If you're interested in advertising on Insightful Views Blog, please
          visit our "Advertising" page for more information about our rates and
          guidelines.
        </p>
      </div>
    </div>
  );
};

export default Support;
