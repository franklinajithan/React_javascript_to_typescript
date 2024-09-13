import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layouts/Header";
import { useTranslation } from "react-i18next";
import { FiUsers } from "react-icons/fi";
import { Card } from "react-bootstrap";
import HeaderComponents from "@/components/elements/HeaderSection";
import { CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import SelectField from "@/components/elements/SelectField";
import InputField from "@/components/elements/InputField";
import { sample } from "@/data/constants";
import { userSchema } from "@/lib/utils";
import CardTitle from "@/components/elements/CardTitle";
import { Form } from "@/components/ui/form";
import { FaCheck } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import LabelField from "@/components/elements/LabelField";
import CheckboxField from "@/components/elements/CheckboxField";
import defaultProfileImage from '../../assets/img/user.png';
import { countries, roles, storeLocations, ukCities, ukRegions, visaStatuses, visaTypes } from "@/data/enum";
import { CalendarInput } from "@/components/elements/CalendarInput";

export default function NewUser({ title, icon }: any) {

    const { t } = useTranslation("global");
    const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
    const [isLoading, setIsLoading] = useState(false);
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate();

    const [isOpenBasicInfo, setIsOpenBasicInfo] = useState(true);
    const [isOpenVisaInfo, setIsOpenVisaInfo] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [isPhoneVerified, setIsPhoneVerified] = useState(false);

    const [selectedImage, setSelectedImage] = useState<File | null>(null); // State for image upload
    const [imagePreview, setImagePreview] = useState<string | null>(null); // State for image preview

    const toggleBasicInfo = () => setIsOpenBasicInfo(!isOpenBasicInfo);
    const toggleVisaInfo = () => setIsOpenVisaInfo(!isOpenVisaInfo);

    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            Id: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            postalCode: "",
            country: "",
            username: "",
            password: "",
            confirmPassword: "",
            role: "",
            assignStore: "",
            visaNumber: "",
            visaType: "",
            issueDate: "",
            expiryDate: "",
            visaIssuedBy: "",
            visaStatus: ""
        }
    });

    const { control, handleSubmit, formState: { errors } } = form;

    const onSubmit = (values: z.infer<typeof userSchema>) => {
        setIsLoading(true);
        //console.log(values);
        // Handle form submission, including file upload if needed
        setIsLoading(false);
    };

    const handleRedirect = () => {
        navigate('/user/new-user'); // Redirect to the desired path
    };

    const verifyEmail = () => {
        // Add real email verification logic here
        setIsEmailVerified(true);
    };

    const verifyPhone = () => {
        // Add real phone verification logic here
        setIsPhoneVerified(true);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectedImage(file);
            setImagePreview(URL.createObjectURL(file)); // Generate preview URL
        }
    };

    return (
        <React.Fragment>

            <div className="main main-app p-lg-1">
                <div className="min-h-screen bg-zinc-50">
                    {/* Header */}
                    <HeaderComponents icon={icon} title={title} />

                    <Card className="card-one mt-2">
                        <CardTitle title="Basic Information" onToggle={toggleBasicInfo} isOpen={isOpenBasicInfo} />
                        <Form {...form}>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                <>
                                    {isOpenBasicInfo && (
                                        <CardContent>
                                            <div className="flex w-full gap-3">
                                                <div className="grid grid-cols-1  w-1/6 mt-4">
                                                    {/* Image Upload */}
                                                    <div className="col-span-1 flex flex-col justify-center items-center h-full bg-gradient-to-br from-cyan-700 via-cyan-800 to-cyan-700 p-6 rounded-lg ">
                                                        <div className="relative mb-4 bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-600 p-2 rounded-full">
                                                            <img
                                                                src={imagePreview || defaultProfileImage}
                                                                alt="Profile"
                                                                className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-xl transform scale-90 transition-transform duration-300 ease-in-out hover:scale-110"
                                                                style={{ position: 'relative', zIndex: 10 }}
                                                            />
                                                        </div>
                                                        <div className="relative">
                                                            <input type="file" accept="image/*" onChange={handleImageChange} id="file-input" className="hidden" />
                                                            <label htmlFor="file-input" className="w-full cursor-pointer bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gradient-to-r hover:from-cyan-700 hover:via-cyan-800 hover:to-cyan-900 transition-colors duration-300 ease-in-out"
                                                                style={{ position: 'relative', zIndex: 5 }}
                                                            >
                                                                Upload Profile Picture
                                                            </label>
                                                        </div>
                                                    </div>



                                                </div>
                                                <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
                                                <div className="grid grid-cols-1 w-5/6 md:grid-cols-2 lg:grid-cols-5 gap-3 mt-4">
                                                    <InputField control={control} label="Employee Id" name="Id" type="text" placeholder="Enter your Id" />
                                                    <InputField control={control} label="First Name" name="firstName" type="text" placeholder="Enter your First name" />
                                                    <InputField control={control} label="Last Name" name="lastName" type="text" placeholder="Enter your last name" />
                                                    <CalendarInput control={control} label="Date of Birth" name="dateOfBirth" value={null} />
                                                    <InputField control={control} name="email" label="Email Address" type="email" placeholder="Enter your email address" />
                                                    <InputField control={control} name="phone" label="Phone Number" type="tel" placeholder="Enter your phone number" />
                                                    <InputField control={control} label="Address" name="address" type="text" placeholder="Enter your address" />
                                                    <SelectField control={control} label="City" name="city" options={ukCities} />
                                                    <SelectField control={control} label="State/Province" name="state" options={ukRegions} />
                                                    <InputField control={control} label="Postal Code" name="postalCode" type="text" placeholder="Enter your postal code" />
                                                    <SelectField control={control} label="Country" name="country" options={countries} />
                                                </div>
                                            </div>
                                            <h6 className="mt-4 font-bold">Sign in Information</h6>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mt-4">
                                                <InputField control={control} label="Username" name="username" type="text" placeholder="Enter the username" />
                                                <InputField control={control} label="Password" name="password" type="password" placeholder="Enter your password" />
                                                <InputField control={control} label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm your password" />
                                            </div>
                                            <h6 className="mt-4 font-bold">Store Information</h6>
                                            <div className="grid grid-cols-6 md:grid-cols-2 lg:grid-cols-6 gap-3 mt-4">
                                                <SelectField control={control} label="Role" name="role" options={roles} />
                                                <SelectField control={control} label="Assign Store" name="assignStore" options={storeLocations} />
                                                <CheckboxField control={control} id="mobileAccess" label="Access to Mobile" name="mobileAccess" />
                                                <CheckboxField control={control} id="desktopAccess" label="Access to Desktop" name="desktopAccess" />
                                                <CheckboxField control={control} id="posAccess" label="User Access to Pos" name="posAccess" />

                                            </div>
                                            <h6 className="mt-4 font-bold">Visa Information</h6>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mt-4">
                                                <InputField control={control} label="Visa Number" name="visaNumber" type="text" placeholder="Enter your visa number" />
                                                <SelectField control={control} label="Visa Type" name="visaType" options={visaTypes} />
                                                <InputField control={control} label="Issue Date" name="issueDate" type="date" />
                                                <InputField control={control} label="Expiry Date" name="expiryDate" type="date" />
                                                <InputField control={control} label="Visa Issued By" name="visaIssuedBy" type="text" placeholder="Enter the issuing authority" />
                                                <SelectField control={control} label="Visa Status" name="visaStatus" options={visaStatuses} />
                                            </div>
                                            <hr className="border-t border-zinc-300 " />
                                            <div className="flex justify-end space-x-4  mt-2 pr-4">
                                                <button className="btn-zinc">
                                                    Cancel
                                                </button>
                                                <Button type="submit" disabled={isLoading} className='btn-cyan'>
                                                    {isLoading ? (
                                                        <>
                                                            <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
                                                        </>)
                                                        : "Submit"}
                                                </Button>
                                            </div>
                                        </CardContent>
                                    )}
                                </>
                            </form>
                        </Form>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
}
