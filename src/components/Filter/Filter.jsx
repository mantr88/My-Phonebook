import {
  FormControl,
  FormLabel,
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
    <Box maxW={['200px', '480px', '480px']} mx="auto">
      <FormControl mb="4">
        <FormLabel fontSize={['l', 'xl', 'xl']}>
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
