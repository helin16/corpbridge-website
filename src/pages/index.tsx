import HubSpotForm from "@/components/HubSpotForm";
import {
  PAGE_NAME_ABOUT_US,
  PAGE_NAME_CONTACT_US,
} from "@/components/PageHeader";
import PageHeroPanel from "@/components/PageHeroPanel";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";
import Image from "next/image";

const HomePage = () => {
  return (
    <PageLayout pageTitle={"CorpBridge"}>
      <PageHeroPanel className="bg-[url('/images/slide.jpeg')] bg-center bg-no-repeat bg-cover">
        <div className="min-h-96 lg:h-[700px]"></div>
      </PageHeroPanel>

      <PageSection className="mt-24">
        <h1 className="text-5xl text-center text-blue-400 font-semibold">
          Investment promotion, Australia-China trade
        </h1>
      </PageSection>

      <PageSection className="mt-24">
        <div className="flex justify-center gap-8 flex-col lg:flex-row">
          <div className="lg:w-5/12 flex flex-col gap-6 justify-center">
            {[
              {
                icon: "/images/icon-2.png",
                title: "Education",
                description:
                  "NGM Education Centre, a subsidiary of Corpbridge, is located in Ballarat central, and has reached strategic cooperation with Ballarat Grammar School and Xin Jin Shan Chinese Library, to offer a number of courses suitable for adults and children. It is deeply loved by parents of local students in Ballarat.",
              },
              {
                icon: "/images/icon-1.png",
                title: "Heritage",
                description:
                  "In 2020, Corpbridge acquired a century-old Heritage Chinese house located in the hinterland of the Ballarat gold mining district, built and restored it, and prepared to establish a Chinese museum. The project is of great historical significance, and the rescue and acquisition process has aroused strong local response and won support from local people, media and local government.",
              },
              {
                icon: "/images/icon-2.png",
                title: "Education",
                description:
                  "NGM Education Centre, a subsidiary of Corpbridge, is located in Ballarat central, and has reached strategic cooperation with Ballarat Grammar School and Xin Jin Shan Chinese Library, to offer a number of courses suitable for adults and children. It is deeply loved by parents of local students in Ballarat.",
              },
            ].map((section) => {
              return (
                <div
                  key={section.title}
                  className="pr-10 flex items-start gap-6"
                >
                  <Image
                    width={80}
                    height={80}
                    src={section.icon}
                    alt="icon"
                    className="min-w-[45px]"
                  />
                  <div>
                    <h3 className="text-2xl mb-2">{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:w-3/12 flex gap-6 flex-col">
            <Image
              height={200}
              width={1000}
              alt={"Heritage-1"}
              src={"/images/Heritage-2.jpeg"}
            />
            <Image
              height={1000}
              width={1000}
              alt={"Heritage-2"}
              src={"/images/Heritage-1.jpeg"}
            />
          </div>
        </div>
      </PageSection>

      <div className="bg-[url('/images/slide-bg.jpeg')] bg-cover bg-no-repeat bg-center mt-24">
        <div
          className="py-32 text-center flex justify-center mx-auto"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        >
          <div className="lg:w-1/2 mx-auto text-center lg:px-1 px-8">
            <h1 className="text-4xl py-6">Education</h1>
            <p className="text-lg leading-8">
              NGM Education Centre, a subsidiary of Corpbridge, is located in
              Ballarat central, and has reached strategic cooperation with
              Ballarat Grammar School and Xin Jin Shan Chinese Library, to offer
              a number of courses suitable for adults and children. It is deeply
              loved by parents of local students in Ballarat.
            </p>
          </div>
        </div>
      </div>

      <PageSection
        className="mt-24 text-center"
        innerClassName="lg:w-1/2"
        id={PAGE_NAME_ABOUT_US}
      >
        <h1 className="text-4xl py-6">About Us</h1>
        <p className="text-lg leading-8">
          Founded in 2018, Corpbrige is a joint-stock company dedicated to
          investment, economic and trade, and promoting economic and cultural
          exchanges between Australia and China.
        </p>
      </PageSection>

      <div className="mt-24 flex gap-8 justify-center lg:flex-row flex-col">
        {[
          "/images/image1.jpeg",
          "/images/image2.jpeg",
          "/images/image3.jpeg",
          "/images/image4.jpeg",
        ].map((url) => {
          return (
            <Image
              width={400}
              height={400}
              src={url}
              alt=""
              key={url}
              className="w-full lg:w-1/4"
              style={{ width: "100% !important", height: "auto !important" }}
            />
          );
        })}
      </div>

      <PageSection
        className="mt-24 text-center"
        innerClassName="lg:w-1/2"
        id={PAGE_NAME_CONTACT_US}
      >
        <h1 className="text-center text-5xl mb-16">Contact Us</h1>
        <HubSpotForm formId="dd79b3ca-604a-4b49-b525-1116290e6b36" />
      </PageSection>
    </PageLayout>
  );
};

export default HomePage;
