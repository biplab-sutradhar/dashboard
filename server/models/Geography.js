import mongoose from "mongoose";

// Define schema for properties
const propertiesSchema = new mongoose.Schema({
  name: String
});

// Define schema for geometry
const geometrySchema = new mongoose.Schema({
  type: String,
  coordinates: mongoose.Schema.Types.Mixed // Since coordinates can be either a single array or nested arrays, using Mixed type
});

// Define schema for feature
const featureSchema = new mongoose.Schema({
  type: String,
  properties: propertiesSchema,
  geometry: geometrySchema,
  id: String
});

// Define schema for FeatureCollection
const featureCollectionSchema = new mongoose.Schema({
  type: String,
  features: [featureSchema]
});

// Create mongoose model for FeatureCollection
const Geography = mongoose.model("FeatureCollection", featureCollectionSchema);

export default Geography;