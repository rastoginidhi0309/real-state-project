'use client';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().required('Password is required')
        .min(5, 'Password must be at least 5 characters')
        .matches(/[A-Z]/, 'Password must contain an uppercase letter')
        .matches(/[a-z]/, 'Password must contain a lowercase letter')
        .matches(/[0-9]/, 'Password must contain a number')
        .matches(/\W/, 'Password must contain a special character'),
    confirmPassword: Yup.string().required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
const Signup = () => {

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const router = useRouter();

    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (values, { resetForm, setSubmitting }) => {
            console.log(values);
            // setSubmitting(true);
            // send values to backend
            const usersData = [...users, values];
            setUsers(usersData);
            localStorage.setItem('users', JSON.stringify(usersData));
            resetForm();
            router.push('/login');

        },
        validationSchema: signupSchema
    });

    return (
        <div>
            <>
                {/* Hero */}
                <div className="relative overflow-hidden">
                    <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
                        <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
                            {/* Title */}
                            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-neutral-200">
                                Start your Journey with Us
                            </h1>
                            <p className="mt-3 text-base text-gray-500 dark:text-neutral-500">
                                Sign up to get started with your journey and get access to all our features.
                            </p>
                            {/* Form */}
                            <form onSubmit={signupForm.handleSubmit} className='mt-5'>
                                <div className="mb-4">
                                    <label
                                        htmlFor="hs-hero-name-2"
                                        className="block text-sm font-medium dark:text-white"
                                    >
                                        <span className="sr-only">Full name</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        onChange={signupForm.handleChange}
                                        value={signupForm.values.name}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="Full name"
                                    />
                                    {
            (signupForm.touched.name && signupForm.errors.name) && (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.name}</p>
            )
          }
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="hs-hero-email-2"
                                        className="block text-sm font-medium dark:text-white"
                                    >
                                        <span className="sr-only">Email address</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        onChange={signupForm.handleChange}
                                        value={signupForm.values.email}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="Email address"
                                    />
                                    {
            (signupForm.touched.email && signupForm.errors.email) && (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.email}</p>
            )
          }
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="hs-hero-password-2"
                                        className="block text-sm font-medium dark:text-white"
                                    >
                                        <span className="sr-only">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={signupForm.handleChange}
                                        value={signupForm.values.password}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="Password"
                                    />
                                    {
            (signupForm.touched.password && signupForm.errors.password) && (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.password}</p>
            )
          }
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="hs-hero-password-2"
                                        className="block text-sm font-medium dark:text-white"
                                    >
                                        <span className="sr-only">Confirm Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        onChange={signupForm.handleChange}
                                        value={signupForm.values.confirmPassword}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="Confirm Password"
                                    />
                                    {
            (signupForm.touched.confirmPassword && signupForm.errors.confirmPassword) && (
              <p className='text-red-500 mb-5 text-sm'>{signupForm.errors.confirmPassword}</p>
            )
          }
                                </div>
                                <div className="grid">
                                    <button
                                        type="submit"
                                        className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                            {/* End Form */}
                        </div>
                    </div>
                    <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')] bg-no-repeat bg-center bg-cover" />
                    {/* End Col */}
                </div>
                {/* End Hero */}
            </>

        </div>
    )
}

export default Signup
