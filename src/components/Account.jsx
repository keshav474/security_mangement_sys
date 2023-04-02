import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import IntrusionAlert from "./IntrusionAlert";
import {LiveFeed , stopFunction} from "./LiveFeed";
import img from "./images/user.png";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      stopFunction();
      navigate("/");

      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="bg-gray-500">

        <div>
          <h1 className="text-2xl font-bold py-4">Account</h1>
          <p>User Email: {user && user.email}</p>
        </div>
        <div className="max-w-[600px] mx-auto my-1 p-4">

          <video width="1280" height="70" controls>
            <source
              src="https://play.streamingvideoprovider.com/popplayer.php?it=7oi83pmagi04&is_link=1&w=720&h=405&pause=1&title=HOSTEL+CCTV&skin=3&repeat=&brandNW=1&start_volume=34&bg_gradient1=%23ffffff&bg_gradient2=%23e9e9e9&fullscreen=1&fs_mode=2&skinAlpha=50&colorBase=%23250864&colorIcon=%23ffffff&colorHighlight=%237f54f8&direct=false&no_ctrl=&auto_hide=1&viewers_limit=0&cc_position=bottom&cc_positionOffset=70&cc_multiplier=0.03&cc_textColor=%23ffffff&cc_textOutlineColor=%23ffffff&cc_bkgColor=%23000000&cc_bkgAlpha=0.1&image=https%3A%2F%2Fmember.streamingvideoprovider.com%2Fpanel%2Fserver%2Fclip%3Fa%3DGenerateThumbnail%26clip_id%3D6611949%26size%3Dlarge&mainBg_Color=%23ffffff&aspect_ratio=16%3A9&play_button=1&play_button_style=pulsing&sleek_player=1&stretch=&auto_play=0&auto_play_type=unMute&floating_player=none"
              type="video/mp4"
            />
          </video>
        <IntrusionAlert />
        <button onClick={handleLogout} className="border px-4 py-2 my-4 mx-5 bg-slate-  border-slate-500 bg-slate-600 hover:bg-slate-500   text-white">
          Logout
        </button>
          <LiveFeed />
        </div>
      
    </div>
  );
};

export default Account;
