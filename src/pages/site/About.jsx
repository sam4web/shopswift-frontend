import aboutImage from "@/assets/images/about-image.jpg";
import useTitle from "@/hooks/useTitle.js";

const About = () => {
  useTitle("About Us | ShopSwift");
  return (
    <>
      <section>
        <div className="section-container">
          <div className="grid items-center gap-10 lg:gap-14 md:grid-cols-2">
            <div className="flex">
              <img className="rounded-lg shadow-2xl" src={aboutImage} alt="about-image" />
            </div>

            <div className="space-y-3 lg:space-y-5 w-full max-w-md md:max-w-lg">
              <h1
                className="text-3xl lg:text-5xl dark:text-light text-dark-secondary font-extrabold mb-4"
              >
                About Us
              </h1>
              <div className="font-normal text-base lg:text-lg dark:text-light space-y-3">
                <p>
                  Welcome to SwiftShop, a personal project showcasing a simple and
                  elegant e-commerce website built using MERN Stack. This project serves
                  as a learning exercise to explore web development fundamentals by
                  creating a functional online store with product listings, user
                  authentication, shopping cart, and order management.
                </p>
                <p>
                  Explore the {" "}
                  <a
                    href="https://github.com/sam4web/shopswift-frontend"
                    className="text-primary font-medium hover:underline"
                    target="_blank"
                  >
                    source code
                  </a>{" "}
                  on GitHub to see the implementation details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light dark:bg-dark-primary py-1">
        <div className="section-container">
          <h3 className="text-3xl lg:text-4xl text-gray font-extrabold dark:text-light">
            Our Story
          </h3>
          <hr className="line-break" />

          <div
            className="space-y-4 lg:space-y-7 mt-6 font-normal dark:text-light text-base lg:text-lg"
          >
            <p className="float-left max-w-2xl">
              Ducimus non recusandae, voluptas itaque tempore, reprehenderit
              laudantium amet, iure neque nostrum animi architecto nihil aperiam.
              Voluptatibus culpa cum autem aspernatur. Veritatis, vel ullam cupiditate
              similique quo, iste quia accusamus eligendi vero dolorem in, unde aut
              consequatur. Magni maiores facere earum sapiente iusto alias aspernatur
              dolor illum dicta? Tempore odio odit cum pariatur sed. Voluptatem,
              molestias ipsum. Amet, ab.
            </p>
            <div className="clear-both"></div>

            <p className="float-right max-w-2xl">
              Deleniti voluptas consequatur iusto, ut expedita debitis, ratione
              asperiores molestiae praesentium voluptates nobis dolores, fugiat nisi
              unde nulla soluta iste. Modi cumque pariatur voluptatibus, magni maxime
              optio dolorem ipsum distinctio sint, odit illum
            </p>
            <div className="clear-both"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;