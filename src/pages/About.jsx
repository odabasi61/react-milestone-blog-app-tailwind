import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";

const About = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 p-4 lg:p-8 2xl:px-48">
        <div className="bg-white/80 rounded-full p-8 text-center w-full lg:w-1/3 shadow-2xl">
          <div>
            <img className="m-auto w-48" src={blog1} alt="logo" />
          </div>
          <h3 className="pt-4 font-bold uppercase text-xl md:text-2xl">
            Insightful Views
          </h3>
          <p className="whitespace-norma px-4 py-4">
            Gain a fresh perspective with Insightful Views
          </p>
        </div>

        <div className="w-full lg:w-2/3 font-bold">
          <p>
            Welcome to Insightful Views! My name is Ali, and I'm the founder of
            this website. I'm a writer and journalist with a passion for sharing
            stories and insights that inspire and inform.
          </p>
          <p className="py-4">
            At Insightful Views, our mission is to provide you with a fresh
            perspective on the world around us. We believe in the power of
            diverse voices and opinions to drive meaningful change.
          </p>
          <p>
            With years of experience in the media industry, I've seen firsthand
            how important it is to have a platform where different views can be
            expressed and debated. That's why we focus on thoughtful,
            well-researched articles and essays that challenge conventional
            wisdom and spark meaningful conversations.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8 p-4 lg:p-8 2xl:px-48">
        <div className="w-full lg:w-2/3 font-bold">
          <p>
            We have a team of talented writers and editors who are dedicated to
            bringing you the best content possible. From deep-dive features to
            quick takes on the latest news, we're always working to provide you
            with fresh, engaging content.
          </p>
          <p className="py-4">
            At Insightful Views, we believe in living our values. We're
            committed to integrity, respect, and empathy. We believe that
            everyone's voice deserves to be heard, and we're dedicated to
            creating a space where that can happen.
          </p>
          <p>
            If you have any questions or comments, please don't hesitate to get
            in touch. You can reach us at hello@insightfulviews.com or on social
            media. Thanks for visiting, and we look forward to sharing more
            insightful views with you!
          </p>
        </div>

        <div className="bg-white/80 rounded-full p-8 text-center w-full lg:w-1/3 shadow-2xl">
          <div>
            <img className="m-auto w-48 relative" src={blog2} alt="logo" />
          </div>
          <h3 className="pt-4 font-bold uppercase text-xl md:text-2xl">
            Insightful Views
          </h3>
          <p className="whitespace-norma px-4 py-4">
            Broaden your horizons with Insightful Views.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
