import i18next from "i18next";
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
         intro_h1: "BH HERITAGE AR",
         intro_p: "Discover the rich cultural heritage of Bosnia and Herzegovina in a different and interesting way with the BH Heritage Augmented Reality application.",
         about_h1: "ABOUT AR APPLICATION",
         about_p1: "Preserving cultural heritage is a vital part of preserving the history of a country. BH Heritage AR application offers a captivating and interactive experience of Bosnia and Herzegovina's heritage. Through the use of augmented reality, you can explore various objects of BH heritage in an engaging and immersive manner, while also gaining in-depth knowledge about them.",
         about_p2: "In order for the application to work, you need to print or prepare images (AR postcards) of cultural heritage objects on other device that are available in AR postcards gallery. After starting the application, an interactive map of Bosnia and Herzegovina is presented where you should choose one of the objects you want to explore more. After choosing the object, scan the corresponding image. The 3D model of chosen object is shown. For more information and details about each object, use help and information buttons.",
         download_p: "Application available for Android and iOS devices",
         gallery_h1: "AR POSTCARDS GALLERY",
         contact_h1: "CONTACT",
         nav1: "ABOUT",
         nav2: "DOWNLOAD",
         nav3: "GALLERY",
         nav4: "CONTACT"
        }
      },
      bs: {
        translation: {
         intro_h1: "BH BAŠTINA AR",
         intro_p: "Otkrijte bogatu kulturnu baštinu Bosne i Hercegovine na drugačiji i zanimljiv način uz Augmented Reality aplikaciju.",
         about_h1: "O AR APLIKACIJI",
         about_p1: "Očuvanje kulturne baštine je vitalni dio očuvanja historije jedne zemlje. Aplikacija BH Baština AR na interaktivan način, uz korištenje proširene stvarnosti, omogućava istraživanje i sticanje novog znanja o različitim objektima kulturnog naslijeđa Bosne i Hercegovine.",
         about_p2: "Da bi aplikacija radila potrebno je da odštampate ili pripremite slike (AR razglednice) objekata kulturne baštine na drugom uređaju. Razglednice su dostupne u galeriji. Nakon pokretanja aplikacije, prikazuje se interaktivna mapa Bosne i Hercegovine na kojoj je potrebno odabrati objekat koji želite više istražiti. Nakon odabira objekta, skenirajte odgovarajuću razglednicu. Prikazat će se 3D model odabranog objekta. Za više informacija i detalja o svakom objektu koristite dugmad za pomoć i informacije.",
         download_p: "Aplikacija dostupna za Android i iOS uređaje",
         gallery_h1: "GALERIJA AR RAZGLEDNICA",
         contact_h1: "KONTAKT",
         nav1: "O APLIKACIJI",
         nav2: "DOWNLOAD",
         nav3: "GALERIJA",
         nav4: "KONTAKT"
        }       
      },
    }
  });

export default i18next;