import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Grid } from "@/components/Grid";
import { useEffect, useState } from "react";
import "./globals.css";
import "./keyframes.css";

function AspectRatioTracker() {
  const [aspectRatio, setAspectRatio] = useState(null);

  useEffect(() => {
    function calculateAspectRatio() {
      return window.innerWidth / window.innerHeight;
    }

    function handleResize() {
      setAspectRatio(calculateAspectRatio());
    }

    if (typeof window !== "undefined") {
      setAspectRatio(calculateAspectRatio());
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return aspectRatio;
}

export default function Home({ productData }) {
  const aspectRatio = AspectRatioTracker();

  let flexLayout;

  if (aspectRatio > 4) {
    // Extremely wide screens (e.g., 48:9 or wider)
    flexLayout = "0 0 4.16%";
  } else if (aspectRatio > 2) {
    // Wide screens (e.g., 32:9 or wider)
    flexLayout = "0 0 8.33%";
  } else if (aspectRatio > 1.5) {
    // Screens with aspect ratio between 16:9 and 32:9
    flexLayout = "0 0 16.66%";
  } else {
    // Screens with aspect ratio less than 16:9
    flexLayout = "0 0 33.33%";
  }

  return (
    <>
      <div className="header__div">
        {aspectRatio > 4 && (
          <>
            <Header />
          </>
        )}
        {aspectRatio > 3 && (
          <>
            <Header />
          </>
        )}
        {aspectRatio > 1.5 && (
          <>
            <Header />
          </>
        )}
      </div>
      <Grid flexLayout={flexLayout} productData={productData}></Grid>
      <div className="footer__div">
        {aspectRatio > 4 && (
          <>
            <Footer />
          </>
        )}
        {aspectRatio > 3 && (
          <>
            <Footer />
          </>
        )}
        {aspectRatio > 1.5 && (
          <>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  async function fetchProductData() {
    try {
      const response = await fetch(
        "http://portal.visiobox.ru/docs/projects/meln/response_sample.json"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product data:", error);
      return null;
    }
  }

  const productData = await fetchProductData();

  return {
    props: {
      productData,
    },
  };
}
