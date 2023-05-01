import { Banner } from "../components/Banner/Banner";
import banner_home from "../assets/banner_home.png";

import { LocationGalery } from "../components/LocationGalery/LocationGalery";

export const HomePage = () => {
  return (
    <div>
      <Banner srcBanner={banner_home} className="homeBanner " />
      <LocationGalery />
    </div>
  );
};
