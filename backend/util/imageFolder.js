const fs = require("fs");
const path = require("path");

const createImageFolder = () => {
  const uploadsFolder = "../uploads";
  const ImagesFolder = "images";

  const fullPath = path.join(__dirname, uploadsFolder, ImagesFolder);

  if (!fs.existsSync(fullPath)) {
    try {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log("Image folder successfully created");
    } catch (err) {
      console.log("Couldn't create image folder.");
      throw err;
    }
  }
};

module.exports = createImageFolder;