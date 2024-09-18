const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connexion à MongoDB réussie !");
  } catch (error) {
    console.error("Erreur lors de la connexion à MongoDB :", error.message);
    process.exit(1); // Arrête le serveur en cas d'échec de la connexion
  }
};

module.exports = connectDB;
