export const Banner = ({ srcBanner, className }) => {
  return (
    <img
      src={srcBanner}
      alt="Bannière de la page"
      className={`bannerPicture ${className}`}
    />
  );
};
