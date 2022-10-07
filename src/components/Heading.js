/** @format */

import { useLocation } from 'react-router-dom';

const Heading = () => {
  const location = useLocation();
  const { svg } = location?.state?.flag ?? '';
  return (
    <section className="text-white bg-slate-400 h-40 p-5 center">
      <img
        src={svg
          ?? 'https://cdn.shortpixel.ai/spai/q_lossy+w_810+to_webp+ret_img/https://www.geographyrealm.com/wp-content/uploads/2019/08/Antipodes_globe.png'}
        alt={svg}
        className="h-32 black mx-auto "
      />
    </section>
  );
};
export default Heading;
