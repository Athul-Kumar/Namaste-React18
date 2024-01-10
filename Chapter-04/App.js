import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Low Level planning
 *
 * Header
 *  -Logo
 *  -Nav-list
 *    -Home
 *    -About
 *    -Contact
 *    -Cart
 *
 * Body
 *  -Search Input
 *  - restaurant Card
 *      -Img
 *      -Name of rest
 *      -rating
 *      -cuzienes
 *      -Delivery TIme
 *
 * Footer
 *  -Copy right
 *  -links
 *  -Address
 *  - contact
 */

const HeaderComponent = () => {
  return (
    <div className="Header">
      <img
        className="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJy_ULdo38Y4k3GeVfWXME7so5WLIvrZDQWsTjazyoG3M1lZSStSlP3aNZtvE67hJe94&usqp=CAU"
        alt="Logo of the restaurant"
      />
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const BodyComponent = (props) => {
  const { resDataList } = props;
  return (
    <div className="Body">
      <h2>Search Inputs</h2>
      <div className="res-Container">
        {resDataList.map((resInfos) => (
          <RestaurantCard key={resInfos.info.id} resList={resInfos} />
        ))}
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resList } = props;
  const {
    name,
    cuisines,
    avgRating,
    locality,
    areaName,
    costForTwo,
    cloudinaryImageId,
  } = resList?.info;
  const { deliveryTime } = resList?.info?.sla;

  return (
    <div className="res-Card">
      <img
        className="card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h3>{name} Restaurant</h3>
      <h4>Rating: {avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{locality}</h4>
      <h4>{areaName}</h4>
      <h5>Delivery in {deliveryTime} Minutes</h5>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

const AppLayout = () => {
  const resData = [
    {
      info: {
        id: "719028",
        name: "Big Mouth",
        cloudinaryImageId: "ec22ec453eaa9f54fb97af5d25898f77",
        locality: "Byepass Road",
        areaName: "Thiruvalla Town",
        costForTwo: "₹450 for two",
        cuisines: ["Biryani", "Chinese", "Beverages"],
        avgRating: 4.2,
        parentId: "350426",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 9.9,
          serviceability: "SERVICEABLE",
          slaString: "31 mins",
          lastMileTravelString: "9.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/big-mouth-byepass-road-thiruvalla-town-thiruvalla-719028",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "637181",
        name: "Bar-B-Que Inn Family Restaurant",
        cloudinaryImageId: "cwbtlkd1ohyqhmkqctn9",
        locality: "Kollam - Theni Highway",
        areaName: "Muthoor",
        costForTwo: "₹350 for two",
        cuisines: ["Barbecue", "Chinese", "North Indian"],
        avgRating: 4.2,
        parentId: "384733",
        avgRatingString: "4.2",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 9.3,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "9.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 22:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/bar-b-que-inn-family-restaurant-kollam-theni-highway-muthoor-thiruvalla-637181",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "502842",
        name: "Aramana Restaurant",
        cloudinaryImageId: "hfrdnywvq7styuosba4e",
        locality: "Perumthuruthy",
        areaName: "Perumthuruthy",
        costForTwo: "₹400 for two",
        cuisines: ["Chinese", "Kerala", "Biryani"],
        avgRating: 4.3,
        parentId: "35627",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 8.7,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "8.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/aramana-restaurant-perumthuruthy-thiruvalla-502842",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "278124",
        name: "Maa Hotel",
        cloudinaryImageId: "nzqppb8yet1rvqjcn6ep",
        locality: "Ramanchira",
        areaName: "Ramanchira",
        costForTwo: "₹400 for two",
        cuisines: ["South Indian", "Chinese", "Biryani"],
        avgRating: 4.1,
        parentId: "127690",
        avgRatingString: "4.1",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 10.1,
          serviceability: "SERVICEABLE",
          slaString: "33 mins",
          lastMileTravelString: "10.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/maa-hotel-ramanchira-thiruvalla-278124",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "491982",
        name: "Al Razi",
        cloudinaryImageId: "uwgnnjjagcubzhwv52yu",
        locality: "Thiruvalla Town",
        areaName: "Muthoor",
        costForTwo: "₹500 for two",
        cuisines: ["Arabian", "Lebanese"],
        avgRating: 4.4,
        parentId: "295030",
        avgRatingString: "4.4",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 10.3,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "10.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/al-razi-town-muthoor-thiruvalla-491982",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "629586",
        name: "Avees Puttu House",
        cloudinaryImageId: "ewa6ehbkaturwcjwarvr",
        locality: "Perumthuruthy",
        areaName: "Thiruvalla",
        costForTwo: "₹400 for two",
        cuisines: ["Chinese", "Indian", "Beverages"],
        avgRating: 4.5,
        parentId: "357925",
        avgRatingString: "4.5",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 8.7,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "8.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 21:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/avees-puttu-house-perumthuruthy-thiruvalla-thiruvalla-629586",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "284241",
        name: "Aryaas Park",
        cloudinaryImageId: "sp5fiucb9500nwxfdr2y",
        locality: "M C Road",
        areaName: "Thiruvalla Town",
        costForTwo: "₹250 for two",
        cuisines: ["South Indian"],
        avgRating: 4.4,
        veg: true,
        parentId: "36559",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 10.4,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "10.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 21:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/aryaas-park-m-c-road-thiruvalla-town-thiruvalla-284241",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "489602",
        name: "Hotel Vani",
        cloudinaryImageId: "riko7emhl6knnlgmf7gf",
        areaName: "Changanassery",
        costForTwo: "₹300 for two",
        cuisines: ["Pastas", "Chinese", "North Indian", "Biryani"],
        avgRating: 4.3,
        parentId: "293670",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 40,
          lastMileTravel: 7.6,
          serviceability: "SERVICEABLE",
          slaString: "40 mins",
          lastMileTravelString: "7.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 22:05:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/hotel-vani-changanassery-thiruvalla-489602",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "690397",
        name: "Kismat Biriyani",
        cloudinaryImageId: "4ebb07991ac19bd31b4f9f52f156ff8e",
        locality: "Mukkadan Heights",
        areaName: "Changanassery",
        costForTwo: "₹200 for two",
        cuisines: ["Biryani", "Snacks"],
        avgRating: 4.5,
        parentId: "326238",
        avgRatingString: "4.5",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 6.9,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "6.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 21:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kismat-biriyani-mukkadan-heights-changanassery-thiruvalla-690397",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "502851",
        name: "Arcadia Food Court",
        cloudinaryImageId: "wb3nedfpwm5dxelhoc3d",
        locality: "Pandaravakapattom",
        areaName: "Thiruvalla",
        costForTwo: "₹400 for two",
        cuisines: ["Chinese", "South Indian", "Continental"],
        avgRating: 4.4,
        parentId: "35725",
        avgRatingString: "4.4",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 8.9,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "8.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 16:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/arcadia-food-court-pandaravakapattom-thiruvalla-thiruvalla-502851",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "488846",
        name: "Kanthari Restaurant",
        cloudinaryImageId: "zgwskpsfyofocpheifpa",
        locality: "Anandasramam",
        areaName: "Changanassery",
        costForTwo: "₹300 for two",
        cuisines: ["Chinese", "North Indian", "South Indian", "Biryani"],
        avgRating: 4.4,
        parentId: "114800",
        avgRatingString: "4.4",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 7.4,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "7.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 21:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kanthari-restaurant-anandasramam-changanassery-thiruvalla-488846",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "366759",
        name: "Papa Louie's Pizzeria",
        cloudinaryImageId: "szo4effzxbtxucmgkgl1",
        locality: "Scs Junction",
        areaName: "opp. Municipal Park",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Pastas"],
        avgRating: 4.3,
        parentId: "154845",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 41,
          lastMileTravel: 10.7,
          serviceability: "SERVICEABLE",
          slaString: "41 mins",
          lastMileTravelString: "10.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-10 21:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/papa-louies-pizzeria-scs-junction-opp-municipal-park-thiruvalla-366759",
        type: "WEBLINK",
      },
    },
  ];

  return (
    <div className="App">
      <HeaderComponent />
      <BodyComponent resDataList={resData} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
