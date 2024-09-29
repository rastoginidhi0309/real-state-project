'use client';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

const ViewDetails = () => {

  const { id } = useParams();
  const [propertyList, setPropertyList] = useState(JSON.parse(localStorage.getItem('property')) || []);
  const [propertyDetails, setPropertyDetails] = useState(
    propertyList[parseInt(id)]
  );

  return (
    <div className='max-w-[80%] mx-auto mt-5'>

      <h1 className='text-center my-8 font-bold text-3xl'>Property Details</h1>

      {
        propertyDetails !== null ? (

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className=''>
              <img src={propertyDetails.image} className='w-full rounded-lg' alt="" />
            </div>

            <div className='flex justify-between'>
              <div>
                <div className='mt-4'>
                  <h4 className='font-bold'>Property Name</h4>
                  <p>{propertyDetails.name}</p>
                </div>

                <div className='mt-4'>
                  <h4 className='font-bold'>Property Owner</h4>
                  <p>{propertyDetails.owner}</p>
                </div>

                <div className='mt-4'>
                  <h4 className='font-bold'>contact</h4>
                  <p>{propertyDetails.contact}</p>
                </div>

                <div className='mt-4'>
                  <h4 className='font-bold'>Address</h4>
                  <p>{propertyDetails.address}</p>
                </div>

                <div className='mt-4'>
                  <h4 className='font-bold'>Pincode</h4>
                  <p>{propertyDetails.pincode}</p>
                </div>

                <div className='mt-4'>
                  <h4 className='font-bold'>City</h4>
                  <p>{propertyDetails.city}</p>
                </div>



              </div>
              <div className='mt-4'>
                <h4 className='font-bold'>Price</h4>
                <p className='text-xl'>₹ {propertyDetails.price}</p>
              </div>
            </div>

          </div>
        ) : (
          <h2 className='text-center mt-8 font-bold text-4xl text-gray-300'>Loading Details... </h2>
        )
      }
    </div>
  )
}

export default ViewDetails;
