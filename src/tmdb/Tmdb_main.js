import { useEffect, useState } from 'react';
import axios from 'axios';
import './Tmdb_style.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Curation from '../Curation/Curation';
import { baseUrl } from '../commonApi_tmdb/baseUrl';
import MainChart from './Main_chart';
import MainSide from './Main_side';

const Tmdb_main = () => {
  const data = new FormData();
  data.append('usercode', localStorage.getItem('usercode'));

  // 큐레이션 파트
  // const [movie, setMovie] = useState([]);

  // useEffect(() => {
  //   getCuration();
  // }, []);

  // const getCuration = async () => {
  //   await axios
  //     .post(baseUrl + '/main', data)
  //     .then((response) => {
  //       console.log(response.data);
  //       setMovie(response.data.bestMovie);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <div className='main_wrap'>
      <MainChart />
      <MainSide />
      {/* 메인 중앙 큐레이션 */}
      <br />
      <br />
      <br />
      {/* <h1>뭐라고 적을까</h1> */}
      <div className='main_center'>
        <Curation key={localStorage.getItem('usercode')} />
      </div>
    </div>
  );
};

export default Tmdb_main;
