'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AddProperty = () => {

    const [propertyList, setPropertyList] = useState(JSON.parse(localStorage.getItem('property')) || []);

    const propertyForm = useFormik({
        initialValues: {
            name: '',
            image: '',
            price: '',
            address: '',
            contact: '',
            owner: '',
            pincode: '',
            city: ''
        },
        onSubmit: (values) => {
            console.log(values);

            const temp = [...propertyList, values];
            localStorage.setItem('property', JSON.stringify(temp));
            toast.success('Property Added Successfully');

        }
    });

    const [previewUrl, setPreviewUrl] = useState('');

    const uploadfile = (e) => {
        const file = e.target.files[0];

        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('upload_preset', 'preset123');
        formdata.append('cloud_name', 'dzwjbwlud');

        axios.post('https://api.cloudinary.com/v1_1/dzwjbwlud/image/upload', formdata)
            .then((result) => {
                toast.success('File Uploaded Successfully');
                console.log(result.data);
                setPreviewUrl(result.data.url);
                propertyForm.setFieldValue('image', result.data.url);


            }).catch((err) => {
                console.log(err);
                toast.error('File Upload Failed');
            });
    }

    return (
        <>
            {/* Card Section */}
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
                {/* Card */}
                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                            Profile
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                            Manage your name, password and account settings.
                        </p>
                    </div>
                    <form onSubmit={propertyForm.handleSubmit}>
                        {/* Grid */}
                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Uploaded Image
                                </label>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-9">
                                <div className="flex items-center gap-5">
                                    <img
                                        className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
                                        src={previewUrl || "https://preline.co/assets/img/160x160/img1.jpg"}
                                        alt="Avatar"
                                    />
                                    <div className="flex gap-x-2">
                                        <div>
                                            <label
                                                htmlFor='upload-image'
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                            >
                                                <svg
                                                    className="shrink-0 size-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                    <polyline points="17 8 12 3 7 8" />
                                                    <line x1={12} x2={12} y1={3} y2={15} />
                                                </svg>
                                                Upload photo
                                            </label>
                                            <input type="file" id='upload-image' onChange={uploadfile} hidden />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="af-account-full-name"
                                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                                >
                                    Property name
                                </label>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-9">
                                <div className="sm:flex">
                                    <input
                                        id="name"
                                        onChange={propertyForm.handleChange}
                                        value={propertyForm.values.name}
                                        type="text"
                                        className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px sm:mt-0 rounded text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="af-account-full-name"
                                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                                >
                                    Property Owner
                                </label>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-9">
                                <div className="sm:flex">
                                    <input
                                        id="owner"
                                        onChange={propertyForm.handleChange}
                                        value={propertyForm.values.owner}
                                        type="text"
                                        className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px sm:mt-0 rounded text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="af-account-full-name"
                                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                                >
                                    Price
                                </label>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-9">
                                <div className="sm:flex">
                                    <input
                                        id="price"
                                        onChange={propertyForm.handleChange}
                                        value={propertyForm.values.price}
                                        type="text"
                                        className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px sm:mt-0 rounded text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="af-account-full-name"
                                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                                >
                                    Pincode
                                </label>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-9">
                                <div className="sm:flex">
                                    <input
                                        id="pincode"
                                        onChange={propertyForm.handleChange}
                                        value={propertyForm.values.pincode}
                                        type="text"
                                        className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px sm:mt-0 rounded text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="af-account-full-name"
                                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                                >
                                    City
                                </label>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-9">
                                <div className="sm:flex">
                                    <input
                                        id="city"
                                        onChange={propertyForm.handleChange}
                                        value={propertyForm.values.city}
                                        type="text"
                                        className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px sm:mt-0 rounded text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="af-account-full-name"
                                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                                >
                                    Contact
                                </label>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-9">
                                <div className="sm:flex">
                                    <input
                                        id="contact"
                                        onChange={propertyForm.handleChange}
                                        value={propertyForm.values.contact}
                                        type="text"
                                        className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px sm:mt-0 rounded text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="af-account-full-name"
                                    className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                                >
                                    Property Address
                                </label>
                            </div>
                            {/* End Col */}
                            <div className="sm:col-span-9">
                                <div className="sm:flex">
                                    <textarea
                                        id="address"
                                        onChange={propertyForm.handleChange}
                                        value={propertyForm.values.address}
                                        className="border py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px sm:mt-0 rounded text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* End Grid */}
                        <div className="mt-5 flex justify-end gap-x-2">
                            <button
                                type="submit"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                {/* End Card */}
            </div>
            {/* End Card Section */}
        </>

    )
}

export default AddProperty;