import AboutPage from "@/components/AboutPage/AboutPage";
import PageHero from "@/components/ui/PageHero/PageHero";
import React from "react";

const page = () => {
  return (
    <>
      <PageHero
        title="Why Career Growth ?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image="https://s3-alpha-sig.figma.com/img/00a5/b5b5/43318549c6c0689292b2836c4f27ba0d?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tv3H0-4kK1t1Dm~ulobp53rhZatynQE7zvGulFI98vK0uZ-ey5e7ZOXegA~wbnilVDTRbD9~AVGZ~iuHqM8BIpj6-mM2lKF~ARHHEu~lD6l1nzyWF3lyeKDjNwXpgzp5EMvYFK3fmj2IIz4uUKIw1RWo~lqX2yTn2I~TUm2U065ymLHrhcEnB4FfnGMRNr5QyWNPkyaL1-kbFK8yI6pgVNwToe-gSgXK8G6WZ9sEd49l4UbOiI4FyU6oY4iQdP8IJbCH0-PeLVLkrJeIlf9mysJr0mYR3SKTUrSLcbWa9IROxCaYyP4lbdzg7mBqG6mDA5TGxZbwirb4KFfK0dUxTA__"
      />
      <AboutPage />
    </>
  );
};

export default page;
