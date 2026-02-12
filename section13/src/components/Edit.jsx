import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from './Header'
import Button from './Button'

const Edit = ()=>{
  const params = useParams();
  return <>
   <h2>{params.id}Edit</h2>
  </>
}
export default Edit;