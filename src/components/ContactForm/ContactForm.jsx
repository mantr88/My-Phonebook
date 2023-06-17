import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { Form, ErrorMessage, FormField, Field } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  FormErrorMessage,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { GrUserAdd } from 'react-icons/gr';
import { BsTelephonePlus } from 'react-icons/bs';

const regExpForName =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const regExpForNumber =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .matches(regExpForName)
    .required('Requered field'),
  number: Yup.string()
    .matches(regExpForNumber, 'Invalid phone number')
    .max(17, 'Must be < 17!')
    .min(4, 'Must be > 4!')
    .required('Requered field'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Box maxW="480px" mx="auto">
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={UserSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch(addContact(values));
          actions.resetForm();
        }}
      >
        <Form>
          <FormControl isRequired mb="12px">
            <FormLabel htmlFor="name">
              <Icon as={GrUserAdd} mr="5px" />
              Name
              <Field
                as={Input}
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Enter contact name"
                _placeholder={{
                  opacity: 0.6,
                  color: 'black',
                }}
              />
              <ErrorMessage
                as={FormErrorMessage}
                name="name"
                component="div"
              />
            </FormLabel>
          </FormControl>
          <FormLabel htmlFor="number">
            <Icon as={BsTelephonePlus} mr="5px" />
            Number
            <Field
              as={Input}
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter contact phone number"
              _placeholder={{
                opacity: 0.6,
                color: 'black',
              }}
            />
            <ErrorMessage
              as={FormErrorMessage}
              name="number"
              component="div"
            />
          </FormLabel>
          <Button type="submit" colorScheme="teal">
            Add contact
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};
