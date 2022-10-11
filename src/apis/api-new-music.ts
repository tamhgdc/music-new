import axiosClient from './axios-client';

const NewMusicAPI = {
  getNewMusic(params: any): Promise<any> {
    const url = 'music/new-music';
    return axiosClient.get(url, { params });
  },
};
export default NewMusicAPI;
