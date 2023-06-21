import {VStack , Image, Heading,Text} from '@chakra-ui/react'
import React from 'react'

function ExchangeCard(prop) {
    console.log(prop.name);
  return (
    <>
        <a href={prop.url} target='blank'>
            <VStack
            w={"52"}
            shadow={"lg"}
            p={"8"}
            borderRadius={"lg"}
            transition={"all 0.3s"}
            m={"4"}
            css={{
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            >
                <Image
                src={prop.img} 
                w={"10"} 
                h={"10"} 
                objectFit={"contain"}
                alt={"Exchange"}
                />
                <Heading size={'md'} noOfLines={1}>{prop.rank}</Heading>
                <Text>{prop.name}</Text>
            </VStack>
        </a>
    </>
  )
}

export default ExchangeCard;