import React, { useEffect, useState } from 'react';
import axios from "axios";
import {server} from '../index';
import ErrorComponent from './ErrorComponent';
import { HStack,Container } from '@chakra-ui/react';
// import { wrap } from 'framer-motion';
import ExchangeCard from './ExchangeCard';
import Loader from './Loader';

function Exchanges() {
  const [exchange,setexchange]=useState([]);
  const [loading,setloading]=useState(true);
  const [error,seterror]=useState(false);
  
  useEffect(()=>{
    const fetchExchange= async()=>{
      try{
        const {data}=await axios.get(`${server}/exchanges`);
        setexchange(data);
        setloading(false);
      }
      catch(error){
        seterror(true);
        setloading(false);
      }
    }
    fetchExchange();
  },[]);

  if(error) return <ErrorComponent message={"error while doing fetching"}/>;
  return (
    <Container maxW={"container.xl"}>
      {
        loading?(<Loader/>):(
          <HStack wrap={'wrap'} justifyContent={"space-evenly"}>
        {exchange.map((i)=>(
          <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url
          } />
        ))
        };
      </HStack>
        )
      }
    </Container>
    
  )
}

export default Exchanges;