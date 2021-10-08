import _ from "lodash";

function getBlurPath(url) {
  const startPath = "https://res.cloudinary.com/davien21/image/upload/";
  const blurSetting = "c_scale,e_blur:100,q_54,w_379/";
  const endPath = url.split("/upload/")[1];
  const blurPath = startPath + blurSetting + endPath;
  return blurPath;
}

export { getBlurPath };
