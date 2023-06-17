import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Box,
  Icon,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { TbListSearch } from 'react-icons/tb';
import { changeFilter } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);
  const changeValue = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <Box maxW="480px" mx="auto">
      <Heading as="h3" mb="3">
        Your contacts
      </Heading>
      <FormControl mb="4">
        <FormLabel>
          <Icon as={TbListSearch} mr="5px" mb="-2px" />
          Find contacts by name
          <Input
            type="text"
            value={value}
            onChange={changeValue}
            mt="2"
          ></Input>
        </FormLabel>
      </FormControl>
    </Box>
  );
};
