import React from "react";
import TagComp from "../Components/HomeComponents/TagComp";
import SocialComp from "../Components/HomeComponents/SocialComp";
import { Profile } from "../Data/ProfileData";

const Home = () => {
  return (
    <div className="lg:mx-20 md:mx-20 sm:mx-8 home">
      <div className="upper lg:flex lg:items-center mt-4 md:flex md:items-center sm:w-full sm:block">
        <div className="img-container">
          <img
            src={Profile.avatar.srcPath}
            alt={Profile.avatar.caption}
            className="w-[20rem] rounded-full border border-black sm:block sm:m-auto"
          />
        </div>

        <div className="lg:text-left md:text-left ml-8 sm:text-center">
          <div className="sm:block sm:m-auto">
            <h1 className="text-3xl my-2">{Profile.firstName} {Profile.lastName}</h1>
          </div>
          <div className="lg:m-0 md:m-0 sm:block sm:m-auto sm:w-fit">
            <h2 className="flex text-xl text-gray-500 my-2">{Profile.position.icon} {Profile.position.text}</h2>
          </div>
          <div className="lg:m-0 md:m-0 sm:block sm:m-auto sm:w-fit">
            <h3 className="flex text-xl my-2 font-light">{Profile.location.icon} {Profile.location.text}</h3>
          </div>

          <div className="my-2">
            {Profile.tags.map((tag) => (
              <TagComp {...tag} key={tag.id} />
            ))}
          </div>

          <div className="my-3 links">
            {Profile.socialLink.map((social) => (
              <SocialComp key={social.id} {...social} />
            ))}
          </div>

        </div>
      </div>
      <div className="mt-12">
        <p>{Profile.summary}</p>
      </div>
      <div className="flex items-center justify-center mt-8">
        {Profile.socialLink.map((social) => (
          <SocialComp key={social.id} {...social} />
        ))}
      </div>
    </div>
  );
};

export default Home;
