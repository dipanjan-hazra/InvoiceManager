import axios from 'axios';

const API_URL ="http://localhost:8080";
export const saveInvoice = async(playload)=>{
    try{
      return await axios.post(`${API_URL}/invoice`,playload)
    }catch(err){
        console.log("error:",err.message);
        return err.response.data;
    }
}


export const getAllInvoice = async()=>{
  try{
      return await axios.get(`${API_URL}/invoice`)
  }catch(err){
    console.log("Error -- ",err.message);
    return err.response.data;
  }
}

export const deleteInvoice = async(id)=>{
    try{
      return await axios.delete(`${API_URL}/invoice/${id}`);
    }catch(err){
        console.log("error:",err.message);
        return err.response.data;
    }
}