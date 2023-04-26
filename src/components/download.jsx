import {
  GooglePlayButton,
  AppStoreButton,
  ButtonsContainer,
} from "react-mobile-app-button";
export const DownloadButtons = () => {
  const APKUrl =
    "";
  const iOSUrl = "";
  return (
    <ButtonsContainer>
      <GooglePlayButton
        url={APKUrl}
        theme={"dark"}
        className={"custom-style"}
      />
      <AppStoreButton
        url={iOSUrl}
        theme={"dark"}
        className={"custom-style"}
      />
    </ButtonsContainer>
  );
};