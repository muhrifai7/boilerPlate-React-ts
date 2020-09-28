import axios from 'axios';
import {Props} from 'react-native-paper/lib/typescript/src/components/RadioButton/RadioButtonItem';

type PropsRequest = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH';
  path?: string;
  data?: any;
  imageFile?: any;
};

export const fetchRequest = async ({method, path, data}: PropsRequest) => {
  try {
    const token = await localStorage.getItem('@tokens');
    if (token != undefined) {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
        method,
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.error != null) {
        throw result.error;
      } else {
        return result;
      }
    } else {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
        method,
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.error != null) {
        throw result.error;
      } else {
        return result;
      }
    }
  } catch (error) {
    throw error;
  }
};
export const fetchFormData = async ({path, imageFile}: PropsRequest) => {
  const url = `${process.env.REACT_APP_API_URL}${path}`;
  try {
    const formData = new FormData();
    if (imageFile instanceof Array) {
      await imageFile.map(item => {
        formData.append('image', item);
      });
    } else {
      formData.append('image', imageFile);
    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const response = await axios.post(url, formData, config);
    const result = await response.data;
    return result;
  } catch (error) {
    throw error;
  }
};
