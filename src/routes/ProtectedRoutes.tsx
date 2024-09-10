import React from "react";
import { FiList, FiShoppingCart, FiBox, FiUsers, FiUserPlus, FiEdit, FiPackage, FiArchive, FiShield, FiShoppingBag,  } from 'react-icons/fi'; 
import { BsFillBagPlusFill } from "react-icons/bs";
// Dashboard
import EventManagement from "../dashboard/EventManagement";
import SalesMonitoring from "../dashboard/SalesMonitoring";
import WebsiteAnalytics from "../dashboard/WebsiteAnalytics";
import FinanceMonitoring from "../dashboard/FinanceMonitoring";
import Cryptocurrency from "../dashboard/Cryptocurrency";
import HelpdeskService from "../dashboard/HelpdeskService";
import StorageManagement from "../dashboard/StorageManagement";
import ProductManagement from "../dashboard/ProductManagement";



// Apps
import GalleryMusic from "../apps/GalleryMusic";
import GalleryVideo from "../apps/GalleryVideo";
import Tasks from "../apps/Tasks";
import Contacts from "../apps/Contacts";
import Chat from "../apps/Chat";
import AppCalendar from "../apps/AppCalendar";
import Email from "../apps/Email";
import FileManager from "../apps/FileManager";

// Pages
import Pricing from "../pages/Pricing";
import Faq from "../pages/Faq";
import Profile from "../pages/Profile";
import People from "../pages/People";
import Activity from "../pages/Activity";
import Events from "../pages/Events";
import Settings from "../pages/Settings";

import PurchaseOrder from "../components/orderManagement/PurchaseOrder";
import OrderHistory from "../components/orderManagement/OrderHistory";
import ManageStore from "../components/storeManagement/ManageStore";
import NewStore from "../components/storeManagement/NewStore";

import PurchasePlanning from "../components/orderManagement/PurchasePlanning";
import NewPurchasePlanning from "../components/orderManagement/NewPurchasePlanning";

import Category from "../components/productManagement/Category";
import Brand from "../components/productManagement/Brand";
import NewBrand from "../components/productManagement/NewBrand";

import NewProduct from "../components/productManagement/NewProduct";
import Product from "../components/productManagement/Product";



import UserGrid from "../components/userManagement/UserGrid";
import AddEditUser from "../components/userManagement/AddEditUser";
import RolesAndRights from "../components/userManagement/RolesAndRights";
import EditProduct from "@/components/productManagement/EditProduct";




// UI Elements
// import LayoutColumns from "../docs/LayoutColumns";
// import LayoutGrid from "../docs/LayoutGrid";
// import LayoutGutters from "../docs/LayoutGutters";
// import Accordions from "../docs/Accordions";
// import Alerts from "../docs/Alerts";
// import Avatars from "../docs/Avatars";
// import Badges from "../docs/Badges";
// import Breadcrumbs from "../docs/Breadcrumbs";
// import Buttons from "../docs/Buttons";
// import Cards from "../docs/Cards";
// import Carousels from "../docs/Carousels";
// import Dropdowns from "../docs/Dropdowns";
// import Images from "../docs/Images";
// import Listgroup from "../docs/Listgroup";
// import Markers from "../docs/Markers";
// import Modals from "../docs/Modals";
// import NavTabs from "../docs/NavTabs";
// import OffCanvas from "../docs/OffCanvas";
// import Paginations from "../docs/Paginations";
// import Placeholders from "../docs/Placeholders";
// import Popovers from "../docs/Popovers";
// import Progress from "../docs/Progress";
// import Spinners from "../docs/Spinners";
// import Toasts from "../docs/Toasts";
// import Tooltips from "../docs/Tooltips";
// import Tables from "../docs/Tables";
// import FormElements from "../docs/FormElements";
// import FormSelects from "../docs/FormSelects";
// import FormChecksRadios from "../docs/FormChecksRadios";
// import FormRange from "../docs/FormRange";
// import FormPickers from "../docs/FormPickers";
// import FormLayouts from "../docs/FormLayouts";
// import UtilBackground from "../docs/UtilBackground";
// import UtilBorder from "../docs/UtilBorder";
// import UtilColors from "../docs/UtilColors";
// import UtilDivider from "../docs/UtilDivider";
// import UtilFlex from "../docs/UtilFlex";
// import UtilSizing from "../docs/UtilSizing";
// import UtilSpacing from "../docs/UtilSpacing";
// import UtilOpacity from "../docs/UtilOpacity";
// import UtilPosition from "../docs/UtilPosition";
// import UtilTypography from "../docs/UtilTypography";
// import UtilShadows from "../docs/UtilShadows";
// import UtilExtras from "../docs/UtilExtras";
// import ApexCharts from "../docs/ApexCharts";
// import ChartJs from "../docs/ChartJs";
// import MapLeaflet from "../docs/MapLeaflet";
// import MapVector from "../docs/MapVector";
// import IconRemix from "../docs/IconRemix";
// import IconFeather from "../docs/IconFeather";


