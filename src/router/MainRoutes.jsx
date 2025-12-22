import React from "react";
import { Routes, Route } from "react-router-dom";

import ROUTES from "./routes";



//pages
import Home1 from "../pages/home/Home1";
import Home2 from "../pages/home/Home2";
import Home3 from "../pages/home/Home3";
import Home4 from "../pages/home/Home4";

import Services1 from "../pages/services/Services1";
import Services2 from "../pages/services/Services2";
import ServicesDetails from "../pages/services/ServicesDetails";
import StudentRegistration from "../pages/services/StudentRegistration";

import CarPage from "../pages/faqs/CartPage";
import Chckout from "../pages/faqs/Checkout";
import EducationShop from "../pages/faqs/EducationShop";
import Faq from "../pages/faqs/Faqs";
import PricingTables from "../pages/faqs/PricingTables";
import ShopDetails from "../pages/faqs/ShopDetails";
import SignIn from "../pages/faqs/SignIn";
import SignUp from "../pages/faqs/SignUp";
import Testimonial from "../pages/faqs/Testimonial";

import Event from "../pages/events/Event";
import EventDetails from "../pages/events/EventDetails";
import InstructorDetails from "../pages/events/InstructorDetails";
import InstructorRegistration from "../pages/events/InstructorRegistration";
import Instrudtor from "../pages/events/Instrudtor";

import BlogDetails from "../pages/blog/BlogDetails";
import BlogSidebar from "../pages/blog/BlogSidebar";
import BlogStyle1 from "../pages/blog/BlogStyle1";
import BlogStyle2 from "../pages/blog/BlogStyle2";
import Contact from "../pages/blog/ContactUs";




export default function MainRoutes() {
    return (
        <>
        <Routes>
            {/* Home pages */}
            <Route path={ROUTES.HOME1} element={ <Home1 /> }></Route>
            <Route path={ROUTES.HOME2} element={ <Home2 /> }></Route>
            <Route path={ROUTES.HOME3} element={ <Home3 /> }></Route>
            <Route path={ROUTES.HOME4} element={ <Home4 />}></Route>

            {/* services */ }
            <Route path={ROUTES.SERVICES1} element={ <Services1 /> }></Route>
            <Route path={ROUTES.SERVICES2} element={ <Services2 /> }></Route>
            <Route path={ROUTES.SERVICEDETAILS} element={ <ServicesDetails /> }></Route>
            <Route path={ROUTES.STUDENTREGISTRATION} element={ <StudentRegistration /> }></Route>

            {/* faqs */}
            <Route path={ROUTES.CARPAGE} element={ <CarPage /> }></Route>
            <Route path={ROUTES.CHECKOUT} element={ <Chckout /> }></Route>
            <Route path={ROUTES.EDUCATIONSHOP} element={ <EducationShop /> }></Route>
            <Route path={ROUTES.FAQ} element={ <Faq /> }></Route>
            <Route path={ROUTES.PRICINGTABLES} element={ <PricingTables /> }></Route>
            <Route path={ROUTES.SHOPDETAILS} element={ <ShopDetails /> }></Route>
            <Route path={ROUTES.SIGNIN} element={ <SignIn /> }></Route>
            <Route path={ROUTES.SIGNUP} element={ <SignUp /> }></Route>
            <Route path={ROUTES.TESTIMONIAL} element={ <Testimonial /> }></Route>

            {/* event */}
            <Route path={ROUTES.EVENT} element={ <Event /> }></Route>
            <Route path={ROUTES.EVENTDETAILS} element={ <EventDetails /> }></Route>
            <Route path={ROUTES.INSTRUCTORDETAILS} element={ <InstructorDetails /> }></Route>
            <Route path={ROUTES.INSTRUCTORREGISTRATION} element={ <InstructorRegistration />}></Route>
            <Route path={ROUTES.INSTRUDTOR} element={ <Instrudtor /> }></Route>

            {/* blog */}
            <Route path={ROUTES.BLOGDETAILS} element={ <BlogDetails /> }></Route>
            <Route path={ROUTES.BLOGSIDEBAR} element={ <BlogSidebar /> }></Route>
            <Route path={ROUTES.BLOGSTYLE1} element={ <BlogStyle1 /> }></Route>
            <Route path={ROUTES.BLOGSTYLE2} element={ <BlogStyle2 /> }></Route>
            <Route path={ROUTES.CONTACT} element={ <Contact /> }></Route>



        </Routes>
        </>
    )
}