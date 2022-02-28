import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const TopRibbon = () => {
  return (
    <Flex bg="black" justifyContent="center" paddingY="0.6rem" paddingX="1rem">
      <Box w="100%" maxW="930px" color="white" fontSize="14px">
        Mon -Thu: 9:00am - 6:00pm
      </Box>
    </Flex>
  )
}

export default TopRibbon
