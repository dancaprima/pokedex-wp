import { BASE_IMG_URL } from '../url';

export const generateImage = param =>
  `${BASE_IMG_URL}/${param.toLowerCase()}.jpg`;
