const cloudinary = require("cloudinary").v2; //! Cloudinary is being required
const dotenc = require("dotenv"); //! Dotenv is being required
dotenc.config(); //! Configuring the Dotenv

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY,
			api_secret: process.env.API_SECRET,
		});
	} catch (error) {
		console.log(error);
	}
};