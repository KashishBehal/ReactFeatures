import React from 'react'



import { lazy , Suspense } from 'react';

const Lazy=lazy(()=>import('./Lazy'))
const Lazy1=lazy(()=>import('./Lazy1'))
export const LazyLoading = () => {
  return (
    <div>
        <h1>LazyLoading</h1>
        <Suspense fallback={<div>Please wait loading component 1..........</div>}>
    <Lazy/>
   
    </Suspense>
    <Suspense fallback={<div>Please wait loading component 2..........</div>}>
   
    <Lazy1/>
    </Suspense>
    </div>
  )
}
