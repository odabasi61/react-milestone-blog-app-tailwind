import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="p-4">
      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">
          Privacy Policy for Insightful Views
        </h4>
        <p className="text-sm lg:text-lg">
          At Insightful Views, accessible from{" "}
          <Link className="text-blue-950 underline font-bold">
            www.insightfulviews.com
          </Link>
          , one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is
          collected and recorded by Insightful Views and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through email at
          <Link className="text-blue-950 underline font-bold">
            info@insightfulviews.com
          </Link>
          .
        </p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">Log Files</h4>
        <p className="text-sm lg:text-lg">
          Insightful Views follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services' analytics. The
          information collected by log files include internet protocol{" "}
          <b>(IP)</b>
          addresses, browser type, Internet Service Provider <b>(ISP)</b>, date
          and time stamp, referring/exit pages, and possibly the number of
          clicks. These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users' movement on the website, and
          gathering demographic information.
        </p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">
          Cookies and Web Beacons
        </h4>
        <p className="text-sm lg:text-lg">
          Like any other website, Insightful Views uses 'cookies'. These cookies
          are used to store information including visitors' preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information.
        </p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">Privacy Policies</h4>
        <p className="text-sm lg:text-lg">
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Insightful Views.
        </p>
        <p className="text-sm lg:text-lg">
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Insightful Views, which are
          sent directly to users' browser. They automatically receive your IP
          address when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>
        <p className="text-sm lg:text-lg">
          Note that Insightful Views has no access to or control over these
          cookies that are used by third-party advertisers.
        </p>
      </div>

      <div className="p-4 bg-white/40 rounded-lg mb-4">
        <h4 className="font-bold pb-2 text-lg md:text-xl">
          Third Party Privacy Policies
        </h4>
        <p className="text-sm lg:text-lg">
          Insightful Views's Privacy Policy does not apply to other advertisers
          or websites. Thus, we are advising you to consult the respective
          Privacy Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