import { HiOutlineShoppingBag } from "react-icons/hi2";

const protectedRoutes = [
  { path: "dashboard/finance", element: <FinanceMonitoring /> },
  { path: "dashboard/events", element: <EventManagement /> },
  { path: "dashboard/sales", element: <SalesMonitoring /> },
  { path: "dashboard/analytics", element: <WebsiteAnalytics /> },
  { path: "dashboard/crypto", element: <Cryptocurrency /> },
  { path: "dashboard/helpdesk", element: <HelpdeskService /> },
  { path: "dashboard/storage", element: <StorageManagement /> },
  { path: "dashboard/product", element: <ProductManagement /> },


  { path: "product/category", element: <Category icon={FiArchive} title="Product Category" /> },
  { path: "order/purchase-planning", element: <PurchasePlanning icon={FiShoppingCart} title="Purchase Planning" /> },
  { path: "order/new-purchase-planning", element: <NewPurchasePlanning icon={FiShoppingCart} title="New Purchase Planning" /> },
  { path: "order/purchase-order", element: <PurchaseOrder icon={FiShoppingCart} title="Purchase Order" /> },
  { path: "order/order-history", element: <OrderHistory icon={FiArchive} title="Order History" /> },

  { path: "store/manage-store", element: <ManageStore icon={FiPackage} title="Manage Store" /> },
  { path: "store/new-store", element: <NewStore icon={FiPackage} title="New Store" /> },

  { path: "product/category", element: <Category icon={FiArchive} title="Product Category" /> },
  { path: "product/brand", element: <Brand icon={FiList} title="Product Brand" /> },
  { path: "product/new-brand", element: <NewBrand icon={FiList} title="New Brand" /> },
  { path: "product/new-product", element: <NewProduct icon={BsFillBagPlusFill} title="New Product" /> },
  { path: "product/list", element: <Product icon={HiOutlineShoppingBag} title="Product" /> },
  { path: "product/edit-product/:id", element: <EditProduct icon={FiEdit} title="Edit Product" /> },

  { path: "user/user-grid", element: <UserGrid icon={FiUsers} title="User Grid" /> },
  { path: "user/new-user", element: <AddEditUser icon={FiUserPlus} title="New User" /> },
  { path: "user/roles-and-rights", element: <RolesAndRights icon={FiShield} title="Roles and Rights" /> },



  { path: "apps/gallery-music", element: <GalleryMusic /> },
  { path: "apps/gallery-video", element: <GalleryVideo /> },
  { path: "apps/tasks", element: <Tasks /> },
  { path: "apps/contacts", element: <Contacts /> },
  { path: "apps/chat", element: <Chat /> },
  { path: "apps/calendar", element: <AppCalendar /> },
  { path: "apps/email", element: <Email /> },
  { path: "apps/file-manager", element: <FileManager /> },
  { path: "pages/pricing", element: <Pricing /> },
  { path: "pages/faq", element: <Faq /> },
  { path: "pages/profile", element: <Profile /> },
  { path: "pages/people", element: <People /> },
  { path: "pages/activity", element: <Activity /> },
  { path: "pages/events", element: <Events /> },
  { path: "pages/settings", element: <Settings /> },
  // { path: "docs/layout/grid", element: <LayoutGrid /> },
  // { path: "docs/layout/columns", element: <LayoutColumns /> },
  // { path: "docs/layout/gutters", element: <LayoutGutters /> },
  // { path: "docs/com/accordions", element: <Accordions /> },
  // { path: "docs/com/alerts", element: <Alerts /> },
  // { path: "docs/com/avatars", element: <Avatars /> },
  // { path: "docs/com/badge", element: <Badges /> },
  // { path: "docs/com/breadcrumbs", element: <Breadcrumbs /> },
  // { path: "docs/com/buttons", element: <Buttons /> },
  // { path: "docs/com/cards", element: <Cards /> },
  // { path: "docs/com/carousel", element: <Carousels /> },
  // { path: "docs/com/dropdown", element: <Dropdowns /> },
  // { path: "docs/com/images", element: <Images /> },
  // { path: "docs/com/listgroup", element: <Listgroup /> },
  // { path: "docs/com/markers", element: <Markers /> },
  // { path: "docs/com/modal", element: <Modals /> },
  // { path: "docs/com/navtabs", element: <NavTabs /> },
  // { path: "docs/com/offcanvas", element: <OffCanvas /> },
  // { path: "docs/com/pagination", element: <Paginations /> },
  // { path: "docs/com/placeholders", element: <Placeholders /> },
  // { path: "docs/com/popovers", element: <Popovers /> },
  // { path: "docs/com/progress", element: <Progress /> },
  // { path: "docs/com/spinners", element: <Spinners /> },
  // { path: "docs/com/toasts", element: <Toasts /> },
  // { path: "docs/com/tooltips", element: <Tooltips /> },
  // { path: "docs/com/tables", element: <Tables /> },
  // { path: "docs/form/elements", element: <FormElements /> },
  // { path: "docs/form/selects", element: <FormSelects /> },
  // { path: "docs/form/checksradios", element: <FormChecksRadios /> },
  // { path: "docs/form/range", element: <FormRange /> },
  // { path: "docs/form/pickers", element: <FormPickers /> },
  // { path: "docs/form/layouts", element: <FormLayouts /> },
  // { path: "docs/chart/apex", element: <ApexCharts /> },
  // { path: "docs/chart/chartjs", element: <ChartJs /> },
  // { path: "docs/map/leaflet", element: <MapLeaflet /> },
  // { path: "docs/map/vector", element: <MapVector /> },
  // { path: "docs/icon/remix", element: <IconRemix /> },
  // { path: "docs/icon/feather", element: <IconFeather /> },
  // { path: "docs/util/background", element: <UtilBackground /> },
  // { path: "docs/util/border", element: <UtilBorder /> },
  // { path: "docs/util/colors", element: <UtilColors /> },
  // { path: "docs/util/divider", element: <UtilDivider /> },
  // { path: "docs/util/flex", element: <UtilFlex /> },
  // { path: "docs/util/sizing", element: <UtilSizing /> },
  // { path: "docs/util/spacing", element: <UtilSpacing /> },
  // { path: "docs/util/opacity", element: <UtilOpacity /> },
  // { path: "docs/util/position", element: <UtilPosition /> },
  // { path: "docs/util/typography", element: <UtilTypography /> },
  // { path: "docs/util/shadows", element: <UtilShadows /> },
  // { path: "docs/util/extras", element: <UtilExtras /> }
]

export default protectedRoutes;