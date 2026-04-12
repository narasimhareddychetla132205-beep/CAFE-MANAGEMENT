import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const LOCAL_DB_URI = "mongodb://localhost:27017/cafeDB";
const ATLAS_DB_URI = process.env.MONGODB_URI;

// Define schemas
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const orderSchema = new mongoose.Schema({
  items: String,
  total: Number,
  date: { type: Date, default: Date.now }
});

async function migrateData() {
  let localConn, atlasConn;

  try {
    // Connect to local MongoDB
    console.log("Connecting to local MongoDB...");
    localConn = mongoose.createConnection(LOCAL_DB_URI);
    
    // Connect to MongoDB Atlas
    console.log("Connecting to MongoDB Atlas...");
    atlasConn = mongoose.createConnection(ATLAS_DB_URI);

    // Wait for connections to open
    await new Promise(resolve => localConn.on("open", resolve));
    await new Promise(resolve => atlasConn.on("open", resolve));

    console.log("✓ Connected to both databases\n");

    // Define models for local DB
    const LocalUser = localConn.model("User", userSchema);
    const LocalOrder = localConn.model("Order", orderSchema);

    // Define models for Atlas DB
    const AtlasUser = atlasConn.model("User", userSchema);
    const AtlasOrder = atlasConn.model("Order", orderSchema);

    // Migrate Users
    console.log("Migrating Users...");
    const users = await LocalUser.find();
    if (users.length > 0) {
      await AtlasUser.insertMany(users);
      console.log(`✓ Migrated ${users.length} users\n`);
    } else {
      console.log("No users to migrate\n");
    }

    // Migrate Orders
    console.log("Migrating Orders...");
    const orders = await LocalOrder.find();
    if (orders.length > 0) {
      await AtlasOrder.insertMany(orders);
      console.log(`✓ Migrated ${orders.length} orders\n`);
    } else {
      console.log("No orders to migrate\n");
    }

    console.log("✓ Migration completed successfully!");

  } catch (error) {
    console.error("Migration failed:", error.message);
    process.exit(1);
  } finally {
    // Close connections
    if (localConn) await localConn.close();
    if (atlasConn) await atlasConn.close();
    process.exit(0);
  }
}

migrateData();
