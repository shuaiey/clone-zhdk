import { useState } from "react";

export default function Video({ title, src, width = 16, height = 9 }) {
  return (
    <div
      className="box-green-dark"
      data-title={title}
      style={{ "--aspect-ratio": width / height }}
    >
      <iframe
        title={title || src}
        allowFullScreen=""
        allow="autoplay; fullscreen"
        src={src}
      />
    </div>
  );
}

export function VideoWithCover({ title, src, width = 16, height = 9 }) {
  const [play, setPlay] = useState(false);

  return (
    <div
      className="box-green-dark wfull"
      data-title={title}
      style={{ "--aspect-ratio": width / height }}
    >
      {play && (
        <iframe
          title={title || src}
          allowFullScreen
          allow="autoplay; fullscreen"
          // src="https://www.youtube.com/embed/ll2Jpu9vhRI?feature=oembed?autoplay=1&rel=0"
          src={`${src}&autoplay=1&rel=0`}
        />
      )}
      {!play && (
        <div className="abs flex">
          <img
            className="wfull"
            alt="Antiviral video cover"
            src="https://www.zhdk.ch/static/dist/img/Antiviral_Gif_1200_End_3_colorcorrected.gif"
          />
          <button
            type="button"
            onClick={() => setPlay(true)}
            className="_btn bg-none abs-center f-20 f-serif fsi f-white hover:color"
          >
            play
          </button>
        </div>
      )}
    </div>
  );
}

// <iframe
//   width="200"
//   height="113"
//   src="https://www.youtube.com/embed/kuVusQP-Aw4?feature=oembed"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>;

// const Medienarchiv =
//   '<div class="___madek-embed">   <iframe   width="640"   height="360"   src="https://medienarchiv.zhdk.ch/entries/7ddbe63e-7bb1-44bb-bfd7-44d5b363b688/embedded?height=360&amp;width=640"   frameborder="0"   style="margin:0;padding:0;border:0"   allowfullscreen   webkitallowfullscreen   mozallowfullscreen   ></iframe> </div>';
// const YouTube =
//   '<iframe width="200" height="113" src="https://www.youtube.com/embed/-NtuOzmuqzU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
