'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';
import OrderFormUI from '../../../src/ui/OrderForm';

export default function OrderFormPreview() {
  return (
    <div>
      <VariantWrapper label="OrderForm — Default" index={0}>
        <OrderFormUI
          title="অর্ডার ফর্ম"
          description="আপনার পছন্দের পণ্যটি অর্ডার করুন"
          productName="Premium Panjabi Set"
          productPrice="৳999"
          submitButtonText="অর্ডার কনফার্ম করুন"
          namePlaceholder="আপনার নাম"
          phonePlaceholder="মোবাইল নম্বর"
          addressPlaceholder="সম্পূর্ণ ঠিকানা"
          notesPlaceholder="অতিরিক্ত তথ্য (ঐচ্ছিক)"
          cashOnDeliveryText="ক্যাশ অন ডেলিভারি"
          shippingOptions={[
            { id: "inside",  label: "ঢাকার ভেতরে (৬০ টাকা)",  price: 60  },
            { id: "outside", label: "ঢাকার বাইরে (১২০ টাকা)", price: 120 },
          ]}
          colors={{ primary: '#F36621', text: '#27272a', background: '#ffffff' }}
        />
      </VariantWrapper>
    </div>
  );
}
