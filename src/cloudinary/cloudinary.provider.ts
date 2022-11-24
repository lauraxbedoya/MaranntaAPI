import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: 'dream-solutions',
      api_key: '857922533557964',
      api_secret: 'qZuwNy11c9KsGDTh3EOyml7YOo8',
    });
  },
};