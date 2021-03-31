import axios from 'axios';

interface Options {
  user: string;
  password: string;
}

const getWeather = (): Promise<void> => {
  return axios
    .post<Options>('https://pfa.foreca.com/authorize/token?expire_hours=2', {
      user: 'samoilnikolai',
      password: '4960CKTz5kHt',
    })
    .then((res) => console.log(res));
};

// axios.post<Options[]>('https://pfa.foreca.com/authorize/token?expire_hours=2')
// .then((response) => {
//   console.log(response);
// })
export default getWeather;
